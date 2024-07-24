const form = document.querySelector('#login');
const feed = document.querySelector('#feed');
// console.log(form);
form.addEventListener('submit', userlogin);
document.addEventListener('DOMContentLoaded', () => {
    feed.textContent = 'Welcome BACK ! ! !'
    // console.log(feed)
})

async function userlogin(e) {
    try {
        e.preventDefault();
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;
        const userObj = {
            name: username,
            pw: password
        }
        console.log(userObj)
        console.log("Login button triggered")
        const response = await axios.post('http://localhost:2203/login/userlogin', userObj)
        console.log("Response sent")
        console.log(response.data.message)
        console.log('UESHI HSI',response)
        feed.textContent = response.data.message
        document.querySelector('#username').value=""
        document.querySelector('#password').value=""
    } catch (error) {
        console.log(error.message)
        feed.textContent = error.message.toUpperCase()
    }


}