const express = require("express");
const router = express.Router();

const { signup, login, currentUser, logout, upload, edit } = require('../controllers/auth')


router.post("/login", login)

router.post("/signup", signup)

router.get("/current-user", currentUser)

router.get("/logout", logout)

router.post("/upload/:id", upload)

router.post("/edit/:id", edit)

module.exports = router;
