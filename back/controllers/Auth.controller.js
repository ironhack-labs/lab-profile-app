const UserModel = require('../models/User');
const passport = require('passport');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  const { username, password, campus, course } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Provide username and password' });
  }

  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(403).json({ message: 'The username already exists' });
  }

  const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(12));

  const newUser = UserModel.create({
    username,
    password: hashPass,
    campus,
    course,
  });

  res.status(201).json(newUser);
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      console.log(failureDetails);
      return res
        .status(500)
        .json({ message: 'Email o contraseña incorrectos' });
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Email o contraseña incorrectos' });
    }

    req.login(user, (err) => {
      if (err) {
        res.status(500).json({ message: 'No se pudo guardar la sesión' });
        return;
      }
      user.password = null;
      res.status(200).json(user);
    });
  })(req, res, next);
};

exports.edit = async (req, res) => {
  const { _id, username, campus, course } = req.body;

  const userEdited = await UserModel.findByIdAndUpdate(
    { _id },
    {
      username,
      campus,
      course,
    },
    { new: true }
  );
  userEdited.password = null;
  res.status(200).json(userEdited);
};

exports.upload = async (req, res) => {
  const { _id, file: image } = req.body;

  const userUploaded = await UserModel.findByIdAndUpdate(
    _id,
    { image },
    { new: true }
  );
  userUploaded.password = null;
  res.status(200).json(userUploaded);
};

exports.loggedin = (req, res) => {
  if (!req.user)
    return res.status(400).json({ message: 'There is no user logged in.' });
  req.user.password = null;
  res.status(200).json(req.user);
};

exports.logout = (req, res) => {
  req.logout();
  res.status(200).json({ message: 'The user logged out.' });
};
