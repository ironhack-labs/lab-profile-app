const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

router.put('/edit', (req, res, next) => {
  const { username, campus, course } = req.body;
  if (req.user) {
    User.findByIdAndUpdate(
      req.user._id,
      { username, campus, course },
      { new: true }
    )
      .then(() => {
        res.status(200).json({
          message: `User with ${req.req.user._id} is updated successfully`,
        });
      })
      .catch((error) => res.json(error));
  } else {
    res.status(500).json({ message: 'Error updating the user' });
  }
});

module.exports = router;
