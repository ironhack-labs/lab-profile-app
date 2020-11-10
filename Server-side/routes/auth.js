const express = require('express');
const router  = express.Router();
const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

/* Create User */
router.post('/signup', async(req, res) => {
  const { username, password, campus, course } = req.body
  console.log(req.body)

if(!username || !password){
  res.status(400).json({ message: "Please fill in everything"})
  return
}

try {
  const nameTaken = await User.findOne( { username })
  if(nameTaken){
     res.status(401).json({ message: "This username already exists" })
     return
  } 

  const salt = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password, salt)
  
  const user = await User.create({ username: username, password: hashPass, campus: campus, course: course })
  
  req.session.user = user  
  res.status(200).json(user)
  return
  }

  catch(err){
    console.log(err)
    res.status(500).json({ message: "Something went wrong"})
  }
})

/* Login */ 
router.post('/login', async(req, res) => {

    const { username, password } = req.body

    if(!username || !password){
      res.status(400).json({ message: "Please fill in the information"})
      return
    }

    try {
      const user = await User.findOne({ username })
      
      if(user){
        const passwordCorrect = await bcrypt.compare(password, user.password)
        if(passwordCorrect){
          req.session.user = user
          res.status(200).json({ message: 'Login Successful '})
        }
      } 
      else {
        res.status(400).json({ message: 'Please provide the right credentials '})
      } 
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Something is wrong"})
      }
})

/* LoggedIn */
router.get('/loggedin', (req, res) => {

  if(req.session.user){
    res.status(200).json(req.session.user)
  } else {
    res.status(400).json({ message: 'No user is logged in' })
  }
})

/* Logout */ 
router.get('/logout', (req, res) => {
  req.session.destroy()
  res.status(200).json({ message: 'You have logged out' })
})

module.exports = router;
