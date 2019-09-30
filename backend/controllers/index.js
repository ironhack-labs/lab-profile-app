const User = require('./../models/User');

exports.createUser = async (req, res, next) => {
  const {username, password, campus, course} = req.body;
  console.log(req.body);
  const user = await User.register({ username, campus, course }, password);

  res.status(201).send(user);
};

exports.editUser = async (req, res) => {
  const enabledUpdates = ['username', 'campus', 'course'];
  const updates = {};
  for (const key in req.body) {
    if (enabledUpdates.includes(key)) updates[key] = req.body[key];
  }

  const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });

  res.status(200).send(user);
};

exports.loginUser = (req, res) => {
  res.status(200).send(req.user);
};

exports.logoutUser = (req, res) => {
  req.logout();
  res.status(200).send();
};

exports.getUser = (req, res) => {
  res.status(200).send(req.user);
};