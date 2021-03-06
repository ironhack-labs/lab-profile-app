const { Router } = require("express");
const route = Router();
const { login, signup } = require("../controller/auth.controller");

route.post("/signup", signup).post("/login", login);

module.exports = route;