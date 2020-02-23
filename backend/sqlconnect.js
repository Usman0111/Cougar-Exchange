const mysql = require("mysql");
var creds = {
   'host': "bcuvaa603ia6qja1utcx-mysql.services.clever-cloud.com",
   'user': "uhihayslnl9k5tfu",
   'password': "Oa1zgUk4whPeaCYld738",
   'database': "bcuvaa603ia6qja1utcx"
 //  host: "localhost",
 //  user: "root",
 //  password: "root",
 //  database: "exchange"
} 
var dbpool = mysql.createPool(creds);

exports.db = dbpool
exports.creds = creds
