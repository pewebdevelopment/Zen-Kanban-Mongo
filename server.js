const express = require("express");
const { default: mongoose } = require("mongoose");

// const mongo = require("mongodb");

const app = express();

const MongoDBURL = "localhost:27017";

mongodb: await mongoose.connect(MongoDBURL);

app.listen(7000);
