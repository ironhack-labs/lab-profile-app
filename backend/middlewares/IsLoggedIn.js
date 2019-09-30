exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(500).send();
};