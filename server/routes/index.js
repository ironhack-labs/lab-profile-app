const express = require('express');
const router  = express.Router();




router.use('/api/auth' ,require('./auth'))

module.exports = router;
