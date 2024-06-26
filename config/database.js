const mongoose = require("mongoose");
require("dotenv").config();
// const db = process.env.DATABASE_URL;
const dbConnect = () => {
  // TO FEED the  database with some data, use this code:
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // it returns promise (then and catch)
    })
    .then(() => console.log("Db connection is successfull"))
    .catch((err) => console.log("error in DB connection"));
  // console.error(err);
  process.exit(1);
};
module.exports = dbConnect;
