const form = document.querySelector('#login');
const feed = document.querySelector('#feed');
// console.log(form);
form.addEventListener('submit', userlogin);
document.addEventListener('DOMContentLoaded', () => {
    feed.textContent = 'Welcome BACK ! ! !'
    // console.log(feed)
})

async function userlogin(e) {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const userObj = {
        name: username,
        pw: password
    }
    try {
        const response = await axios.post('http://localhost:2203/login/userlogin', userObj)
        console.log(response.data.message)
        feed.textContent= response.data.message
    } catch (error) {
        console.log(error)
    }
    

}