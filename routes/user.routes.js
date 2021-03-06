const { Router } = require("express");
const route = Router();
const {
    getUsers,
    getUser,
    updateUser,
    createUser,
} = require("../controller/user.controller");

route
  .get("/", getUsers)
  .get("/:userId", getUser)
  .post("/", createUser)
  .patch("/:userId", updateUser)
  

module.exports = route;