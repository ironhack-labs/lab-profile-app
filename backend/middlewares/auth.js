const passport = require('../config/passport')

exports.isAuth = (req, res, next) => {
  req.isAuthenticated() ? next() : res.status(401).json({ message: 'You need to log in first' })
}

exports.checkLogin = (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { console.log("!user"); return res.status(401).json({ message: 'Username/Password invalid' }); }
    req.logIn(user, function (err) {
      if (err) { console.log("login err"); return next(err); }
      return next();
    });
  })(req, res, next);
}