const User = require('../models/user');

exports.getUserForm = (req,res,next) => {
    // User.findAll()
    // .then(products => {
        
    // })
    // .catch(err => console.log(err));
    res.render('shop/user',{
        pageTitle:'Registration Page',
        path:'/get-user'
    });
};
exports.postUserDetails = async (req,res,next) => {
    try
    {
        if(!req.body.num){
            throw new Error('Phone number not entered !!!')
        }
    const name = req.body.NameField;
    const email = req.body.email;
    const phone = req.body.num;
    const user = new User(null,name,email,phone);
    const data = await User.create({
        name:name,
        email:email,
        phone:phone
    })
    res.status(201).json({newUserDetail:data});
    }catch(err){
        res.status(500).json({error:err})
    }
    
}