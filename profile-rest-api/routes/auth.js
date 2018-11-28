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