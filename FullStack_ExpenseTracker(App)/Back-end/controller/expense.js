const Expense = require('../model/schema');

exports.getExpense= async (req,res,next) => {
    try {
        const response = await Expense.findAll();
        // const expenseData = response.Data;
        // console.log(expenseData);
        // res.status(201).json({expenseData})
        res.status(201).json({response})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Error fetching data !'})
    }
}

exports.saveExpense = async (req,res,next) => {
    try {
        console.log('Reached saveExpense controller')
        const response = await Expense.create({
            amount:req.body.amount,
            category:req.body.category,
            description:req.body.description
        });
        console.log('Processed saved response',response)
        res.status(201).json({newExpense:response})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Problem saving Expense detail !"})
    }    
}

exports.deleteExpense = async (req,res,next) => {
    try {
        const id = req.params.id;
        await Expense.destroy({where:{id:id}})
        res.status(201).json({message:'Deleted'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Problem deleting Expense detail !"})
    }
}