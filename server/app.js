require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

require("./lib/db-connection")();

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "express-passport-secret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

app.use("/static", express.static(__dirname + "/public"));

require("./passport")(app);

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(express.static(path.join(__dirname, "public")));

// Routes
const index = require("./routes/index");
app.use("/", index);

module.exports = app;
