const User = require('../models/User');
const passport = require('../config/passport');
const bcrypt = require('bcrypt');

exports.SignUpAccess = async (req, res) => {
  const { email, password, course, campus, image } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email or password empty',
    });
  }

  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({
      message: 'Email already taken',
    });
  }

  const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = await User.create({
    email,
    password: hashPass,
    course,
    campus,
    image,
  });
  res.status(201).json(newUser);
};

exports.LoginAccess = (req, res, next) => {
  passport.authenticate('local', (err, user, errorDetails) => {
    if (err) {
      return res.status(500).json({
        message: 'Error',
      });
    }
    if (!user) {
      return res.status('401').json(errorDetails);
    }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: 'Error',
        });
      }
      res.status(200).json(user);
    });
  })(req, res, next);
};

exports.LogoutAccess = (req, res) => {
  req.logOut();
  res.status(200).json({ message: 'Logged Out' });
};

exports.getThisUser = (req, res) => {
  res.status(200).json(req.user || {});
};
