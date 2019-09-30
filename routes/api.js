"use strict";

const { Router } = require("express");
const router = Router();
const authControllers = require("./../controllers/authentication");

router.post("/auth/signup", authControllers.signUp);
router.post("/auth/login", authControllers.login);

module.exports = router;
