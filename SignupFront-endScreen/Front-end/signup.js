const form = document.querySelector('#signup');
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', sendData)

async function sendData(e) {
    try {
        e.preventDefault()
        const dataObj = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        console.log(dataObj)
        const response = await axios.post('http://localhost:2027/user/signup', dataObj)
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}