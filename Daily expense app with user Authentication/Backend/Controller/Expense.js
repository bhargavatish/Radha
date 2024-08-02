const Expense = require('../Model/Expense');
const jwt = require('jsonwebtoken');

// To get the expense(s) of the user autenticated
exports.getExpense= async (req,res,next) => {
    try {

        //using magic function
        req.user.getExpenses().then(response => {
            res.status(201).json({response})
        })

        // Alternative way using normal syntax

        // const response = await Expense.findAll({where:{userId:req.user.id}});
        // res.status(201).json({response})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Error fetching data !',err:error})
        
    }
}

// To add new expense 
exports.saveExpense = async (req,res,next) => {
    try {
        
        //using magic function
        req.user.createExpense({
            amount:req.body.amount,
            category:req.body.category,
            description:req.body.description,  
        }).then(response => {
            res.status(201).json({newExpense:response,success:true})
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
        
        res.status(500).json({message:"Problem saving Expense detail !"})
    }    
}

//To delete expense against given id
exports.deleteExpense = async (req,res,next) => {
    try {

        // const id = req.params.id;
        // req.user.deleteExpense().then(() => {
        //     res.status(201).json({message:'Deleted'})
        // })
        const id = req.params.id;
        await Expense.destroy({where:{id:id,userId:req.user.id}})
        res.status(201).json({message:'Deleted'})
        
    } catch (error) {
        
        res.status(500).json({message:"Problem deleting Expense detail !"})
    }
}