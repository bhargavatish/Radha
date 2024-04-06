const express = require('express')

const login = express.Router();
    
login.get('/',(req,res,next) => {
    console.log('login get working')
    res.send(`<body><h1> User Login</h1><br><form onsubmit='localStorage.setItem("username", document.getElementById("username").value)' action="/login/" method="POST">
    <label for="username">Enter Username</label><br>
    <input type="text" name="title" id="username">
    <button type="submit">Login</button></form></body>`)

})
login.post('/',(req,res,next) => {

    console.log('login post working')
    
    res.redirect('/')
})

module.exports=login;