const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expense');

router.get('/getExpense',expenseController.getExpense);
router.post('/postExpense',expenseController.saveExpense);
router.delete('/delete-expense/:id',expenseController.deleteExpense);

module.exports = router;