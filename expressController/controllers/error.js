const path = require('path')
const rootDir = require('../util/path')
exports.error404 = (req,res,next) => {
    // res.status(404).send('<h1> Page not found </h1>');
    // res.status(404).sendFile(path.join(__dirname,'views','notFound.html'))
    res.status(404).sendFile(path.join(rootDir,'views','notFound.html'))
}