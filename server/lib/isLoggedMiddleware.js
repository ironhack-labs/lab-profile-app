const isLoggedIn = () => (req, res, next) =>
  req.user ? next() : res.status(401).json({ status: "User must be logged" });
const isLoggedOut = () => (req, res, next) =>
  !req.user ? next() : res.status(401).json({ status: "User already logged" });
module.exports = {
  isLoggedIn,
  isLoggedOut
};