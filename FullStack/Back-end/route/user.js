

const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');

router.get('/userData',userController.getSavedData);
router.post('/postData',userController.saveData);
router.delete('/delete-data/:id',userController.deleteSavedData);

module.exports = router;