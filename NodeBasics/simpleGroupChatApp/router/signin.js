const express = require('express')
const fs = require('fs')
const user = express.Router();

const body = [];
const bodyParser = require('body-parser')
user.use(bodyParser.urlencoded({ extended: false }));


user.get("/", (req, res, next) => {
    fs.readFile('chatFile.txt', (err, data) => {
        if (err) {
            console.log(err); data = 'No data found !'
        }
        res.send(`${data}<body><h1>Form Details</h1><br><form onsubmit=document.getElementById("username").value=localStorage.getItem("username") action ="/" method = "POST">
        <label for="username">Enter Description</label><br>
        <input type="text" name="message" id="message"><br>
        <input type="hidden" name="username" id="username"><br>
        <button type="submit">Send Message</button></form></body>`)

    })
})
user.post("/", (req, res, next) => {
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile('chatFile.txt', `${req.body.username}:${req.body.message}:`, { flag: "a" }, (err) => {
        err ? console.log(err) : res.send('<body> <h1> Message sent ! </h1></body>')
    })
})

module.exports = user;