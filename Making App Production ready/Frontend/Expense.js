
//Grabbing the main form through it's id
const Add = document.getElementById('main-form')
const Leaderboard = document.getElementById('leaderboard-list');

//Adding an eventListener
Add.addEventListener("submit", addExpense);

//Callback function against the eventListener
async function addExpense(e) {
    e.preventDefault();
    try {

        //This is the expense object to be sent
        const myExpense = {
            amount: document.querySelector('#exp').value,
            category: document.querySelector('#caty').value,
            description: document.querySelector('#desc').value
        };

        // Getting the token from localStorage
        const token = localStorage.getItem('token')

        //To make an entry of new expense on the expense table
        const response = await axios.post('http://localhost:2203/expense/postExpense', myExpense, { headers: { "Authorization": token } });

        //To a new expense on the screen
        createList(response.data.newExpense);

    } catch (error) {
        console.log(error)
    }
}

document.getElementById('buy-premium').onclick = async (e) => {
    e.preventDefault();

    console.log("Entered purchase")
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:2203/purchase/premiumMembership', { headers: { 'Authorization': token } })

    var options = {
        "key": response.data.key_id, //Enter the id generated from the dashboard of razorpay
        "order_id": response.data.order.id, // For one time payment

        // This handler function will handle the success 
        "handler": async function (response) {
            await axios.post('http://localhost:2203/purchase/updateTransactionStatus', {
                order_id: options.order_id,
                payment_id: response.razorpay_payment_id,
                success: true
            }, { headers: { 'Authorization': token } })
            alert('You are a premium user now !')
            const btnParent = document.getElementById('buy-premium').parentElement
            const btnChild = btnParent.children[1]
            btnParent.removeChild(btnChild)
            document.getElementById('is-Premium').textContent = 'Hello, PREMIUM USER !!!'
        }
    }

    const rzp1 = new Razorpay(options)
    rzp1.open()

    rzp1.on('payment.failed', async function (response) {
        console.log('Failed executed')
        await axios.post(`http://localhost:2203/purchase/updateTransactionStatus`, {
            order_id: options.order_id,
            success: false
        }, {
            headers: { 'Authorization': token }
        })
        alert('Something went wrong')
    })

}
//Function to display new expense on the user screen
function createList(expense) {

    // Creating the new expense to be added
    var ul = document.querySelector('#main-list');

    var li = document.createElement('li');
    li.className = 'list-group-item';
    // console.log('Expense', expense)

    var liText = document.createTextNode(`Amount : ${expense.amount}, Category : ${expense.category}, Description : ${expense.description}`);
    // console.log(liText);

    li.appendChild(liText);
    ul.appendChild(li);

    //To set the fields of the form empty
    document.querySelector('#exp').value = '';
    document.querySelector('#caty').value = '';
    document.querySelector('#desc').value = '';

    //To create a delete button against the new expense
    var delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('Delete Expense'));
    delBtn.classList = 'btn btn-sm btn-warning float-right text-white delete mr-2';

    //To create a edit button against the new expense
    var edit = document.createElement('button');
    edit.appendChild(document.createTextNode('Edit Expense'));
    edit.classList = 'btn btn-dark text-white float-right btn-sm Edit mr-2';

    // To add delete and edit button against the new expense
    li.appendChild(delBtn);
    li.appendChild(edit);

    //Delete function for the delete button added recently
    delBtn.onclick = async function (e) {
        e.preventDefault();
        try {
            var id = expense.id;
            //Deleting from the expense table
            if (id) {
                const token = localStorage.getItem('token')
                const response = axios.delete(`http://localhost:2203/expense/delete-expense/${id}`, { headers: { "Authorization": token } })
            }
            //Removing from the screen
            var del = e.target.parentElement;
            ul.removeChild(del);
        } catch (error) {
            console.log(error)
        }

    }

    //Edit function for the edit button added recently
    edit.onclick = function (e) {
        e.preventDefault();
        try {
            //Editing in the expense table
            var id = expense.id;
            if (id) {
                const token = localStorage.getItem('token')
                const response = axios.delete(`http://localhost:2203/expense/delete-expense/${id}`, { headers: { "Authorization": token } })
            }
            //Removing old entry from the screen
            var onEdit = e.target.parentElement;
            ul.removeChild(onEdit);

            //Restore fields with the current entry
            document.querySelector('#exp').value = expense.amount;
            document.querySelector('#caty').value = expense.category;
            document.querySelector('#desc').value = expense.description;

        } catch (error) {
            console.log(error)
        }
    }
}


//showLeaderboard
function showLeaderboard(user) {
    // console.log(user)
    const li = document.createElement('li');
    const liText = `Name : ${user.names},TotalExpense : ${user.total_expense > 0 ? user.total_expense : 0} `
    const liTextNode = document.createTextNode(liText)

    li.appendChild(liTextNode)
    Leaderboard.appendChild(li)



}
//To display the entries form the table against the userId on loading the page
document.addEventListener('DOMContentLoaded', async (e) => {

    try {
        e.preventDefault();
        const token = localStorage.getItem('token')

        //To check if logged in user is a premium member or not
        const premiumMember = await axios.get('http://localhost:2203/check/isPremiumMember', { headers: { 'Authentication': token } })

        if (premiumMember.data.code == 'yes') {

            console.log('Premium Member logged in');

            const btnParent = document.getElementById('buy-premium').parentElement;
            const btnChild = btnParent.children[1];
            btnParent.removeChild(btnChild)

            const messageArea = document.getElementById('is-Premium')
            messageArea.textContent = 'WELCOME back ! PREMIUM MEMBER   '

            const btn = document.createElement('input'); btn.type = 'button'
            btn.value = 'Show Leaderboard'; btn.id = 'Leaderboard'; btn.classList = 'btn btn-sm btn-ml text-white bg-success';
            document.getElementById('is-Premium').appendChild(btn)

            btn.onclick = async () => {
                try {
                    console.log('Leaderboard button active :)')
                    document.getElementById('leaderboard-heading').innerText = 'Leaderboard'
                    const users = await axios.get('http://localhost:2203/leaderboard/getUsers', { headers: { 'Authorization': token } })

                    console.log('response from api : ', users)
                    //To remove overlapping if clicked twice
                    while (Leaderboard.children.length) {
                        i = 0; Leaderboard.removeChild(Leaderboard.children[i]); i++
                    }

                    //calling function to show leaderboard with the details fetched from backend
                    for (let i = 0; i < users.data.result.length; i++) {
                        showLeaderboard(users.data.result[i])  //scroll up to see the function
                    }

                } catch (error) {
                    console.log('Leaderboard button show error : ', error);
                }


            }
        }

        //To load previous expenses if any
        await axios.get('http://localhost:2203/expense/getExpense', { headers: { 'Authentication': token } })
            .then((response) => {
                if (response.data.response.length < 1) {
                    console.log('No data to display')
                }

                else {
                    for (var i = 0; i < response.data.response.length; i++) {
                        createList(response.data.response[i])
                    }
                }
            })

    } catch (error) {
        console.log(error)
    }
})

