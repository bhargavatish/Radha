const Sequelize = require('sequelize')

const sequelize = require('../util/database');

const Attendance = sequelize.define('attendance',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    attendance:{
        type:Sequelize.BOOLEAN,
        allowNull:true
    }

})

module.exports = Attendance;