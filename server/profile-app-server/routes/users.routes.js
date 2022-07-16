const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.get('/', isAuthenticated, async (req, res) => {
  try {
    // const users = await User.find();
    res.status(200).json(req.payload);
    console.log(req.payload);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/upload', isAuthenticated, async (req, res, next) => {
  try {
    const { image } = req.body;
    console.log(req.user);
    const todo = await User.findByIdAndUpdate(
      req.payload.id,
      { image },
      { new: true }
    );
    return res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const { image } = req.body;
    console.log(req.user);
    const todo = await User.findByIdAndUpdate(
      req.payload.id,
      { image },
      { new: true }
    );
    return res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
