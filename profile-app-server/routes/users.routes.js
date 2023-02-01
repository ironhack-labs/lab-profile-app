const express = require("express");
const router = express.Router();

// **** require User model in order to use it ****
const User = require("../models/User.model");

// ********* require fileUploader in order to use it *********
const fileUploader = require("../config/cloudinary.config");

// GET '/api/users' => Route to get current user
router.get("/users", (req, res, next) => {
  User.find()
    .then((usersFromDB) => res.status(200).json(usersFromDB))
    .catch((err) => next(err));
});

// POST '/api/upload' => Route that will receive an image, send it to Cloudinary via the fileUploader and return the image URL
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  // console.log("file is: ", req.file);

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // get the URL of the uploaded file and send it as a response.
  // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend

  res.json({ fileUrl: req.file.path });
});

// POST '/api/users' => for saving a new user in the database
router.post("/user", (req, res, next) => {
  // console.log('body: ', req.body); ==> here we can see that all
  // the fields have the same names as the ones in the model so we can simply pass
  // req.body to the .create() method

  Users.create(req.body)
    .then((createdUser) => {
      console.log("Created new user: ", createdUser);
      res.status(200).json(createdUser);
    })
    .catch((err) => next(err));
});

module.exports = router;