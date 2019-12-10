"use strict";

const { Router } = require("express");
const router = new Router();
const passport = require("passport");

router.post(
  "/sign-up",
  passport.authenticate("local-sign-up", {
    successRedirect: "/private",
    failureRedirect: "/sign-up"
  })
);

router.post(
  "/sign-in",
  passport.authenticate("local-sign-in", {
    successRedirect: "/private",
    failureRedirect: "/sign-in"
  })
);

// !!! fix withinpassport.authenticate()
router.post(
  "/upload",
  passport.authenticate("local-sign-up", {
    successRedirect: "/profile",
    failureRedirect: "/sign-in"
  })
);

// !!! fix withinpassport.authenticate()
router.post(
  "/edit",
  passport.authenticate("local-sign-up", {
    successRedirect: "/profile",
    failureRedirect: "/sign-in"
  })
);

// !!! fix withinpassport.authenticate() + all (what is the purpose of this route?)
router.get(
  "/loggedin",
  passport.authenticate("local-sign-up", {
    successRedirect: "/profile",
    failureRedirect: "/sign-in"
  })
);

router.post("/sign-out", (req, res, next) => {
  req.logout();
  res.json({});
});

module.exports = router;

// POST	/auth/login	username, password	User logged
// POST	/auth/signup	username, password, campus, course	User created
// POST	/auth/upload	file	User updated
// POST	/auth/edit	username, campus, course	User updated
// POST	/auth/logout		OK Message
// GET	/auth/loggedin		User logged
