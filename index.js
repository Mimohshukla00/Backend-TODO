// add this in package.json
// "start": "node index.js",
// "dev":"nodemon index.js"

const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 5000;
