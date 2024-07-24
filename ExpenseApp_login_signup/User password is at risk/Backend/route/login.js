const express = require('express');

const router = express.Router();

const loginController = require('../controller/login')

router.post('/userlogin',loginController.userlogin)

module.exports = router;