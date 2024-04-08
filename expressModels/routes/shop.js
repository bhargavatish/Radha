const path = require('path');

const express = require('express');

const controllerRoute = require('../controllers/products')

const router = express.Router();

router.get('/', controllerRoute.getMyItem);

module.exports = router;
