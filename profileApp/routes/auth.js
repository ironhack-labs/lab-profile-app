const { Router } = require('express');
const { catchErrors } = require('../middlewares');
const {
  SignUpAccess,
  LoginAccess,
  LogoutAccess,
  getThisUser,
} = require('../controllers/authController');

const router = Router();
router.post('/signup', catchErrors(SignUpAccess));
router.post('/login', LoginAccess);
router.get('/logout', LogoutAccess);
router.get('/thisuser', getThisUser);

module.exports = router;
