const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyToken = (req, res, next) => {
  // Destructure the token in the authorization value of the request headers
  const { authorization: token } = req.headers;

  // Use verify function of JWT which, if is the correct one, will decode the token using the SECRET
  jwt.verify(token, process.env.SECRET, (error, decoded) => {

    // If there is an error, return an authentication error
    if ( error ) return res.status(401).json({ error, msg: 'Invalid token' });

    // Search user by accesing the id which we encoded in the token when we created it (login or signup routes)
    User.findById(decoded.id)
    .then( user => {
      req.user = user;
      next();
    });
  });
};