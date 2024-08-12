
const reset = document.getElementById('forgot-pw');
console.log('reset form grabbed', reset);

const resetBtn = document.getElementById('resetBtn')
console.log('reset button grabbed', resetBtn);

reset.addEventListener('submit', resetPassword)

async function resetPassword (e) {
    e.preventDefault()
    console.log('In the reset password callback function');

    const mailObj = { email: reset.email.value }
    
    const token = localStorage.getItem('token')
    
    const response = await axios.post('http://localhost:2203/called/password/forgotpassword',mailObj,{'Authorization':token})

}