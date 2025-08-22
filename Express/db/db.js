const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "luvhirani",
    database: "MERN115"
})

module.exports = pool.promise()