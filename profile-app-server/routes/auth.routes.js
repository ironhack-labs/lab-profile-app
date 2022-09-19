const express = require('express')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router()

const mongoose = require('mongoose')
const middIsAuthenticated = require('../middlewares/middIsAuthenticated');

const User = require('../models/User.model');



// POST /auth/signup	
router.post('/signup', async (req, res, next) => {
  const { username, password, campus, course } = req.body;

  if (!username || !password || !campus || !course) {
    return res
      .status(400)
      .json({ message: 'No info ?' });
  }
  // verifier que le username n'existe pas deja en base
  User.findOne({username: username})
    .then(function (userFromDB) {
      if (userFromDB) {
        // STOP: le user existe !!!
        res.status(409).json({errorMessage: "username already taken"}) // Conflict
        return
      }

      const hashedPassword = bcryptjs.hashSync(password)

      User.create({
        username: username,
        password: hashedPassword, // hasher le mdp
        campus: campus,
        course: course,
      })
        .then(function (userFromDB) {
          res.status(201).json({
            user: {
              _id: userFromDB._id,
              username: userFromDB.username
            }
          })
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
})



// POST /auth/login	
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Enter some infos pls' });
  }

  // trouver l'utilisateur de cet username
  User.findOne({username: username})
    .then(userFromDB => {
      if (!userFromDB) {
        res.status(403).json({errorMessage: "Wrong infos"})
        return
      }

      const str = jwt.sign({
        _id: userFromDB._id,
        username: userFromDB.username,
      }, process.env.TOKEN_SECRET, {algorithm: "HS256", expiresIn: '6h'})

      if (bcryptjs.compareSync(password, userFromDB.password)) {
        res.json({
          authToken: str
        })
      } else {
        res.status(403).json({errorMessage: "Wrong infos"})
        return
      }
    })
    .catch(err => next(err))
})




// GET /auth/verify	
router.get('/verify', middIsAuthenticated, (req, res) => {
  res.status(200).json(req.payload);
});

module.exports = router;
