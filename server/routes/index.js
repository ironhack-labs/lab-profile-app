const express = require("express");
const router = express.Router();

// routes middlewares
const auth = require("./auth");
router.use("/auth", auth);

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
