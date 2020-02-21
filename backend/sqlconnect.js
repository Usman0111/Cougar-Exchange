var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b279f71b1f16c6",
  password: "59cd7d19"
});
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});
