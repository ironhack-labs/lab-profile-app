const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const passport = require('../config/passport')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//SIGNUP
router.post('/auth/signup',(req, res, next) => {
  User.register(req.body, req.body.password)
  .then((user) => res.status(201).json({ user }))
  .catch((err) => res.status(500).json({ err }))
})

//LOGIN
router.post('/auth/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req 
  res.status(200).json({ user, msg: 'User logged' })
})

//LOGOUT
router.get('/auth/logout', (req, res, next) =>{
  req.logout()
  res.status(200).json({msg: 'Logged out'})
});

//EDIT
router.put('/auth/edit/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }, {new: true})
  .then((user) => res.status(200).json({ user, msg: 'Updated succesfully' }))
  .catch((err) => res.status(500).json({ err }))
})


//USER LOGGED
router.put('/auth/loggedin', (req,res, next) => {
  User.findById(req.user._id)
  .then((user) => res.status(200).json({ user }))
  .catch((err) => res.status(500).json({ err }))
});

//IS AUTHENTICATED
function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}




module.exports = router;
