const db = require('../util/database');
const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title,price, description,imageUrl) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    return db.execute('INSERT INTO product (title,price,description,imageURL) VALUES (?,?,?,?)', [this.title,this.price,this.description,this.imageUrl]);
  }

  static deleteById(id) {
    return db.execute('DELETE FROM product where product.id= ?',[id])
  }

  static fetchAll() {
    return db.execute('SELECT * FROM product')
  }

  static findById(id ) {
    return db.execute('SELECT * FROM product where product.id=?',[id])
  }
   
};
