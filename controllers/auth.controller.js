const User = require("../model/User.model");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const hasMissingCredentials = !password || !email;
    const hasCorrectPassword = await bcrypt.compare(
      password,
      user.hashedPassword
    );
    const user = await User.findOne({ email });
    if (hasMissingCredentials) {
      return res.status(400).json({ message: "Missing Credentials" });
    }
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    if (!hasCorrectPassword) {
      return res.status(400).json({ message: "Your password is not correct" });
    }
    req.session.currentUser = user._id;
    return res.status(200).json({ user: user.email });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: "Wrong Request" });
  }
};

const signup = async (req, res) => {
  try {
    const { password, username, course, campus } = req.body;
    const hasMissingCredentials = !password || !username || !course || !campus;
    const user = await User.findOne({ username });

    if (hasMissingCredentials) {
      return res.status(400).json({ message: "Missing Credentials" });
    }

    if (user) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({ username, hashedPassword,course,campus });
    req.session.currentUser = newUser._id; //Realmente ns si hace falta, podría hacer que se logeara después
    return res.status(200).json({ user: newUser.username });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: "Wrong Request" });
  }
};

const edit = async (req, res) => {
  try {
    const { username, campus, course } = req.body;
    const user = await User.findByIdAndUpdate(
        req.session.currentUser._id,
        {username,campus,course},
        {new:true}
        );
  } catch (e) {
    console.error(e);
  }
};

module.exports = { login, signup, edit };
