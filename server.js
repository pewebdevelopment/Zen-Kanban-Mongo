const routes = require("./routes/index.js");

const express = require("express");

const connectMongo = require("./utils/connection");

const app = express();

// const MongoDBURL = "mongodb://localhost:27017/ZenKanban";

connectMongo();
app.use("/api");
app.listen(7000);
