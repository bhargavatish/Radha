
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const route = require('./route/expenseRoute');
const sequelize = require('./util/database');
const Expense = require('./model/schema');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
app.use('/expense',route);

sequelize.sync().then(res => console.log('Started'))
.catch(er => console.log(er));

app.listen(2021,() => {
    console.log('Hello, World ! I am listening');
})