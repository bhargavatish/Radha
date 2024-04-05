const path = require('path')
const rootDir = require('../util/path')
exports.getContactForm = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','contactUs.html'))
}
exports.postContactDetails = (req,res,next) => {
    res.redirect('/success')

}
exports.success = (req,res,next) => {
    res.send('<body><h1> Form successfully filled !!! </h1></body>')
}