const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../middleware/account-middleware");

const auth = require("./auth");
const movies = require("./movies");
const users = require("./users");

router.use("/auth", auth);

router.use(isLoggedIn());

router.use("/movies", movies);
router.use("/users", users);

router.get("/", (req, res, next) => {
  console.log("HOME")
});

module.exports = router;
