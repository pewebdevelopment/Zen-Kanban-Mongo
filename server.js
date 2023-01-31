const express = require("express");

const connectMongo = require("./utils/connection");

const app = express();

const MongoDBURL = "mongodb://localhost:27017/ZenKanban";

connectMongo();

app.listen(7000);
