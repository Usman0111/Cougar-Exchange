const express = require("express");
const mysql = require("mysql");
const sql = require("./sqlconnect");
const myitems = require("./routes/api/myitems");

//Intializing express
const app = express();

//Passing middleware to accept data in json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sql.db.on('error', (err) => {console.log('db disconnected...', err);});

//Use Routes(put all routes here)
app.use("/api/myitems", myitems);

//Starting Server
const PORT = process.env.PORT || 5000;
exports.db = sql.db;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
