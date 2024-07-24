const Sequelize = require('sequelize')

// const sequelize = require('../util/signupDb')
const sequelize = require('../util/signupDb')

const User = sequelize.define('user',{
    id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    names : {
        type: Sequelize.STRING,
        allowNull : false
    },
    email: {
        type : Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User ;