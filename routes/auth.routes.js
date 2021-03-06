const { Router} = require("express");
const route = Router();
const {login, signup, edit} = require("../controllers/auth.controller");

route.post("/signup",signup).post("/login",login).post("/edit",edit)

module.exports = route;
