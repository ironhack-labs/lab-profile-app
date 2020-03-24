const isLoggedIn = (redirectRoute = "/auth/login") => (req, res, next) => {
  return req.user ? next() : res.redirect(redirectRoute);
};

const isLoggedOut = (redirectRoute = "/") => (req, res, next) => {
  return !req.user ? next() : res.redirect(redirectRoute);
};

module.exports = {
  isLoggedIn,
  isLoggedOut
};
