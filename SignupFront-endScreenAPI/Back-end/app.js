
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const cors = require('cors')

const sequelize = require('./util/database');
const signupModel = require('./model/signup')
const signupController = require('./controller/signup')
const signupRoute = require('./route/signup');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());

app.use('/user',signupRoute);


sequelize
// .sync({force:true})
.sync()

.then(() => {
    app.listen(2027,() => {
        console.log('Hello, World ! I am listening');
    })
})
.catch(er => console.log('sequelize is not running',er));


