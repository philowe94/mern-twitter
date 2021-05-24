//imports
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
//import routes
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
//instantiate app
const app = express();
//import key for db
const db = require("./config/keys").mongoURI;

//connect to mongoDB using mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

//middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
require("./config/passport")(passport);

//routes
app.get("/", (req, res) => res.send("Hello Everybody"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);
//assign port for server
const port = process.env.PORT || 5000;

//run the app on the port
app.listen(port, () => console.log(`Server is running on port ${port}`));
