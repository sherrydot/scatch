const express = require("express");
const router = express.Router();

app.set("view engine", "ejs");

router.get("/", function (req, res) {
  res.render("index");
});

module.exports = router;
