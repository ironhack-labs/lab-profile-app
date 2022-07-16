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

router.post('/upload', async (req, res, next) => {
  try {
    const { image } = req.body;
    const todo = await User.create({ image });
    return res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { image } = req.body;
    const todo = await User.findByIdAndUpdate(id, { image }, { new: true });
    return res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
