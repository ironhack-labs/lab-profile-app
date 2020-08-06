const express = require('express');
const router = express.Router();
const uploader = require('../configs/cloudinary');
const User = require('../models/User.model');

router.post('/upload', uploader.single('image'), (req, res, next) => {
  if (!req.file) {
    return next(new Error('no file uploaded!'));
  }

  User.findByIdAndUpdate(
    {
      _id: req.session.passport.user,
    },
    { image: req.file.path },
    { new: true }
  ).then((imageUrl) => {
    res.status(200).json(imageUrl);
  });
});

module.exports = router;
