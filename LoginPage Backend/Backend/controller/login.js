

const Login = require('../model/login')

exports.userlogin = async (req, res, next) => {
    try {
        
        const getName = await Login.findAll({ where: { username: req.body.name } })
        const getpassword = await Login.findAll({ where: { password: req.body.pw } })

        if (getName.length > 0) {

            if (getName[0].username == req.body.name) {
                if (getpassword.length > 0) {
                    if (getName[0].id == getpassword[0].id) {
                        // console.log('User login successful')
                        res.status(201).json({ message: 'User login successful' })
                    }
                }
                else {
                    // console.log('password didnt match');
                    res.status(201).json({message:'Not authorized to Login'})
                }

            }
        }
        else {
            console.log('404 record not found')
            res.status(201).json({ message: '404 record not found' })
        }

    }
    catch (error) {
        res.status(403).json({ error: 'Failed with error status 403 !' })
        console.log(error)
    }
}