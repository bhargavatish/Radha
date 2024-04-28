
const path = require('path')

const express = require('express');

const bodyParser = require('body-parser');

var cors = require('cors');

const app = express();

const route = require('./route/user')

const sequelize = require('./util/database');

const User = require('./model/user')

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use(cors());
app.use('/user',route);

sequelize.sync().then(res => console.log('Started')).catch(er => console.log(er))

app.listen(7070,() => {
    console.log('Listening...')
});




