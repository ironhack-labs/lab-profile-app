const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.verifyToken = (req, res, next) => {
  // 1. Checar si llego un token 
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization']
  if (!token) return res.status(401).json({ message: "Ni mandaste token lolz" })
  // 2. Checar que el token sea valido
  jwt.verify(token, process.env.TOKEN_GENERATOR, (err, decoded) => {
    if (err) return res.status(401).json({ message: "tu token caduco" })
    // 3. checar que el user existe y 
    // si existe entonces lo dejamos pasar con un next
    User.findById(decoded.userId)
      .then(user => {
        req.user = user
        next()
      })
  })
}
// crea la llave para exportar mas de una cosa
exports.generateToken = (user) => {
  return jwt.sign({
    userId: user._id,
    email: user.email
  },
    process.env.TOKEN_GENERATOR,
    { expiresIn: "72 hours" }
  )
}