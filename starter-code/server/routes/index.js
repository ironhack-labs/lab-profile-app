const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ status: 'Welcome' });
});

const auth = require('./auth');
router.use('/auth', auth);

module.exports = router;
