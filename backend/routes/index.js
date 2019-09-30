const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const passport = require('../config/passport')

router.get('/', (req, res, next)=>{
  res.render('index')
})

module.exports = router;
