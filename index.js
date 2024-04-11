// add this in package.json
// "start": "node index.js",
// "dev":"nodemon index.js"



// npm install dotenv
// npm install express
// npm install mongoose
// npm install nodemon

const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// middleware to prepare the data to be used in the app
app.use(express.json());
// import routes for todo api

const todoRoutes = require("./routes/todos");
// mount the todo Api routes

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});


// connect to the database 

const dbconnect = require("./config/database")
dbconnect();

