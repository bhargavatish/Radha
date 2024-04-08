const path = require('path')

const express = require('express');

const router = express.Router();

const controllerRoute = require('../controllers/products')

// /admin/add-product => GET
router.get('/add-product', controllerRoute.getAddItem);

// /admin/add-product => POST
router.post('/add-product',controllerRoute.postAddItem);

module.exports = router;

