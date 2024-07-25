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
        // console.log(userObj)
        // console.log("Login button triggered")        

        //To authenticate if this the correct user, if yes then only entry is valid
        await axios.post('http://localhost:2203/login/userlogin', userObj).then((response) => {
            console.log(response)
            window.location.href="./expense.html"

        })
        
    } catch (error) {
        console.log(error.message)
        feed.textContent = error.message.toUpperCase()
    }


}