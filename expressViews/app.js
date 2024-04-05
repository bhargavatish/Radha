const http = require('http')
const path= require('path')
const express  = require('express')

const app = express()
const rootDir = require('./util/path')
const adminRouter= require('./routes/admin')
const shopRouter= require('./routes/shop')
const contactRouter = require('./routes/contactus')
const successRouter = require('./routes/success');
app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'publics'))); // we can use many and many static files
app.use('/admin',adminRouter)
app.use('/shop',shopRouter)
app.use('/contactus',contactRouter)
app.use('/success',successRouter)
app.use((req,res,next) => {
    // res.status(404).send('<h1> Page not found </h1>');
    // res.status(404).sendFile(path.join(__dirname,'views','notFound.html'))
    res.status(404).sendFile(path.join(rootDir,'views','notFound.html'))
})



app.listen(1000)