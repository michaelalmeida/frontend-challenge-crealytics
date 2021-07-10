var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");
require("body-parser");
require("dotenv").config();

var router = express.Router();
var app = express();

app.use(cookieParser());
app.use(cors());

app.options("*", cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require("./routes/products.routes")(app);

module.exports = app;
