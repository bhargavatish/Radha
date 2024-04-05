const path = require('path')
const express = require('express')
const router = express.Router();
const rootDir = require('../util/path')
const bodyParser = require('body-parser')
const controllersRoute = require('../controllers/products')
router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-product', controllersRoute.getAddProducts)

router.post('/add-product', controllersRoute.postAddProducts)

module.exports = router;