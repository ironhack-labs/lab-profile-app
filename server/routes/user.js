const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/upload", async (req, res) => {
  const { file } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      {
        _id: req.user._id
      },
      {
        image: file
      },
      { new: true, runValidators: true }
    );
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ status: "ServerError", error });
  }
});

router.post("/edit", async (req, res) => {
  const { username, campus, course } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      {
        _id: req.user._id
      },
      {
        username,
        campus,
        course
      },
      { new: true, runValidators: true }
    );
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ status: "ServerError", error });
  }
});

module.exports = router;
