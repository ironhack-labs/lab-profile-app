const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

// router.get('/users', (req, res) => {
//   res.status(200).json(req.payload);
// });

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
