const User = require('../model/signup')

exports.sendData = async (req, res, next) => {
    try {
        const response = await User.create({
            names: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        console.log('sendData response', response)
        res.status(201).json({ userDetails: response })
    }
    catch (error) {
        console.log(error)
    }
}