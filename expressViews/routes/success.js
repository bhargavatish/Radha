const express = require('express')
const router = express.Router()

router.get('/',(req,res,next) => {
    res.send('<body><h1> Form successfully filled !!! </h1></body>')
})
module.exports = router;