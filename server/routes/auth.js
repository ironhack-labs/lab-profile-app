const express = require('express');
const passport = require('passport');

const authRoutes = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const parser = require('../configs/cloudinary');

// Bcrypt to encrypt passwords
const bcryptSalt = 10;

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: 'Error in the authentication',
      });
      return;
    }
    if (!user) {
      console.log('no existe');
      res.status(500).json(failureDetails);
      return;
    }

    req.login(user, (error) => {
      console.log(error);
      if (error) {
        res.status(500).json({
          message: 'Error in the authentication',
        });
        return;
      }
      res.status(200).json(user);
    });
  })(req, res, next);
});

authRoutes.post('/signup', (req, res) => {
  const {
    username,
    password,
    campus,
    course,
  } = req.body;
  console.log({
    username,
    password,
    campus,
    course,
  });
  if (username === '' || password === '' || campus === '' || course === '') {
    res.status(500).json({
      message: 'Provide username and password',
    });
    return;
  }

  User.findOne({
    username,
  }, 'username', (err, user) => {
    if (user !== null) {
      res.status(500).json({
        message: 'Username taken',
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      campus,
      course,
      image: '',
    });

    newUser.save((er) => {
      if (er) {
        res.status(500).json({
          message: 'Saving user to database went wrong.',
        });
      } else {
        req.login(newUser, (e) => {
          if (e) {
            res.status(500).json({
              message: 'Login after signup went bad.',
            });
            return;
          }
          res.status(200).json(newUser);
        });
      }
    });
  });
});

authRoutes.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({
    message: 'Log out success!',
  });
});

authRoutes.get('/loggedin', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({
    message: 'Unauthorized',
  });
});

// Edicion del perfil y subida de imagenes

// authRoutes.post('/upload', (req, res) => {

// });

authRoutes.post('/edit', parser.single('picture'), (req, res) => {
  User.findOneAndUpdate({ _id: req.body.id }, {
    image: req.file.url,
  })
    .then(() => {
      res.json({
        success: true,
        image: req.file.url,
      });
    })
    .catch(err => console.log(err));
});

module.exports = authRoutes;
