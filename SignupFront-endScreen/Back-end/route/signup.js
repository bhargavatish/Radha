const express = require('express')

const router = express.Router()

const signupController = require('../controller/signup')

router.post('/signup',signupController.sendData)

module.exports = router;