const mongoose = require("mongoose");

const MongoDBURL = "mongodb://localhost:27017/ZenKanban";

async function connectwithDB() {
  try {
    await mongoose.connect(MongoDBURL, { keepAlive: true });

    console.log("Connection Established");
  } catch (err) {
    console.log("Err", err);
  }
}

module.exports = connectwithDB;
