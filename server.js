const routes = require("./routes/index.js");

const express = require("express");

const connectMongo = require("./utils/connection");

const app = express();

app.use(express.json());

// converts the body(which may have various differnt formats and maybe URL encoded) into a proper json object from different formats

app.use(express.urlencoded());

// Having the 2 above is a good habit

//////////////////// app.get() below is for educational purposes only /////////////
app.get("/zen", (req, res, next) => {
  // imp information from the req object is as follows
  console.log("req.url: ", req.url);
  console.log("req.method: ", req.method);
  console.log("req.headers ", req.headers);

  // inside send we can send a message, JSON object, any primitive objects, etc

  next();
});

app.get("/zen", (req, res, next) => {
  console.log("This is my 2nd REQ");

  res.status(200).send("Success!"); // refer HTTP status codes
  // responses are usually sent in the last middleware, logically also thats sound

  // All Callback functions can be sent, a subset of them are middlewares, a subset of those are controlles. Controlls are those middlewares that send a response
});

connectMongo();
app.use("/api", routes); // 1st param is the path eg: "/api", 2nd can be a callback function, middleware, or a router

app.listen(7000);

// by default, express doesnt run multiple middlewares. In order to run a series of middlewarrs, we have to call next on the subsequent middleware

// when the path mathes, express runs the middleware

// req and res are given by express in a function called as "next"
