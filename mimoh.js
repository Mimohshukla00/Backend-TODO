const express = require("express");
const app = express();

function middleware(req, res, next) {
  if (!username === "mimohshukla" || !password === "pass") {
    req.status(400).json({ message: "Invalid Credentials" });
  } else {
    next(); // pass control to the next middleware function
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidneyID != 1 && kidneyID != 2) {
    req.status(400).json({ message: "Kidney ID is invalid." });
  } else {
    next();
  }
}
// define a simple route handler for the home page
app.get("/healthcheckup", middleware,kidneyMiddleware,function(req, res) {
    // do something abput your kidney  
    res.send("your health is healthy");
} );


const name = "mimohshukla"
console.log(name)