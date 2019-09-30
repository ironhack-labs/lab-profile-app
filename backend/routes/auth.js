const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const passport = require('../config/passport')

router.post('/signup', (req, res, next) => {
  //dentro de la libreria de passport hay un metodo que se llama register, que recibe 2 parametros(estructura, el segundo la contraseña)
  User.register(req.body, req.body.password)
    //.json es para guardarlo en json y mandarlo al frontend en la data 
    .then((user) => res.status(201).json({user, msg: 'User created' }))
    .catch((err) => res.status(500).json({err}))
    console.log(req.body);
    
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const {user} = req;
  //{user: user} -----> {user}
  const msg = 'User logged'
  res.status(200).json({user, msg})
})

router.post('/edit', (req, res, next) => {
  
})

router.get('/logout', (req, res, next) =>{
  req.logout()
  res.status(200).json({msg: 'Logged out'})
})

router.get('/profile', isAuth, (req, res, next) =>{
  User.findById(req.user._id)
  .then((user) => res.status(200).json({user}))
  .catch((err) => res.status(500).json({err}))
})

function isAuth (req, res, next) {
  req.isAuthenticated () ? next() : res.status(401).json({msg: 'Log in first'})
}

module.exports = router;
