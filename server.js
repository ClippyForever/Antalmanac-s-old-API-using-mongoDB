const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
const cors = require("cors");
app.use(cors());

var db;
mongoose.connect(
  //process.env.MONGODB_URL,
  { useNewUrlParser: true },
  function(err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");

    // Initialize the app.
  }
);

mongoose.Promise = Promise;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(require("./routes/serverApi"));
//app.use(require("./serverApi"));

module.exports = app;
