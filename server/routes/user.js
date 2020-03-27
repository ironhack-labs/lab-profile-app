const express = require("express");
const router = express.Router();

const User = require("../models/User");

/* EDIT */
router.post("/edit", async (req, res, next) => {
  try {
    const id = req.user._id;
    const { username, campus, course } = req.body;
    await User.findByIdAndUpdate(id, {
      username,
      campus,
      course
    });
    return res.json({ status: "Edit Profile" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

// UPLOAD
router.post("/upload", async (req, res, next) => {
  try {
    const id = req.user._id;
    const { image } = req.body;
    await User.findByIdAndUpdate(id, {
      image: image
    });
    return res.json({ status: "Uploaded image" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

module.exports = router;
