const express = require('express')

const router = express.Router();

const attController = require('../controller/attendance')

router.get('/', attController.getAttendance)

module.exports = router;