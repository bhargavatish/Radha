const http = require('http')

const express = require('express')

const app = express();

app.use((req,res,next) =>{
    console.log('In a middleware');
    next();
})
app.use((req,res,next) =>{
    console.log('In another middleware')

    // res.send('<h1>Hello Atish, from Express.js</h1>')
    
    res.send({"key1": "value"});
})

// app.listen(5000);
