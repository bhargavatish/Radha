

const Login = require('../model/signup')
const bcrypt = require('bcrypt');

exports.userlogin = async (req, res, next) => {
    try {
        const getName = await Login.findAll({ where: { email: req.body.name } })

        if (getName.length > 0) {

            bcrypt.compare(req.body.pw, getName[0].password, (err, result) => {
                // console.log(req.body.pw)
                // console.log(getName[0].password)
                // console.log(result)
                if (err) { console.log(err); res.status(500).json({ message: 'Internal server error' }) }
                else if (result == true) { res.status(200).json({ message: 'USER LOGIN SUCCESSFUL !' }) }
                else {
                    res.status(400).json({ message: 'Unauthorized ACCESS' })
                }
            })
        }
        else {
            // console.log('404 record NOT FOUND')
            res.status(404).json({ message: '404 record NOT FOUND' })
        }

    }
    catch (error) {
        res.status(403).json({ message: 'Failed with error status 403 !' })
        // console.log(error)
    }
}