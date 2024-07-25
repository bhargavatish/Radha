

const Add = document.getElementById('main-form')

Add.addEventListener("submit", addExpense);

console.log('Hi there')

async function addExpense(e) {
    e.preventDefault();
    console.log('addExpense entered.')
    
    const myExpense = {
        amount: document.querySelector('#exp').value,
        category:document.querySelector('#caty').value,
        description: document.querySelector('#desc').value
    };
    console.log('MyExpense',myExpense)
    try {
        // Display on screen
        console.log('post response entered')
        const response = await axios.post('http://localhost:2203/expense/postExpense', myExpense);
        console.log("Post response",response.data.newExpense)
        createList(response.data.newExpense);
        
    } catch (error) {
        console.log(error)
    }


}
function createList(expense) {
    var ul = document.querySelector('#main-list');

    var li = document.createElement('li');
    li.className = 'list-group-item';
    console.log('Expense',expense)

    var liText = document.createTextNode(`Amount : ${expense.amount}, Category : ${expense.category}, Description : ${expense.description}`);
    console.log(liText);

    li.appendChild(liText);
    ul.appendChild(li);

    

    document.querySelector('#exp').value = '';
    document.querySelector('#caty').value = '';
    document.querySelector('#desc').value = '';

    //create delete
    var delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('Delete Expense'));
    delBtn.classList = 'btn btn-sm btn-warning float-right text-white delete mr-2';


    //create edit
    var edit = document.createElement('button');
    edit.appendChild(document.createTextNode('Edit Expense'));
    edit.classList = 'btn btn-dark text-white float-right btn-sm Edit mr-2';

    li.appendChild(delBtn);
    li.appendChild(edit);

    //Delete function
    delBtn.onclick = async function (e) {
        e.preventDefault();
        var del = e.target.parentElement;
        var id = expense.id;
        try {
            if(id){
                const response = axios.delete(`http://localhost:2203/expense/delete-expense/${id}`)
                // console.log('delete response',response);
            }
        } catch (error){
            console.log(error)
        }
        ul.removeChild(del);
        
    }
    
    //Edit function
    edit.onclick = function (e) {
        e.preventDefault();
        var onEdit = e.target.parentElement;
        var id = expense.id;
        try {
            if(id){
                const response = axios.delete(`http://localhost:2203/expense/delete-expense/${id}`)
                console.log(response);
            }
        } catch (error){
            console.log(error)
        }
        ul.removeChild(onEdit);

        //restore fields
        document.querySelector('#exp').value = expense.amount;
        document.querySelector('#caty').value = expense.category;
        document.querySelector('#desc').value = expense.description;
    }
}

document.addEventListener('DOMContentLoaded',async () => {

    try{
        const response = await axios.get('http://localhost:2203/expense/getExpense');
        if(response.data.response.length<1){
            console.log('No data to display')
        }
        else{
            for(var i=0; i<response.data.response.length ; i++){
                createList(response.data.response[i])
            }
        }
    }catch(error){
        console.log(error)
    }
})
