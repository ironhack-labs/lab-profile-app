const express = require("express");
const router = express.Router();
const auth = require("./auth/auth.router");

router.use("/auth", auth);

router.get("/", (req, res) => {
  res.json({ status: "Welcome!" });
});

module.exports = router;
