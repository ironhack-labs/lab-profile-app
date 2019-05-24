const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const authUtils = require("../helpers/auth");
const uploader = require("../helpers/multer");

router.post("/signup", (req, res, next) => {
  // generamos hash para password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  User.create({ ...req.body, password: hashedPassword })
    .then(user => {
      // generacion de token
      jwt.sign(
        { id: user._id },
        process.env.SECRET,
        // valor en segundos
        { expiresIn: 86400 },
        (error, token) => {
          if (error)
            return res
              .status(500)
              .json({ error, message: "Error while creating token" });
          res.status(200).json({ token });
        }
      );
    })
    .catch(error => {
      error.action = "Error while creating user";
      next(error);
    });
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user)
        return res
          .status(404)
          .json({ error: {}, message: "Username not found" });
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid)
        return res.status(401).json({ error: {}, message: "Invalid password" });
      // generacion de token
      jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: "1h" },
        (error, token) => {
          if (error)
            return res
              .status(500)
              .json({ error, message: "Error while creating token" });
          delete user._doc.password;
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(error => {
      error.action = "Error while signing in";
      next(error);
    });
});

router.post(
  "/upload",
  authUtils.verifyToken,
  uploader.single("image"),
  (req, res, next) => {
    const image = req.file.secure_url;
    const { _id } = req.user;
    User.findByIdAndUpdate(_id, { $set: image }, { new: true })
      .then(user => {
        res.status(200).json({ message: "Upload successful" });
      })
      .catch(error => {
        error.action = "Error while uploading image";
        next(error);
      });
  }
);

router.post("/edit", authUtils.verifyToken, (req, res, next) => {
  const { _id } = req.user;
  // here's not necessary to use form $set: {} because req.body is already an object
  User.findByIdAndUpdate({ _id }, { $set: req.body }, { new: true })
    .then(user => {
      res.status(200).json({ message: "Edit successful" });
    })
    .catch(error => {
      error.action = "Error while uploading image";
      next(error);
    });
});

router.get("/loggedin", authUtils.verifyToken, (req, res) => {
  res.status(200).json({ message: "User login still valid" });
});

/* UNNECESARY FOR TOKENS
router.get("/logout", authUtils.verifyToken, (req, res) => {});
*/

module.exports = router;
