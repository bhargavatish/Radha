
const fs = require('fs')

const express = require('express')

const app =  express();

const userLogin = require('./router/login');

const userMessage = require('./router/signin')

app.use('/login',userLogin);

app.use(userMessage) //     '/' is optional

app.listen(2000);
