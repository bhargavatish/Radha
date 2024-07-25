//It authenticates that if a user exists or not. If it does not exist then only it register otherwise throws personalized error messages.


const User = require('../model/signup')

const bcrypt  = require('bcrypt');

exports.sendData = async (req, res, next) => {
    try {
        let record;
        const getResponse = await User.findAll({ where: { email: req.body.email } })
        for (let i = 0; i < getResponse.length; i++) {

            record = getResponse[i].isNewRecord;
        }
        console.log('record is ', record)

        if (record === false) {
            console.log('mail found')
            res.status(403).json({ error: 'Request failed with status code 403 !' })
        }

        else {
            console.log('mail not found, It is a new mail')
            let saltrounds = 10;
            bcrypt.hash(req.body.password, saltrounds,async (err,hash) => {
                const response = await User.create({
                    names: req.body.name,
                    email: req.body.email,
                    password: hash
                    // password: req.body.password
                })
                res.status(201).json({ userDetails: response ,message:'SUCCESSFULLY SIGNED UP !!!'})
            })
        }

    }
    catch (error) {
        console.log(error)
    }
}

