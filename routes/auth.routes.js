const { Router } = require('express');
const route = Router();
const {
  login,
  signup,
  logout,
  update,
} = require('../controllers/auth.controllers');

route
  .post('/signup', signup)
  .post('/login', login)
  .patch('/update', update)
  .post('/logout', logout);

module.exports = route;
