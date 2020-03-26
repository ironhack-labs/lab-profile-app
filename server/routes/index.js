const express = require('express');
const router  = express.Router();

// Use routes
const auth = require("./auth");
router.use("/", auth);

module.exports = router;
