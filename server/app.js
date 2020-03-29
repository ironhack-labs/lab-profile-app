require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const whitelist = [`http://localhost:${process.env.SERVER_PORT || 3000}`, `http://localhost:${process.env.CLIENT_PORT || 1234}`];
const corsOptions = {
  origin: (origin, cb) => {
    if (!origin) return cb(null, true);
    if (whitelist.indexOf(origin) !== -1) return cb(null, true);
    else cb(new Error("Not allowed by CORS"));
  },
  credentials: true
};

require("./config/db.config.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "say my name",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);
require("./middleware/passport")(app);

app.use((req, res, next) => {
  console.log("SESSION", req.session);
  next();
});

app.use(cors(corsOptions));
app.use(logger("dev"));

app.use("/", routes);

module.exports = app;
