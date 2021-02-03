const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('../config/passport');



exports.signupProcess = async (req, res) => {
  const { username , password, campus, course } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email or password empty',
    });
  }

  const user = await User.findOne({ username });

  if (user) {
    return res.status(400).json({
      message: 'Email already taken',
    });
  }

  const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(12));

  const newUser = await User.create({
    username,
    password: hashPass,
    campus,
    course
  });

  res.status(201).json(newUser);
};

exports.loginProcess = (req, res, next) => {
  // no hay logica nuestra por aca...
  passport.authenticate('local', (err, user, errDetails) => {
    if (err) {
      return res.status(500).json({
        message: 'Error',
      });
    }
    if (!user) {
      return res.status('401').json(errDetails);
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

exports.logoutProcess = (req, res) => {
  req.logOut();
  res.status(200).json({ message: 'Logged out' });
};

exports.getCurrentUser = (req, res) => {
  res.status(200).json(req.user || {});
};

exports.googleInit = passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ],
});

exports.googleCallback = (req, res, next) => {
  passport.authenticate(
    'google',
    { scope: ['profile', 'email'] },
    (err, user, errDetails) => {
      if (err) return res.status(500).json({ mesage: errDetails });
      if (!user) return res.status(500).json({ message: errDetails });

      req.login(user, (err) => {
        if (err) return res.status(500).json({ mesage: errDetails });
        res.redirect('http://localhost:3000');
      });
    }
  )(req, res, next);
};

exports.uploadProcess = async (req, res) => {
  const imgPath = req.file.url;
  const {_id} = req.user

  if (!_id) {
    return res.status(400).json({
      message: 'Invalalid operation',
    });
  }

  const updatedUser = await User.findByIdAndUpdate(_id, {image: imgPath}, {new: true});

  res.status(201).json(updatedUser);
};


