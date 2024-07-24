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
                res.status(201).json({ userDetails: response })
            })
        }

    }
    catch (error) {
        console.log(error)
    }
}

// exports.checkUser = async ( req,res,next) => {
//     try {
//         // console.log('request is ', req)
//         const mail = req.body;
//         console.log('mail is ', mail)
//         // const response = await User.findAll(where={email:mail})
//         // console.log('resonse  is ',response)
//     } catch (error) {
//         console.log(error);
//     }
// }