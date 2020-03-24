const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../middleware/account-middleware");

const auth = require("./auth");
const user = require("./user");

router.use("/auth", auth);

router.use(isLoggedIn());

router.use("/user", user);

module.exports = router;
