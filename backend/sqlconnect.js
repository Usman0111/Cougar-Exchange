var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
})
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!")
})

connection.query("CREATE DATABASE people", (err) => {
    if (err) throw err;
    console.log("DB created")
})