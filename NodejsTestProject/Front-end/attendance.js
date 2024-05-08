const search = document.getElementById('search');
const fetch = document.getElementById('fetch-btn');
const list = document.getElementById('list');
const mark = document.getElementById('mark');

search.addEventListener('submit',studentNames);

async function studentNames(e){
    e.preventDefault();
    
    const name = await axios.get('http://localhost:2024/index/getAttendance');
    console.log(name)
    showNames(name)       
}

function showNames(name){
    const li = document.createElement('li');
    // <input type="radio" name="present" value="present">Present
    // <input type="radio" name="present" value="present">Absent
    
    
    
}
