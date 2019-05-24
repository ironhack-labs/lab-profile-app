const jwt = require("jsonwebtoken");
const User = require("../models/User");

// exportamos una sola funcion
exports.verifyToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ err, message: "Expired or invalid token" });
    //avoid password through projection
    User.findById(decoded.id, { password: 0 }).then(user => {
      req.user = user;
      next();
    });
  });
};
