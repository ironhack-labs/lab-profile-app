const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "welcome" });
});

const auth = require("./auth");
router.use("/auth", auth);

module.exports = router;
