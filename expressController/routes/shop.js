const path = require('path')
const express = require('express')
const router = express.Router()
// const rootDir = require('../util/path')
const controllersRoute = require('../controllers/products')

router.get('/',controllersRoute.getShopProducts)
module.exports = router;