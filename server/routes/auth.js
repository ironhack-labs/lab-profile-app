const express = require('express');
const router  = express.Router();
const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const bcryptSalt = 10
const multer = require('multer')
const upload = multer({ dest: 'public/uploads/' })


////SIGNUP ROUTE////
router.post('/signup', async (req, res) => {
  const { username, password, campus, course } = req.body
  

  if(!username || !password || !campus || !course) {
    res.status(400).json({ message: 'Please provide all information (username password, campus, course)'});
    return;
  }

  try {
    const userFound = await User.findOne( { username } );

    if(userFound){
      res.status(400).json({ message: 'This username already exist, pick another username'});
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const user = await User.create( { username: username, password: hashPass, campus: campus, course: course } )
    console.log(user)

    req.session.user = user
    res.status(200).json(user);
    return;

  } catch(err){
    console.log(err)
    res.status(500).json({ message: "Something went wrong"});
  }
})


////LOGIN ROUTE////
router.post('/login', async (req, res) => {
  const { username, password } = req.body

  if(!username || !password){
    res.status(400).json({ message: 'Please provide both username and password'});
    return;
  }

  try{
    const user = await User.findOne({ username })

    if(user){
      const correctPassword = await bcrypt.compare(password, user.password);

      if(correctPassword) {
        req.session.user = user
        res.status(200).json(user);
      } 
      else {
        res.status(400).json({ message: 'Your password is not correct, please try again'});
      }
    } else {
      res.status(400).json({ message: 'Please provide the right credentials' })
    }

  } catch(err){
    res.status(500).json({ message: 'Something went wrong, please try again'})
  }
})


////LOGOUT ROUTE////
router.get('/logout', (req, res) => {
  req.session.destroy()
  res.status(200).json({message: 'User is logged out'})
})

////LOGGEDIN ROUTE////
router.get('/loggedin', (req,res) => {
  if(req.session.user){
    res.status(200).json(req.session.user)
  } else {
    res.status(400).json({ message: 'No user in session'})
  }
})

////FILE UPLOAD////

router.post('/profile', upload.single('profileImage'), (req, res) => {
  if(!req.session.user){
    res.status(400).json({ message: 'No user in session'})
  }

  const { username } = req.session.user

  User.updateOne({username: username}, {image: req.file.filename})
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json({ message: 'Something went wrong with uploading your profile picture'})
  })

})


module.exports = router;
