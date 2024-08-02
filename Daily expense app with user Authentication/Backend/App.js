

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors());

const Authenticate = require('./Middleware/Auth')

const loginController = require('./Controller/User')
const loginRoute = require('./Routes/User');
const Sequelize = require('./Util/Database')

const User = require('./Model/User')
const signupController = require('./Controller/NewUser')
const signupRoute = require('./Routes/NewUser');

const Expense = require('./Model/Expense');
const expenseRoute = require('./Routes/Expense')
const expenseController = require('./Controller/Expense')

app.use('/user', signupRoute);
app.use('/login', loginRoute);
app.use('/expense',expenseRoute);

User.hasMany(Expense);
Expense.belongsTo(User);

Sequelize
    // .sync({force:true})
    .sync()
    .then(() => {
        app.listen(2203, () => {
            console.log('Hello, World ! I am listening');
        })
    })
    .catch(er => console.log('sequelize is not running', er));
