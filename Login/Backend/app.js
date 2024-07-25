

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors());


// const sequelizeLogin = require('./util/database');
const loginModel = require('./model/login')
const loginController = require('./controller/login')
const loginRoute = require('./route/login');

////Correct the path later.............
const sequelizeSignup = require('./util/signupDb');
const signupModel = require('./model/signup')
const signupController = require('./controller/signup')
const signupRoute = require('./route/signup');

const expenseRoute = require('./route/expense')
const expenseSequelize = require('./util/expense')


app.use('/login', loginRoute);
app.use('/user', signupRoute);
app.use('/expense',expenseRoute);


expenseSequelize
    .sync()
sequelizeSignup
    .sync()
    .then(() => {
        app.listen(2203, () => {
            console.log('Hello, World ! I am listening');
        })
    })
    .catch(er => console.log('sequelize is not running', er));
