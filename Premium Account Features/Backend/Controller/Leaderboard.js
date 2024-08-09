const sequelize = require('sequelize')
const User = require('../Model/User')
const Expense = require('../Model/Expense')

exports.getUsers = async (req, res, next) => {
  
    var sampleObj = []
    const sumExpenses = {}

    const users = await User.findAll({
        attributes:['names','id']
    });

    const expenses = await Expense.findAll({            //gives array of expenses
        attributes : ['userId','amount']      
    })

    expenses.forEach(expense => {
        if (sumExpenses[expense.userId]) {
            sumExpenses[expense.userId] += expense.amount
        }
        else {
            sumExpenses[expense.userId] = expense.amount
        }
    })

    users.forEach(user => {
        sampleObj.push({ name: user.names, total_expense: sumExpenses[user.id] || 0 })
    })

    sampleObj.sort((a, b) => b.total_expense - a.total_expense)

    return res.status(202).json({ result: sampleObj, success: true })
}