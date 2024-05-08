
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const cors = require('cors')

const route = require('./route/attendance');
const sequelize = require('./util/database');
const Attendance = require('./model/attendance');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
app.use('/index',route);

sequelize.sync().then(res => console.log('Started'))
.catch(er => console.log('sequelize is not running',er));

app.listen(2024,() => {
    console.log('Hello, World ! I am listening');
})