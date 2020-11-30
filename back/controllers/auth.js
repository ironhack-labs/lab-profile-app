const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.loginProcess = async (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Something went wrong authenticating user' });
    }
    if (!user) {
      console.log(failureDetails);
      return res.status(401).json(failureDetails);
    }
    req.login(user, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: 'Something went wrong authenticating user' });
      }
      user.password = null;
      res.status(200).json(user);
    });
  })(req, res, next);
};

exports.signupProcess = async (req, res) => {
  const { username, password, campus, course } = req.body;
  if (!username || !password || !campus || !course) {
    return res.status(400).json({
      message: 'Fields are missing',
    });
  }
  const user = await User.findOne({
    username,
  });
  if (user) {
    return res.status(400).json({
      message: 'Username already exists!',
    });
  }
  const salt = bcrypt.genSaltSync(12);
  const hashPass = bcrypt.hashSync(password, salt);
  await User.create({
    username,
    password: hashPass,
    campus,
    course,
  });

  res.status(201).json({
    message: 'User created successfully!',
    user: {
      username,
      campus,
      course,
    },
  });
};

exports.uploadProcess = async (req, res) => {
  const { _id } = req.user;
  const{image} = req.body
  console.log(_id)
  console.log(image)
  await User.findByIdAndUpdate(_id, { image });
  res.status(200).json({ message: 'Image updated successfully!' });
};

exports.logoutProcess = (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logged out' });
  console.log('logout process');
};

exports.editProcess = async (req, res) => {
  const {user: {username,course,campus,id}} = req.body
  await User.findByIdAndUpdate(id, {username, campus, course})
  res.status(200).json({ message: 'User updated successfully' });
};
exports.currentUser = (req, res) => {
  res.json(req.user || null);
};
