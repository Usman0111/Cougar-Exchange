const express = require("express");
const router = express.Router();
const sql = require("../../server.js");
const reconn = require("../../server.js");

// @route GET api/myitems
// @desc Get items
// @access public
router.get("/", (req, res) => {
  sql.db.query("SELECT * FROM items", (err, result) => {
    if (err) {console.log(err.code);};
	console.log(req.route.methods);
    res.json(result);
  });
});

module.exports = router;
