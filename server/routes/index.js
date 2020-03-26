const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("Everything ok!!!");
});

const passportRouter = require("./passportRouter");
router.use("/auth", passportRouter);

module.exports = router;
