const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../lib/isLoggedMiddleware");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

const auth = require("./auth");
const user = require("./user");

router.use("/auth", auth);

router.use(isLoggedIn());

router.use("/user", user);

module.exports = router;
