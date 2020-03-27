require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");

mongoose
  .connect("mongodb://localhost/profile-app", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

app.use(cors());

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Session
app.use(
  session({
    secret: "my secret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

// Passport
require("./passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

const index = require("./routes/index");
app.use("/", index);

module.exports = app;
