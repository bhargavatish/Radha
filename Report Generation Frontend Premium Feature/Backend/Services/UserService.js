const FileUrls = require('../Model/FileUrls')
const getExpenses = (req) => {
    return req.user.getExpenses()
}

const saveUrlTable = (req,url) => {
    
    return FileUrls.create({
        DownloadDate: new Date(),
        Urls:url,
        userId:req.user.id
    })
}

const getUrlTable = (req) => {
    var id=req.user.id
    return FileUrls.findAll({where:{userId:id}})
}

module.exports = {
    getExpenses,saveUrlTable,getUrlTable
}