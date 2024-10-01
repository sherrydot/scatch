const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(function () {
    dbgr("Connected to MongoDB successfully.");
  })
  .catch(function (err) {
    dbgr("Error connecting to MongoDB:", err);
  });

module.exports = mongoose.connection;

// const mongoose = require("mongoose");
// const dbgr = require("debug")("development:mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/scatch")
//   .then(function () {
//     dbgr("connected");
//   })
//   .catch(function (err) {
//     dbgr(err);
//   });

// module.exports = mongoose.connection;
