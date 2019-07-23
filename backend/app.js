require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

mongoose
	.connect(process.env.DB, { useNewUrlParser: true })
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
	})
	.catch(err => {
		console.error("Error connecting to mongo", err);
	});

const app_name = require("./package.json").name;
const debug = require("debug")(`${app_name}:${path.basename(__filename).split(".")[0]}`);

const app = express();
app.use(
	cors({
		credentials: true,
		origin: ["http://localhost:3000"]
	})
);

app.use(passport.initialize());

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth.routes"));

module.exports = app;
