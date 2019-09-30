const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { isAuth, checkLogin } = require('../middlewares/auth')
const { asyncMiddleware } = require('../middlewares/async')
// Cloudinary config
const cloudinary = require('cloudinary')

// cloudinary.config({
//   cloud_name: CLOUDINARY_NAME,
//   api_key: CLOUDINARY_KEY,
//   api_secret: CLOUDINARY_SECRET
// })

router.post('/auth/signup', asyncMiddleware(async (req, res, next) => {
  const user = await User.register(req.body, req.body.password)
  res.status(201).json({ message: 'User created' })
}))

router.post('/auth/login', checkLogin, (req, res, next) => {
  const { username, course, campus } = req.user
  res.status(200).json({ message: 'User logged', username, course, campus })
})

router.post('/auth/upload', isAuth, (req, res, next) => {

})
router.post('/auth/edit', isAuth, asyncMiddleware(async (req, res, next) => {
  try {
    const { _id } = req.user
    const { email, course, campus } = req.body
    const user = await User.findByIdAndUpdate(_id, { email, course, campus })
    res.status(200).json({ message: 'User updated' })
  }
  catch (err) {
    res.status(500).json({ message: `There was an error: ${err}` })
  }

}))

router.get('/auth/logout', (req, res, next) => {
  console.log("request received")
  req.logout()
  res.status(200).json({ message: 'Logged out' })
})

router.get('/auth/loggedin', isAuth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
    res.status(200).json({ username, campus, course })
  }
  catch (err) {
    console.log("error " + err)
    res.status(500).json(err)
  }
})

router.post('/query/find', async (req, res, next) => {
  const { course, campus } = req.body
  const result = await User.find({}).select({ course, campus })
  res.status(200).json(result)
})

module.exports = router;