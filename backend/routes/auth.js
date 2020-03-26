const express = require("express");
const UserModel = require("../models/User.model");
const passport = require("passport");
const _ = require("lodash");
/* const upload = require("../config/cloudinary"); */
const router = express.Router();

// 1)
//Login Route
//*Method: Post* *Endpoint: /auth/login*	*Parameters: username,password* *Return value: User logged*
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Return the logged in user
  return res
    .status(200)
    .json(_.pick(req.user, ["username", "_id", "createdAt", "updatedAt"]));
});

//2)
// Register User
//*Method: Post* *Endpoint: /auth/signup*	*Parameters: username,password,campus,course* *Return value: User created*
router.post("/signup", async (req, res, next) => {
  const { username, password, campus, course, image } = req.body;
  // Create the user
  const newUser = await UserModel.create({
    username,
    password,
    campus,
    course,
    image
  });
  res.status(200).json({ msg: "User Created" });

  // Directly login user
  req.logIn(newUser, err => {
    res.json(_.pick(req.user, ["username", "_id", "createdAt", "updatedAt"]));
  });
});

/* //3)
// upload photo
//*Method: Post* *Endpoint: /auth/upload	*	*Parameters: file* *Return value: User updated*
router.post("/auth/upload", upload.single("image"), async (req, res, next) => {
  const { id } = req.user;
  const { secure_url: image } = req.file;
  const user = await User.findByIdAndUpdate(id, { image }, { new: true });
  res.status(200).json({ msg: "user updated", user });
}); */

//5)
// edit
//*Method: Post* *Endpoint: /auth/edit	*	*Parameters: username, campus, course* *Return value: User updated*

router.post("/edit", async (req, res, next) => {
  const { username, campus, course, image } = req.body;
  const editUser = { username, course, campus, image };
  const { id } = req.user;
  await UserModel.findByIdAndUpdate(id, editUser, { new: true });
  res.status(200).json({ msg: "User updated" });
});

//6)
// Logout
router.get("/logout", (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

// WHOAMI
router.get("/whoami", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
