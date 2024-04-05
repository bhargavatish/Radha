const express = require('express')
const router = express.Router()
const controllersRoute = require('../controllers/contactus')
router.get('/',controllersRoute.success )
module.exports = router;