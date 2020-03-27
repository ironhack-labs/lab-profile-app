const express = require("express");
const UserModel = require("../models/User.model");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");
const { hashPassword } = require("../lib/hashing");
const { asyncController } = require("../lib/asyncController");

router.post("/signup", async (req, res, next) => {
  const { username, password, campus, course } = req.body;
  console.log(username);
  console.log(password);
  console.log(campus);
  console.log(course);

  const newUser = await UserModel.create({
    username,
    password: hashPassword(password),
    campus,
    course
  });

  req.logIn(newUser, err => {
    res.json(
      _.pick(req.user, [
        "username",
        "_id",
        "campus",
        "course",
        "createdAt",
        "updatedAt"
      ])
    );
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  //Return the logged in user
  console.log(req.user);
  console.log("el login esta bien hecho");
  return res.json(
    _.pick(req.user, [
      "username",
      "id",
      "campus",
      "course",
      "createdAt",
      "updatedAt"
    ])
  );
});

router.post("/logout", (req, res, next) => {
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

router.post(
  "/upload",
  asyncController(async (req, res, next) => {
    const loggedUser = req.user;

    if (req.file) {
      loggedUser.image = req.file;
      await loggedUser.save();
      return res.json(
        _.pick(req.user, [
          "username",
          "id",
          "campus",
          "course",
          "createdAt",
          "updatedAt"
        ])
      );
    } else {
      return res.status(401).json({ status: "Not file sent" });
    }
  })
);

router.post("/edit", async (req, res, next) => {
  const { username, campus, course } = req.body;
  const loggedUser = req.user;

  try {
    const existingUser = await UserModel.findOne({ username });
    if (!existingUser) {
      loggedUser.username = username;
      loggedUser.campus = campus;
      loggedUser.course = course;

      await loggedUser.save();
      return res.json(
        _.pick(req.user, [
          "username",
          "id",
          "campus",
          "course",
          "createdAt",
          "updatedAt"
        ])
      );
    } else {
      if (loggedUser.username === existingUser.username) {
        loggedUser.campus = campus;
        loggedUser.course = course;
        await loggedUser.save();
        return res.json(
          _.pick(req.user, [
            "username",
            "id",
            "campus",
            "course",
            "createdAt",
            "updatedAt"
          ])
        );
      } else {
        res
          .setMaxListeners(401)
          .json({ status: " yo can't use that username" });
      }
    }
  } catch (error) {
    next(error);
  }
});

router.get("/loggedin", (req, res, next) => {
  if (req.user)
    return res.json(
      _.pick(req.user, [
        "username",
        "id",
        "campus",
        "course",
        "createdAt",
        "updatedAt"
      ])
    );
  else return res.status(401).json({ status: "No user session present" });
});

// router.get("/whoami", (req, res, next) => {
//   if (req.user) return res.json(req.user);
//   else return res.status(401).json({ status: "No user session present" });
// });

module.exports = router;
