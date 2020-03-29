const isLoggedIn = () => (req, res, next) => {
  console.log("IS LOGGED IN USER", req.user);
  if (req.user) {
    return next();
  } else {
    res.status(401).json("You must be logged in to access this view");
  }
};

const isLoggedOut = () => (req, res, next) => (!req.user ? next() : res.json({ status: "You need to logout to register another user." }));

module.exports = {
  isLoggedIn,
  isLoggedOut
};
