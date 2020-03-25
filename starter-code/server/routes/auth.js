const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');
const ensureLogin = require('connect-ensure-login');
const User = require('../models/User');

router.post(
  '/login',
  ensureLogin.ensureLoggedOut(),
  passport.authenticate('local'),
  (req, res) => {
    // Return the logged in user
    return res.json(
      _.pick(req.user, ['username', '_id', 'createdAt', 'updatedAt'])
    );
  }
);

module.exports = router;
