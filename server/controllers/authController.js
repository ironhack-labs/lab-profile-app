const User = require("../models/User");
const 
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

exports.signup = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser
      .save()
      .then(() => {
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong" });
      });
  });
};

exports.logout = (req, res, next) => {
  req.logout();
  res.status(200).json({msg: 'Desconectado'})
};

exports.login = (req, res) => {
  const { user } = req;
  res.status(200).json(user);
};

exports.profile = (req, res, next) => {
  User.findById(req.user._id)
  .then((user) => res.status(200).json({ user }))
  .catch((err) => res.status(500).json({err}))
};