const express = require("express");
const passport = require("passport");

const User = require("../models/User");

const { isLoggedIn, isLoggedOut } = require("../middleware/account-middleware");
const { hashPassword } = require("../lib/hash-password");

const router = express.Router();

router.get("/signup", isLoggedOut(), (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res, next) => {
  const { email, username, password } = req.body;
  console.log(email);
  try {
    const user = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (!user) {
      const hash = hashPassword(password);
      const user = await User.create({ email, username, password: hash });

      req.login(user, err => {
        if (err) {
          req.flash(
            "error",
            "User signup but has ocurred an error while login."
          );
          return res.redirect("/auth/login");
        }
        return res.redirect("/");
      });
    } else {
      req.flash("error", "User already exists! Please, try again or login.");
      return res.redirect("/");
    }
  } catch (e) {
    next(e);
  }
});

router.get("/login", isLoggedOut(), (req, res, next) => {
  res.render("auth/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: "Invalid username or password! Please, try again.",
    passReqToCallback: true
  })
);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/auth/signup",
    failureFlash: "Has ocurred an error! Please, try again.",
    passReqToCallback: true
  })
);

router.get("/logout", isLoggedIn(), async (req, res, next) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
