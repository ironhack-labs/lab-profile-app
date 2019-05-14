const hasAuth = (req, res, next) => {
  if (!req.isAuthenticated())
    return res.status(403).send({ message: 'User is not logged in.' });

  next();
};

exports.hasAuth = hasAuth;
