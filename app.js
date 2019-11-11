require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const authRoutes = require("./routes/auth-routes");

var app = express();

// passport and bcrypt

const session = require("express-session");
const passport = require("passport");

require("./configs/passport");

// mongoose

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

//cors stuff
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"] // <== this will be the URL of our React app (it will be running on port 3000)
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// session section
app.use(
  session({
    secret: "some secret goes here",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", authRoutes);
app.use("/api", require("./routes/profile-routes"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
