const express = require('express');

const router = express.Router()

const userController = require('../controllers/user');

router.get('/get-user', userController.getUserForm);

router.post('/post-user',userController.postUserDetails);

module.exports = router;