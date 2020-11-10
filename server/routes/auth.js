const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const bcryptSalt = 10
const multer = require('multer')
const upload = multer({dest: "public/uploads/"})

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('auth');
// });

router.post('/signup', async (req, res) =>{
  const { username, password, campus, course } = req.body
  console.log(req.body)

  if(!username || !password || !campus || !course) {
    res.status(400).json({message: 'All fields are mandatory. Please provide your username, password, campus and course.'})
    return
  }

  try {
    const userFound = await User.findOne({username})
    if(userFound) {
      res.status(400).json({message: 'The username already exists.'})
      return
    }

    const salt =bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const user = await User.create( {username: username, password: hashPass, campus: campus, course: course})
    
    req.session.user = user
    res.status(200).json(user)
    return
  }
  catch(err) {
    console.log(err)
    res.status(500).json({message: 'Something went wrong.'})
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  if(!username || !password) {
    res.status(400).json({message: 'Please enter both username and password.'})
    return
  }

  try {
    const user = await User.findOne({username})

    if(user){
      const passwordCorrect= await bcrypt.compare(password, user.password)
      if(passwordCorrect){
        req.session.user = user
        res.status(200).json(user)
      }
    } else {
      res.status(400).json({message: 'Please enter correct username and password.'})
    }

  } catch(err){
    console.log(err)
    res.status(500).json({message: 'Something went wrong.'})
  }
})

router.get('/loggedin', (req, res) => {
  if(req.session.user){
    res.status(200).json(req.session.user)
  } else {
    res.status(400).json({message: 'No user in session'})
  }
})

router.post('/logout', (req, res) => {
  req.session.destroy()
  res.status(200).json({message: 'User logged out'})
})

router.post('/upload', upload.single('image'), (req, res) => {
  if(!req.session.user){
  return res.status(400).json({message: 'user not logged. Please login'})
  }

  const {username} = req.session.user

  User.updateOne({username: username}, {imageUrl: req.file.filename})
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json({message: 'Something went wrong'})
  })
})

module.exports = router;
