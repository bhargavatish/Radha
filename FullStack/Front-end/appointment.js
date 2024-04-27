
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
    console.log(userDetails);
    try{
        const response = await axios.post('https://localhost:9090/user/postData',userDetails);
        const data = response.data;
        createList(data);
    }
    catch(err){
        console.log(err);
    }
    
}

function createList(userData){
    var li = document.createElement('li');
    var liText = document.createTextNode(`Name:${userData.name},Email:${userData.email},Phone:${userData.phone}`);

    var delbtn = document.createElement('button');
    delbtn.appendChild(document.createTextNode('Delete'));

    var editbtn = document.createTextNode('button');
    editbtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(liText);     li.appendChild(editbtn);    li.appendChild(delbtn);
    ul.appendChild(li);
    nameById.value = '';
    emailById.value = '';
    phoneById.value = '';

    editbtn.onclick = async(e) => {
        var target = e.target.parentElement;
        try {
            nameById.value = userData.name;
            emailById.value = userData.email;
            phoneById.value = userData.phone;
            const id = userData.id;
            const response = await axios.delete(`https://localhost:9090/user/delete-data/${id}`);
            ul.removeChild(target)
        } catch (err) {
            console.log(err);
        }
    }

    delbtn.onclick = async (e) => {
        var target = e.target.parentElement;
        try{
            const id = userData.id;
            const response = await axios.delete(`https://localhost:9090/user/delete-data/${id}`);
            ul.removeChild(target);

        }catch(err){
            console.log(err);
        }

    }
    
}

document.addEventListener('DOMContentLoaded', async () =>{
    try {

        const getData = await axios.get(`https://localhost:9090/user/userData`);
        const data = getData.data;
        if(data.length<1){
            console.log('No data to display');
        }
        else{
            for(let i=0 ; i<data.length; i++){
                createList(data[i]);
            }
        }
    } catch (err) {
        console.log(err);
    }
})



