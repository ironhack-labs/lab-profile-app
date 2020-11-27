const express = require('express');
const User = require('../models/User');
const router  = express.Router();

/* GET home page */
router.get('/', async (req, res, next) => {
  const users = await User.find()
  res.json(users);
});

module.exports = router;
