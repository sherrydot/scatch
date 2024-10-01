const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

// saving "development" in memory
if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(500).send("Permission Denied to create New Owner");
    }

    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(createdOwner);
  });
}

router.get("/", function (req, res) {
  res.send("OWNER ROUTE WORKING");
});

module.exports = router;
