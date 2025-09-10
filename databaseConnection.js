const mongoose = require("mongoose");

function Dbconnection() {
  const DB_URL = process.env.MONGO_URI;
  console.log("🔗 Connecting to:", DB_URL);
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Connection Error"));
  db.once("open", function () {
    console.log("DB connected");
  });
}
module.exports = Dbconnection;
