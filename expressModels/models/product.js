const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
)
const getProductsFromFile = (cb) => {
    
    fs.readFile(p, (err, data) => {
        if (err) {
            return cb([])
        }
        else {
            cb(JSON.parse(data))
        }
    })
}
const products = []
module.exports = class Product {
    constructor(t) {
        this.title = t
    }
    save() {
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
};