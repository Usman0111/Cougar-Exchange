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


connection.query("CREATE DATABASE Exchange;", (err) =>{
	if (err) throw err;
	console.log("DATABASE CREATED")

})
connection.query("CREATE TABLE Exchange.Items (IDItem int, IDUser int, ItemName varchar(255), ItemDesc varchar(255));", (err) =>{
	if (err) throw err;
	console.log("TABLE CREATED")

})

connection.query("CREATE TABLE Exchange.Users (IDUser int, UserName varchar(255), Password varchar(255));", (err) =>{
	if (err) throw err;
	console.log("TABLE CREATED")

})


connection.query("CREATE TABLE Exchange.Offers (IDOffer int, Item1ID int, Item2ID int, Status varchar(255));", (err) =>{
	if (err) throw err;
	console.log("TABLE CREATED")

})
