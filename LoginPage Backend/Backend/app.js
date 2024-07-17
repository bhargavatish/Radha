
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const cors = require('cors')

const sequelize = require('./util/database');
const loginModel = require('./model/login')
const loginController = require('./controller/login')
const loginRoute = require('./route/login');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());

app.use('/login',loginRoute);


sequelize
// .sync({force:true})
.sync()

.then(() => {
    app.listen(2203,() => {
        console.log('Hello, World ! I am listening');
    })
})
.catch(er => console.log('sequelize is not running',er));
