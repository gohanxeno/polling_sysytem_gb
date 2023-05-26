const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/polling", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error:"));
db.once("open", function () {
  console.log("Database Connected Safely");
});

module.exports = db;
