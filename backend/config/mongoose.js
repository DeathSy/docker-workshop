const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb://localhost:27017/test";

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongodb is connected")
});

module.exports = mongoose
