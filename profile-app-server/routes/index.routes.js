const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/upload", fileUploader.single("image"), (req, res, next) => {
 
 
  if (!req.file) {
    res.status(400).send('No file uploaded!');
  }
  res.json({ image: req.file.path });
});


router.get("/users", isAuthenticated, (req, res, next) => {
  const userId = req.payload._id;
  User.findById(userId)
  .then(foundUser => {
    // Deconstruct the user object to omit the password
    const { _id, username, campus, course, image } = foundUser;

    // Create an object that will be set as the token payload
    const resPayload = { _id, username, campus, course, image };
    res.json(resPayload);
  })
  .catch(next)
});

router.put("/users", isAuthenticated, (req, res, next) => {
  
  const { image } = req.body;

  const { _id } = req.payload;

  if (!image) {
    res.status(400).send('No file uploaded!');
  }

  User.findByIdAndUpdate(_id, { image })
  .then(foundUser => {
    // Deconstruct the user object to omit the password
    const { _id, username, campus, course, image } = foundUser;

    // Create an object that will be set as the token payload
    const resPayload = { _id, username, campus, course, image };
    res.json(resPayload);
  })
  .catch(next)
});



module.exports = router;
