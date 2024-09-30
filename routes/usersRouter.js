const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("USERS ROUTE WORKING");
});

module.exports = router;
