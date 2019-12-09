const express = require('express');
const router  = express.Router();
const {
  signup
} = require ('../controllers/profileController');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post("/signup", signup);


module.exports = router;
