
const nameById = document.getElementById('nameField');
const emailById = document.getElementById('email');
const phoneById = document.getElementById('num');
const ul = document.getElementById('item-list-group');
const formById = document.getElementById('form');


formById.addEventListener('submit',sendData);

async function sendData(e){
    e.preventDefault();
    const userDetails = {
        name : nameById.value,
        email : emailById.value,
        phone : phoneById.value
    };
    try{
        const response = await axios.post('http://localhost:7070/user/postData',userDetails);
        const  userInitials =  response.data.newDetail;
        createList(userInitials);
    }
    catch(err){
        console.log(err);
    }
    
}

function createList(userData){
       
    var li = document.createElement('li');
    var liText = document.createTextNode(`Name : ${userData.name} ,Email : ${userData.email}, Phone : ${userData.phone}`);
    li.appendChild(liText);

    var delbtn = document.createElement('button');
    delbtn.appendChild(document.createTextNode('Delete'));

    var editbtn = document.createElement('button');
    editbtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editbtn);    li.appendChild(delbtn);
    ul.appendChild(li);
    nameById.value = '';
    emailById.value = '';
    phoneById.value = '';

    editbtn.onclick = async(e) => {
        var target = e.target.parentElement;
        try {
            // console.log("Edit user",userData)
            nameById.value = userData.name;
            emailById.value = userData.email;
            phoneById.value = userData.phone;
            const id = userData.id;
            if(id){
                const response = await axios.delete(`http://localhost:7070/user/delete-data/${id}`);
            }
            ul.removeChild(target)
            console.log("Editing...");
        } catch (err) {
            console.log(err);
        }
    }

    delbtn.onclick = async (e) => {
        var target = e.target.parentElement;
        try{
            const id = userData.id;
            if(id){
                const response = await axios.delete(`http://localhost:7070/user/delete-data/${id}`);
            }
            ul.removeChild(target);
            console.log('Deleted !')

        }catch(err){
            console.log(err);
        }

    }
    
}

document.addEventListener('DOMContentLoaded', async () =>{
    try {
        console.log('DOM Content Loaded !')
        const getData = await axios.get(`http://localhost:7070/user/userData`);
        const data = getData.data;
        // console.log('Data',data)
        
        var newObj = {
            name:data.name,
            email:data.email,
            phone:data.phone
        }
        if(data.length<1){
            console.log('No data to display');
        }
        else{
            for(let i=0 ; i<data.length; i++){
                // console.log("Working...",data[i]);
                createList(data[i]);
            }
        }
    } catch (err) {
        console.log(err);
    }
})



