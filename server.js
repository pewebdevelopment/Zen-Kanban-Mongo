const routes = require("./routes/index.js");

const express = require("express");

const connectMongo = require("./utils/connection");

const app = express();

app.get("/zen", (req, res, next) => {
  // imp information from the req object is as follows
  console.log("req.url: ", req.url);
  console.log("req.method: ", req.method);
  console.log("req.headers ", req.headers);

  res.send("");
});

connectMongo();
app.use("/api");
app.listen(7000);

// when the path mathes, express runs the middleware

// req and res are given by express in a function called as "next"
