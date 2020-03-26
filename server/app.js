require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();

const whitelist = [`http://localhost:${process.env.SERVER_PORT || 3000}`, `http://localhost:${process.env.CLIENT_PORT || 1234}`];
const corsOptions = {
  origin: (origin, cb) => {
    if (!origin) cb(null, false);
    if (whitelist.indexOf(origin) !== -1) cb(null, true);
    else cb(new Error("Not allowed by CORS"));
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use("/", (req, res) => {
  res.json({ status: "Welcome!" });
});

module.exports = app;
