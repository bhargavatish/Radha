const path = require('path')
const express = require('express')
const router = express.Router()
const rootDir = require('../util/path')

router.get('/',(req,res,next) => {
    console.log('this is home directory')
    // res.send('<h1>Welcome Home Page !</h1>')
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.sendFile(path.join(rootDir,'views','shop.html'))
})
module.exports = router;