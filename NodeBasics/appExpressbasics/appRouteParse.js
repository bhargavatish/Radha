const http = require('http')
const express  = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req,res,next) =>{
    console.log('The add-product page loaded')
    res.send('<form action = "/product" method ="POST"><input type="text" name ="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
})

app.use('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')

})

app.use('/',(req,res,next) => {
    console.log('this is home directory')
    res.send('<h1>Welcome Home Page !</h1>')
})

// app.listen(5500)