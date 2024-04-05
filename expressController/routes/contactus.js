const express = require('express')
const path = require('path')
const router = express.Router()
// const rootDir = require('../util/path')
const controllersRoute = require('../controllers/contactus')

router.get('/',controllersRoute.getContactForm)
router.post('/', controllersRoute.postContactDetails)
module.exports = router;