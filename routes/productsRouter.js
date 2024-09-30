const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("PRODUCTS ROUTE WORKING");
});

module.exports = router;
