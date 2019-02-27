const express = require('express');
const router  = express.Router();
const User    = require('../models/User')
// include CLOUDINARY:
const uploader = require('../config/cloudinary');

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    res.json({ secure_url: req.file.secure_url });
})

module.exports = router;