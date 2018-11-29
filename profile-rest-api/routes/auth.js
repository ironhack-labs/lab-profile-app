const express = require('express');
const authRouter = express.Router();

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const upload = require('../helpers/multer');

authRouter.post('/login', async (req, res) => {
  const user = await User.findOne({username: req.body.username});
  if(!user) return res.status(404).json({msg: 'User is not registered'});
  let validPassword = bcrypt.compareSync(req.body.password, user.password);
  if(!validPassword) return res.status(500).json({msg: 'Wrong password'});
  const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 60});
  delete user._doc.password;
  res.status(200).json({user, token});
});

authRouter.post('/signup', (req, res) => {
  if(req.body.password !== req.body.confirmPassword) return res.status(500).json({msg: 'Passwords missmatch'});

  const salt = bcrypt.genSaltSync(256);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  req.body.password = hashedPassword;

  let user = {}
  Object.keys(req.body).forEach(key => {
    user[key] = req.body[key];
  })

  User.create(user)
  .then(user => {
    const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 60});
    delete user._doc.password;
    res.status(200).json({msg: 'User created succesfully', user, token});
  })
  .catch(err => {
    console.log('User SingUp Error =====>', err);
    res.json({err});
  });
});

authRouter.patch('/upload/:id', upload.single('profilePicture'), (req, res) => {
  let user={};
  if(!req.file) return res.status(500).json({msg: 'No file provided'});
  user.profilePicture = req.file.url;
  User.findByIdAndUpdate(req.params.id, {$set: user}, {new: true})
    .then(user => {
      if(!user) return res.status(500).json({msg: 'File upload Error'});
      delete user._doc.password;
      res.status(200).json({user, msg: 'Picture saved succesfully'});
    })
    .catch(err => {
      console.log('Upload Picture Error =====>', err);
      res.json({err});
    });
});

authRouter.patch('/edit/:id', upload.single('profilePicture'), (req, res) => {
  let user={}
  Object.keys(req.body).forEach(key => {
    user[key] = req.body[key];
  });
  if (req.file) user.profilePicture = req.file.url;
  User.findByIdAndUpdate(req.params.id, {$set: user}, {new: true})
    .then(user => {
      if(!user) return res.status(500).json({msg: 'User Update Error'});
      delete user._doc.password;
      res.status(200).json({user, msg: 'User updated succesfully'})
    })
    .catch(err => {
      console.log('User Update Error =====>', err);
      res.json({err});
    });
})

module.exports = authRouter;