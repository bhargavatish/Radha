const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

const sequelize = require('./util/database')

app.set('view engine', 'ejs');
app.set('views', 'views');
var cors = require('cors')
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart_Item');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    }).catch(error => {console.log(error)})
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);

app.use(errorController.get404);

Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'}); //configuring association by passing second argument.
                               //CASCADE means if user is deleted, then any product related to it should also be deleted.
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product,{through:CartItem}); // telling sequelize that where these products should be stored , i.e. in cart-item model
Product.belongsToMany(Cart,{through:CartItem})

// sequelize.sync({force:true}) //overwrites the existing table.
sequelize.sync()
.then(result => {
    return User.findByPk(1)
})
.then(user => {
    if(!user){
        return User.create({NameField:'Atish',email:'bhargavatish@gmail.com',phone:'22071837'})
    }
    return user;
})
.then(user => {
    return user.createCart();
})
.then(res =>{ 
    console.log('user relationship working');
    app.listen(4010,()=> {console.log('Listening');});
})
.catch(err => console.log(err));
// app.listen(4010,() => {
//     console.log('Listening...')
// });

