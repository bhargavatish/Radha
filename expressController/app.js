const http = require('http')
const path= require('path')
const express  = require('express')

const app = express()
const rootDir = require('./util/path')
const adminRouter= require('./routes/admin')
const shopRouter= require('./routes/shop')
const contactRouter = require('./routes/contactus')
const successRouter = require('./routes/success');
app.use(express.static(path.join(rootDir,'public')));
// app.use(express.static(path.join(__dirname,'publics'))); // we can use many and many static files
app.use('/admin',adminRouter)
app.use('/shop',shopRouter)
app.use('/contactus',contactRouter)
app.use('/success',successRouter)
const controllersRoute = require('./controllers/error')
app.use('/',controllersRoute.error404)



app.listen(1000)