const Sequelize = require('sequelize');

const sequelize = new Sequelize('attendance','root','4411$Bhargav',{
    host : 'localhost',
    dialect : 'mysql'
})

module.exports = sequelize;