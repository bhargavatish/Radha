
//Grabbing the main form through it's id
const Add = document.getElementById('main-form')

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
//Function to display new expense on the user screen
function createList(expense) {
    
    // Creating the new expense to be added
    var ul = document.querySelector('#main-list');

    var li = document.createElement('li');
    li.className = 'list-group-item';
    console.log('Expense', expense)

    var liText = document.createTextNode(`Amount : ${expense.amount}, Category : ${expense.category}, Description : ${expense.description}`);
    console.log(liText);

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
                const response = axios.delete(`http://localhost:2203/expense/delete-expense/${id}`,{ headers: { "Authorization": token } })
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
                const response = axios.delete(`http://localhost:2203/expense/delete-expense/${id}`,{ headers: { "Authorization": token } })
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

//To display the entries form the table against the userId on loading the page
document.addEventListener('DOMContentLoaded', async () => {

    try {
        const token = localStorage.getItem('token')
        await axios.get('http://localhost:2203/expense/getExpense', { headers: { 'Authentication': token } }).then((response) => {

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
