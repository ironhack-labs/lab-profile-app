const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyToken } = require('../helpers/auth-helper');
const uploader = require('../helpers/multer-helper');

// Route to receive the POST request to upload an image to the profile picture. Here we need the middlewares:
// verifyToken for authentication, and uploader to save images in cloudinary (config in /helpers)
router.post('/upload', verifyToken, uploader.single('image'), (req, res, next) => {
  
  // We destructure the user id and the image file url from the request
  const { id } = req.user;
  const { secure_url: image } = req.file
  
  res.status(200).json({ msg: 'User updated' });
  /*
  User.update( {_id: id}, { $set: {username: 'mel32'} }, (err, user) => {

    if ( err ) return res.status(500).json({ err });

    res.status(200).json({ user, token, msg: 'Updated user image correctly' });

  });
  */
});

router.post('/edit', verifyToken, (req, res, next) => {
  
  // We destructure the user id from the request (previously saved by the login or signup using jwt)
  const { id } = req.user;
  const { username, campus, course } = req.body;

  res.status(200).json({ msg: 'User updated' });
  /*
  User.update( {_id: id}, { $set: {username: 'mel32'} }, (err, user) => {

    if ( err ) return res.status(500).json({ err });

    res.status(200).json({ user, token, msg: 'Updated user image correctly' });

  });
  */

})

module.exports = router;