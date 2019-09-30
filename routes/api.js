"use strict";

const { Router } = require("express");
const router = Router();

// GET    /
// POST   /post/create
// GET    /post/:id
// PATCH  /post/:id
// DELETE /post/:id

// POST   /autentication/sign-up
// POST   /autentication/sign-in
// GET    /autentication/verify

const postControllers = require("./../controllers/post");
const authenticationControllers = require("./../controllers/authentication");

const routeGuardMiddleware = require("./../middleware/route-guard");

router.get("/", postControllers.list);
router.post("/post/create", routeGuardMiddleware(true), postControllers.create);
router.get("/post/:id", postControllers.load);
router.patch("/post/:id", routeGuardMiddleware(true), postControllers.edit);
router.delete("/post/:id", routeGuardMiddleware(true), postControllers.remove);

router.post(
  "/authentication/sign-up",
  routeGuardMiddleware(false),
  authenticationControllers.signUp
);
router.post(
  "/authentication/sign-in",
  routeGuardMiddleware(false),
  authenticationControllers.signIn
);
router.post(
  "/authentication/sign-out",
  routeGuardMiddleware(true),
  authenticationControllers.signOut
);
router.get("/authentication/verify", authenticationControllers.verify);

module.exports = router;
