const path = require('path')
const express = require('express')
const router = express.Router();
const rootDir = require('../util/path')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-product',(req,res,next) =>{
    console.log('The add-product page loaded')
    // res.send('<form action = "/admin/add-product" method ="POST"><input type="text" name ="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product',(req,res,next) => {
    
    console.log(req.body)

    res.redirect('/shop')

})

module.exports = router;