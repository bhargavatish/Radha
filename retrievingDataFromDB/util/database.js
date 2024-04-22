const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodeComplete',
    password:'4411$Bhargav'
})

module.exports  = pool.promise();