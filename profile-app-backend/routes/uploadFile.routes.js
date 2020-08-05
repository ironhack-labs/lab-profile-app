const express = require('express');
const router = express.Router();
const uploader = require('../configs/cloudinary');

router.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
  console.log('upload listo');
  console.log('file:', req.file);
  if (!req.file) {
    return next(new Error('no file uploaded!'));
  }
  res.json({ imageUrl: req.file.path });
});

module.exports = router;
