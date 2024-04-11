// add this in package.json
// "start": "node index.js",
// "dev":"nodemon index.js"

const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// middleware to prepare the data to be used in the app
app.use(express.json());
// import routes for todo api

const todoRoutes = require("./routes/todoRoutes");
