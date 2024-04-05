const path = require('path')
const rootDir = require('../util/path')

exports.getAddProducts = (req,res,next) =>{
    console.log('The add-product page loaded')
    // res.send('<form action = "/admin/add-product" method ="POST"><input type="text" name ="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.sendFile(path.join(rootDir,'views','add-product.html'))
}

exports.postAddProducts = (req,res,next) => {
    
    console.log(req.body)

    res.redirect('/shop')

}

exports.getShopProducts = (req,res,next) => {
    console.log('this is home directory')
    // res.send('<h1>Welcome Home Page !</h1>')
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.sendFile(path.join(rootDir,'views','shop.html'))
}