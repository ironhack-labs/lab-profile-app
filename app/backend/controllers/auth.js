const User = require('../models/User')

exports.registerNewUser = async (req, res) => {
  try {
    const newUser = await User.register(req.body, req.body.password)
    res.status(201).json({ newUser, msg: 'User created' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

exports.logInUser = (req, res) => {
  const { user } = req
  res.status(200).json({ user, msg: 'User logged' })
}

exports.logOutUser = (req, res) => {
  req.logout()
  res.status(200).json({ msg: 'Logged out succesfully' })
}

exports.editUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    res.status(200).json({ user: updatedUser, msg: 'User updated successfully!' })
  } catch (error) {
    res.status(500).json({ error })
  }
}
