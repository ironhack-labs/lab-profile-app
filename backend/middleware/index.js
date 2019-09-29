exports.catchErrors = fn => {
  return (req, res, next) => {
    return fn(req, res, next).catch(next);
  };
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).send();
};
