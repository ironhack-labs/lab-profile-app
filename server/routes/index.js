const express = require('express');
const router = express.Router();

// routes middlewares
const auth = require('./auth.js');
router.use('/auth', auth);

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
