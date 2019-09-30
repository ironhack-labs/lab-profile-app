"use strict";

const { Router } = require("express");
const router = Router();

// POST   /auth/login    {username, password}
// POST   /auth/signup   {username, password, campus, course}
// POST   /auth/upload   {file}
// POST   /auth/edit     {username, campus, course}
// GET    /auth/logout
// GET    /auth/loggedin

const authenticationControllers = require("./../controllers/authentication");

const routeGuardMiddleware = require("./../middleware/route-guard");

router.post(
  "/auth/login",
  routeGuardMiddleware(false),
  authenticationControllers.signIn
);
router.post(
  "/auth/signup",
  routeGuardMiddleware(false),
  authenticationControllers.signUp
);
router.post(
  "/auth/logout",
  routeGuardMiddleware(true),
  authenticationControllers.signOut
);
router.get(
  "/auth/loggedin",
  routeGuardMiddleware(true),
  authenticationControllers.verify
);

router.post(
  "/auth/upload",
  routeGuardMiddleware(true),
  authenticationControllers.upload
);

module.exports = router;
