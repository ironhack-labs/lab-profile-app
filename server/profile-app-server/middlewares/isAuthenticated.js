const { expressjwt: jwt } = require('express-jwt');

const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'payload',
  getToken: getTokenFromRequestHeaders,
});

function getTokenFromRequestHeaders(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    const token = req.headers.authorization.split(' ')[1];
    return token;
  }
  return null;
}

module.exports = isAuthenticated;
