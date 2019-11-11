var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user-model");

//GET all profiles
router.get("/profiles", (req, res, next) => {
  User.find()
    .then(allTheProfiles => {
      res.json(allTheProfiles);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route
router.get("/profiles/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  User.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

//PUT
router.put("/profiles/:id", (req, res, next) => {
  const { username, course, campus } = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  User.findByIdAndUpdate(req.params.id, { username, course, campus })
    .then(() => {
      res.json({
        message: `Profile data for User with ${req.params.id} has been updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
