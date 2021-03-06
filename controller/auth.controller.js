const User = require("../model/user.model");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { password, username } = req.body;
    const hasMissingCredentials = !password || !username;
    if (hasMissingCredentials) {
      return res.status(400).json({ message: "missing credentials" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "user alredy exists" });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({ username, hashedPassword });
    console.log("user2", user2)
    return res.status(200).json({ user: user.username });
  } catch (e) {
    return res.status(400).json({ message: "wrong request" });
  }
};

exports.login = async (req, res) => {
  try {
    const { password, username } = req.body;
    const hasMissingCredentials = !password || !username;
    if (hasMissingCredentials) {
      return res.status(400).json({ message: "missing credentials" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }
    const hasCorrectPassword = await bcrypt.compare(
      password,
      user.hashedPassword
    );
    if (!hasCorrectPassword) {
      return res.status(401).json({ message: "unauthorize" });
    }
    return res.status(200).json({ user: user.username });
  } catch (e) {
    return res.status(400).json({ message: "wrong request" });
  }
};
