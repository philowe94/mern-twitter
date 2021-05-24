//imports
const mongoose = require("mongoose");
const express = require("express");
//instantiate app
const app = express();
//import key for db
const db = require('./config/keys').mongoURI;

//connect to mongoDB using mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

//route
app.get("/", (req, res) => res.send("Hello Guyws"));

//assign port for server
const port = process.env.PORT || 5000;

//run the app on the port
app.listen(port, () => console.log(`Server is running on port ${port}`));