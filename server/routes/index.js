const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.use("/auth", require('./auth')); //desde app.js llega a index.js y de index va a todas las rutas


module.exports = router;
