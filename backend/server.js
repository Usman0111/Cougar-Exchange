const express = require("express");
const db = require("./sqlconnect");

const myitems = require("./routes/api/myitems");

//Intializing express
const app = express();

//Passing middleware to accept data in json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connecting Database
db.connect(err => {
  if (err) throw err;
  console.log("Database Connected");
});

//Use Routes(put all routes here)
app.use("/api/myitems", myitems);

//Starting Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
