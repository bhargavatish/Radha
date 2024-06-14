const form = document.querySelector('#signup');
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const para = document.querySelector('#message')

form.addEventListener('submit', sendData)

async function sendData(e) {
    try {
        e.preventDefault()
        para.textContent = ''
        const dataObj = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        console.log(dataObj)

        const response = await axios.post('http://localhost:2027/user/signup', dataObj)

        console.log('response is', response)

    } catch (error) {
        para.textContent = error.message + ' : The USER ALREADY EXISTS !!!'
    }
}