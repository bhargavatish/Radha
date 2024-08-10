const Expense = require('../Model/Expense');
const jwt = require('jsonwebtoken');
const User = require('../Model/User')

// To get the expense(s) of the user autenticated
exports.getExpense = async (req, res, next) => {
    try {

        //using magic function
        req.user.getExpenses().then(response => {
            res.status(201).json({ response })
        })

        // Alternative way using normal syntax

        // const response = await Expense.findAll({where:{userId:req.user.id}});
        // res.status(201).json({response})

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error fetching data !', err: error })

    }
}

// To add new expense 
exports.saveExpense = async (req, res, next) => {
    try {

        //using magic function

        req.user.createExpense({
            amount: req.body.amount,
            category: req.body.category,
            description: req.body.description,
        }).then(async (response) => {

            let user = await User.findOne({ where: { id: req.user.id } })
            let total = user.total_expense;
            total = parseInt(total) + parseInt(req.body.amount);
            req.user.update({ total_expense: total })

            res.status(201).json({ newExpense: response, success: true })
        })

        // Alternative way using normal syntax

        // const response = await Expense.create({
        //     amount:req.body.amount,
        //     category:req.body.category,
        //     description:req.body.description,
        //     userId: req.user.id
        // });
        // res.status(201).json({newExpense:response,success:true})

    } catch (error) {

        res.status(500).json({ message: "Problem saving Expense detail !" })
    }
}

//To delete expense against given id
exports.deleteExpense = async (req, res, next) => {
    try {

        // const fid = req.params.id;
        // console.log('Id in delete is : ', fid)
        // req.user.destroyExpense({where : {id:fid}}).then(() => {
        //     res.status(201).json({message:'Deleted'})
        // })

        //when an expense is delete from expense table, it is important to update the total_expense in the user's table
        const id = req.params.id;
        const expense = await Expense.findOne({ where: { id: id, userId: req.user.id } })
        const amount = expense.amount
        await Expense.destroy({ where: { id: id, userId: req.user.id } }).then(async () => {
            total = req.user.total_expense
            total = parseInt(total) - parseInt(expense.amount)
            req.user.update({ total_expense: total })
        })
        res.status(201).json({ message: 'Deleted' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Problem deleting Expense detail !" })
    }
}