const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const { hashPassword } = require("../lib/hash");
const _ = require("lodash");
const { isLoggedOut } = require("./../lib/isLoggedMiddleware");

router.post(
  "/login",
  isLoggedOut(),
  passport.authenticate("local"),
  (req, res) => {
    // Return the logged in user
    return res.json(
      _.pick(req.user, ["username", "_id", "createdAt", "updatedAt"])
    );
  }
);

router.post("/signup", isLoggedOut(), async (req, res, next) => {
  const { username, password, campus, course } = req.body;
  if (!username || !password) {
    return res.json({ error: "Invalid data" });
  }
  try {
    const existingUser = await User.findOne({
      username
    });
    if (!existingUser) {
      const newUser = await User.create({
        username,
        password: hashPassword(password),
        campus,
        course
      });

      // login with the user created
      req.login(newUser, function(err) {
        if (!err) {
          return res
            .status(201)
            .json(
              _.pick(req.user, ["username", "_id", "createdAt", "updatedAt"])
            );
        } else {
          return res
            .status(401)
            .json({ error: `Error trying to login with the new user` });
        }
      });
    } else {
      return res.status(401).json({ error: "The user already exists" });
    }
  } catch (e) {
    next(e);
  }
});

// router.post("/upload", (req, res, next) => {
//   const { file } = req.body;
//   res.json(`User updated ${file}`);
// });

// router.post("/edit", (req, res, next) => {
//   const { username, campus, course } = req.body;
//   res.json(`User updated ${username} ${campus} ${course}`);
// });

// router.post("/logout", (req, res, next) => {
//   res.json(`Logged out`);
// });

router.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated())
    return res.json(
      _.pick(req.user, ["username", "_id", "createdAt", "updatedAt"])
    );
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
