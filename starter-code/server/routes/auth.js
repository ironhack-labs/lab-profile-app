const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');
const ensureLogin = require('connect-ensure-login');
const User = require('../models/User');
const { hashPassword } = require('../lib/hashing');
const { asyncController } = require('../lib/asyncController');
const { upload, uploadCloud } = require('../lib/multerMiddleware');

// Register
router.post(
  '/signup',
  ensureLogin.ensureLoggedOut(),
  async (req, res, next) => {
    const { username, password, campus, course } = req.body;
    // Create the user
    const newUser = await User.create({
      username,
      password: hashPassword(password),
      campus,
      course
    });

    // Directly login user
    req.logIn(newUser, err => {
      res.json(
        _.pick(req.user, [
          'username',
          '_id',
          'campus',
          'course',
          'image',
          'createdAt',
          'updatedAt'
        ])
      );
    });
  }
);

// Login
router.post(
  '/login',
  ensureLogin.ensureLoggedOut(),
  passport.authenticate('local'),
  (req, res) => {
    // Return the logged in user
    return res.json(
      _.pick(req.user, [
        'username',
        '_id',
        'campus',
        'course',
        'image',
        'createdAt',
        'updatedAt'
      ])
    );
  }
);

// Update user fields
router.post('/edit', ensureLogin.ensureLoggedIn(), async (req, res, next) => {
  const { username, campus, course } = req.body;
  const loggedUser = req.user;

  try {
    //check if the new username sent is from one registered user
    const existingUser = await User.findOne({ username });
    // Update user in database if username is available
    if (!existingUser) {
      loggedUser.username = username;
      loggedUser.campus = campus;
      loggedUser.course = course;
      await loggedUser.save();
      //req.flash('error', 'Updated user!');
      return res.json(
        _.pick(req.user, [
          'username',
          '_id',
          'campus',
          'course',
          'image',
          'createdAt',
          'updatedAt'
        ])
      );
      // if the username is taken
    } else {
      // check if it's taken by the logged user
      if (loggedUser.username === existingUser.username) {
        loggedUser.campus = campus;
        loggedUser.course = course;
        await loggedUser.save();
        return res.json(
          _.pick(req.user, [
            'username',
            '_id',
            'campus',
            'course',
            'image',
            'createdAt',
            'updatedAt'
          ])
        );
        // if it doesn't correspond to the logged user
      } else {
        res.status(401).json({ status: `You can't use that username` });
      }
    }
  } catch (e) {
    next(e);
  }
});

// Logout
router.post('/logout', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: 'Logged out' });
  } else {
    return res
      .status(401)
      .json({ status: 'You have to be logged in to logout' });
  }
});

// Check if the user is logged in
router.get('/loggedin', (req, res, next) => {
  if (req.user)
    return res.json(
      _.pick(req.user, [
        'username',
        '_id',
        'campus',
        'course',
        'image',
        'createdAt',
        'updatedAt'
      ])
    );
  else return res.status(401).json({ status: 'No user session present' });
});

router.post(
  '/upload',
  ensureLogin.ensureLoggedIn(),
  uploadCloud.single('image'),
  asyncController(async (req, res, next) => {
    const loggedUser = req.user;
    //const { username } = req.body;
    // Update user in database
    //loggedUser.username = username;

    if (req.file) {
      loggedUser.image = req.file;
      await loggedUser.save();
      return res.json(
        _.pick(req.user, [
          'username',
          '_id',
          'campus',
          'course',
          'profilepic',
          'createdAt',
          'updatedAt'
        ])
      );
    } else {
      return res.status(401).json({ status: 'Not file sent' });
    }
  })
);

module.exports = router;
