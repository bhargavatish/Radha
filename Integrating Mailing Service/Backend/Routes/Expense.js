const express = require('express');
const router = express.Router();
const expenseController = require('../Controller/Expense');
const userAuthentication = require('../Middleware/Auth')


router.get('/getExpense',userAuthentication.authenticate,expenseController.getExpense);

router.post('/postExpense',userAuthentication.authorize,expenseController.saveExpense);

router.delete('/delete-expense/:id',userAuthentication.authorize,expenseController.deleteExpense);


module.exports = router;