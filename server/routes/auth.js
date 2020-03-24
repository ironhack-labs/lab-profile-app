const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/User");

const { isLoggedIn, isLoggedOut } = require("../middleware/account-middleware");
const { hashPassword } = require("../lib/hash-password");

router.post("/signup", isLoggedOut(), async (req, res) => {
  const { username, password, campus, course } = req.body;

  try {
    if (!(await User.findOne({ username }))) {
      const user = await User.create({
        username,
        password: hashPassword(password),
        campus,
        course
      });

      req.login(user, error => {
        if (error)
          return res.status(500).json({ status: "ServerError", error });
        return res.status(201).json(user);
      });
    } else
      return res.status(401).json({
        status: "UserExists"
      });
  } catch (error) {
    res.status(500).json({ status: "ServerError", error });
  }
});

router.post(
  "/login",
  isLoggedOut(),
  passport.authenticate("local"),
  (req, res) => res.status(200).json(user)
);

router.get("/logout", isLoggedIn(), async (req, res) => {
  try {
    req.logout();
    return res.status(200).json({ status: "Log out" });
  } catch (error) {
    res.status(500).json({ status: "ServerError", error });
  }
});

router.get("/loggedin", isLoggedIn(), async (req, res) =>
  res.status(200).json(req.user)
);

module.exports = router;
