const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

let loginPromise = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, e => (e ? reject(e) : resolve(user)));
  });
};

router.post(
  "/login",
  passport.authenticate("local", (err, user, failureDetails) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    if (!user) return res.status(401).json(failureDetails);
    loginPromise(req, user)
      .then(() => res.status(200).json(req.user))
      .catch(e => res.status(500).json({ message: e.message }));
  })(req, res, next)
);

router.post("/signup", (req, res, next) => {
  const { username, password, campus, course } = req.body;
  if (username === "" || password === "" || campus === "" || campus === "") {
    res.json({ message: "Indicate all fields" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      campus,
      course
    });

    newUser
      .save()
      .then(user => loginPromise(req, user))
      .catch(err => {
        res.json({ message: "Something went wrong" });
      });
  });
});

router.get("edit", (req, res, next) => {
  const { username, campus, course, id } = req.body;

  User.findByIdAndUpdate(id, { username, campus, course }).then(userUpdat =>
    res.json({ message: "Updated Success", userUpdat })
  );
});

router.get("loggedin", (req, res) => {
  const { user } = req;

  user
    ? res.json({ succes: "Ok", user })
    : res.status(401).json({ succes: "No user logged" });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ success: "Ok" });
});

module.exports = router;
