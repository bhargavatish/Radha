const Expense = require('../Model/Expense');
const jwt = require('jsonwebtoken');
const User = require('../Model/User')
const sequelize = require('../Util/Database')

// To get the expense(s) of the user autenticated
exports.getExpense = async (req, res, next) => {
    try {

        //using magic function
        const response = await req.user.getExpenses()
        res.status(201).json({ response })

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
    const t = await sequelize.transaction();
    try {

        //using magic function

        await req.user.createExpense({
            amount: req.body.amount,
            category: req.body.category, description: req.body.description,
        },
            { transaction: t })

        current_total = await req.user.total_expense;
        new_total = Number(current_total) + Number(req.body.amount);

        const response = await req.user.update({ total_expense: new_total }, { transaction: t })
        await t.commit()
        res.status(201).json({ newExpense: response, success: true })

        // Alternative way using normal syntax

        // const response = await Expense.create({
        //     amount:req.body.amount,
        //     category:req.body.category,
        //     description:req.body.description,
        //     userId: req.user.id
        // });
        // res.status(201).json({newExpense:response,success:true})

    } catch (error) {

        await t.rollback();
        console.log('Error in saveExpense rollback is : ', error)
        res.status(500).json({ message: "Problem saving Expense detail !" })
    }
}

//To delete expense against given id
exports.deleteExpense = async (req, res, next) => {
    const t = await sequelize.transaction()
    try {

        // const fid = req.params.id;
        // console.log('Id in delete is : ', fid)
        // req.user.destroyExpense({where : {id:fid}}).then(() => {
        //     res.status(201).json({message:'Deleted'})
        // })

        //when an expense is delete from expense table, it is important to update the total_expense in the user's table
        const id = req.params.id;
        const expense = await Expense.findOne({ where: { id: id, userId: req.user.id }, transaction: t })
        const amount = expense.amount
        await Expense.destroy({ where: { id: id, userId: req.user.id }, transaction: t })

        total = req.user.total_expense
        total = Number(total) - Number(expense.amount)
        await req.user.update({ total_expense: total }, { transaction: t })
        t.commit()

        res.status(201).json({ message: 'Deleted' })

    } catch (error) {
        t.rollback();
        console.log(error)
        res.status(500).json({ message: "Problem deleting Expense detail !" })
    }
}