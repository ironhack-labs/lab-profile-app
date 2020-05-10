const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const uploadConfig = require('../config/cloudinary');

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.post(
  '/login',
  passport.authenticate('local', {
    failureFlash: true,
    passReqToCallback: true,
  }),
  (req, res) => {
    res.status(200).json({ user: req.user });
  }
);

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === '' || password === '') {
    res.json({ message: 'Indicate username and password' });
    return;
  }

  User.findOne({ username }, 'username', (err, user) => {
    if (user !== null) {
      res.json({ message: 'The username already exists' });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
    });

    newUser
      .save()
      .then(({ username, _id }) => {
        res.status('201').json({ username, _id });
      })
      .catch((err) => {
        res.json({ message: 'Something went wrong' });
      });
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'LoggedOut' });
});

router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { username, campus, course } = req.body;
  const editUser = await User.findByIdAndUpdate(
    id,
    {
      username,
      campus,
      course,
    },
    { new: true }
  );
  res.status('200').json({ editUser });
});

router.post('/upload', uploadConfig.single('photo'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded'));
  }

  res.status(201).json({ secure_url: req.file.secure_url });
});

// exports.createProject = async (req, res) => {
//   // Por que no de req.file ?????????
//   const { name, description, imgURL, imgName } = req.body;
//   const owner = req.user.id;

//   const project = await Project.create({
//     name,
//     description,
//     owner,
//     imgName,
//     imgURL,
//   });

//   res.status(201).json({ project });
// };

module.exports = router;
