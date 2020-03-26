const express = require("express");
const UserModel = require("../models/User.model");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");

router.post("/signup", async (req, res, next) => {
  const { username, password, campus, course, image } = req.body;
  console.log(username);
  console.log(password);
  console.log(campus);
  console.log(course);
  console.log(image);

  const newUser = await UserModel.create({
    username,
    password,
    campus,
    course,
    image
  });

  req.logIn(newUser, err => {
    res.json(_.pick(req.user, ["username", "_id", "createdAt", "updatedAt"]));
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  //Return the logged in user
  console.log(req.user);
  console.log("el login esta bien hecho");
  return res.json(
    _.pick(req.user, ["username", "id", "createdAt", "updatedAt"])
  );
});

router.get("/logout", (req, res, next) => {
  if (req.user) {
    req.logout();
    console.log(req.user);
    return res.json({ status: "log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

router.post("/upload", (req, res, next) => {
  return res.json({ status: "UPLOAD PAGE" });
});

router.post("/edit", (req, res, next) => {
  return res.json({ status: "EDIT PAGE" });
});

router.get("/loggedin", (req, res, next) => {
  return res.json({ status: "LOGGEDIIN!!" });
});

router.get("/whoami", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
