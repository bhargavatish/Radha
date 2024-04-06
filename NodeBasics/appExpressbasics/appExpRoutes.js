const http = require('http')

const express = require('express')

const app = express()

app.use('/',(req,res,next) =>{
    console.log('This always runs')
    next()
})

app.use('/add-product',(req,res,next) => {
    console.log('This is add-product page')
    res.send('<h1>Welcome to "Add-Product" Page</h1>')
})

app.use('/',(req,res,next) => {
    console.log('Welcome Home Page !')
    res.send('<h1>Welcome Home Page !</h1>')
})

// app.listen(5500)