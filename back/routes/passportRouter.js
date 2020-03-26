const express = require("express");
const router = express.Router();

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  res.json(`User logged ${username} ${password}`);
});

router.post("/signup", (req, res, next) => {
  const { username, password, campus, course } = req.body;
  res.json(`User created ${username} ${password} ${campus} ${course}`);
});

router.post("/upload", (req, res, next) => {
  const { file } = req.body;
  res.json(`User updated ${file}`);
});

router.post("/edit", (req, res, next) => {
  const { username, campus, course } = req.body;
  res.json(`User updated ${username} ${campus} ${course}`);
});

router.post("/logout", (req, res, next) => {
  res.json(`Logged out`);
});

router.get("/loggedin", (req, res, next) => {
  res.json(`User logged`);
});

module.exports = router;
