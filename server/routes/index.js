const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.send('Profile Lab Yvan, Xavi and Manu');
});

module.exports = router;