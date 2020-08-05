const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

router.put('/edit/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Project with ${req.params.id} is updated successfully`,
      });
    })
    .catch((error) => res.json(error));
});

module.exports = router;
