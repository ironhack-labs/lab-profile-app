"use strict";

const { Router } = require("express");
const router = Router();

// POST   /auth/login    {username, password}
// POST   /auth/signup   {username, password, campus, course}
// POST   /auth/upload   {file}
// POST   /auth/edit     {username, campus, course}
// GET    /auth/logout
// GET    /auth/loggedin

const routeGuardMiddleware = require("./../middleware/route-guard");

module.exports = router;
