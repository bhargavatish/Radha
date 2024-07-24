const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Login = sequelize.define('login',{
    id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    username : {
        type: Sequelize.STRING,
        allowNull : false
    },   
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Login ;