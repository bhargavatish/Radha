const Sequelize = require('sequelize');

const sequelize = new Sequelize('newUser','root','4411$Bhargav',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;