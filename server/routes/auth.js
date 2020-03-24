const express = require("express");
const passport = require("passport");

const User = require("../models/User");

const { isLoggedIn, isLoggedOut } = require("../middleware/account-middleware");
const { hashPassword } = require("../lib/hash-password");

const router = express.Router();

router.post("/signup", isLoggedOut(), async (req, res, next) => {
  const { username, password, campus, course, image } = req.body;

  try {
    const user = await User.findOne(username);

    if (!user) {
      await User.create({
        username,
        password: hashPassword(password),
        campus,
        course,
        image
      });

      req.login(user => res.status(201).json(user));
    } else
      return res.json({
        status: "User already exist"
      });
  } catch (e) {
    next(e);
  }
});

router.post(
  "/login",
  isLoggedOut(),
  passport.authenticate("local", (err, user) => {
    if (err) res.status(500).json({ status: "ServerError", message: err });
    if (!user) return res.status(401).json({ status: "Bad credentials" });
    return res.json(req.user);
  })
);

router.get("/logout", isLoggedIn(), async (req, res) => {
  req.logout();
  return res.json({ status: "Log out" });
});

router.get("/loggedin", isLoggedIn(), async (req, res) => res.json(req.user));

module.exports = router;
