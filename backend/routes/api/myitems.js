const express = require("express");
const router = express.Router();
const db = require("../../sqlconnect");

// @route GET api/myitems
// @desc Get items
// @access public
router.get("/", (req, res) => {
  db.query("SELECT * FROM items", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
