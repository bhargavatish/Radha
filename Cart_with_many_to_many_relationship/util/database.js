const Sequalize = require('sequelize');

const sequelize = new Sequalize('nodeComplete','root','4411$Bhargav',{
    dialect:'mysql',
    host:'localhost'
})
module.exports = sequelize;