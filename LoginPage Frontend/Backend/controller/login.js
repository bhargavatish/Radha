
const Login = require('../model/login')

exports.userlogin = async (req, res, next) => {
    try {
        let un,pw,record;
        const getName = await Login.findAll({ where: { username: req.body.name } })
        const getpassword = await Login.findAll({ where: { password: req.body.pw } })
        // const recordFind = await Login.findAll({ where: {{ username:req.body.name} && {password: req.body.pw}  })
        for (let i = 0; i < getName.length; i++) {
            console.log('Get response username is ', getName[i].username)
            un = true
            console.log('name ALREADY exists')
            if(getName[i].password == req.body.pw){
                record = true;
            }
        }
        for (let i = 0; i < getpassword.length; i++) {
            console.log('Get response pw is ', getpassword[i].password)
            console.log('pass ALREADY exists')
            pw = false
            // record = getName[i].isNewRecord
        }
        // console.log('Get response password  is ',getpassword[i].password)

        if (un == true) {
            console.log(' username ALREADY exists')
            res.status(201).json({message:'username ALREADY exists. Please make a another username'})
        }
        else if (pw == false) {
            res.status(201).json({message:'Please create another password'})
            console.log('password ALREADY exists')
        }
        else if(record == true) {
            res.status(201).json({message:'The user ALREADY exists !!!'})
        }
        else {
            const response = await Login.create({
                username: req.body.name,
                password: req.body.pw
            })
            res.status(201).json({message:'Successfully created !!!'})
            // console.log('response is :', response)
        }

    }
    catch (error) {
        res.status(403).json({ error: 'Failed with error status 403 !' })
        console.log(error)
    }
}