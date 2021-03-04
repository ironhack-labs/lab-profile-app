const User = require('../Models/User.model');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  try {
    const { password: userPass, email, campus, course } = req.body;
    const hasMissingCredentials = !userPass || !email || !campus || !course;
    if (hasMissingCredentials) {
      return res.status(400).json({ message: `missing credentials` });
    }
    const findUser = await User.findOne({ email }, 'email');
    console.log(findUser);
    if (findUser) {
      return res.status(400).json({ message: 'user alredy exists' });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userPass, salt);

    const user = await User.create({
      email,
      password: hashedPassword,
      campus,
      course,
    });

    return res.status(200).json({ user: user.email });
  } catch (e) {
    return res.status(400).json({ message: 'wrong request' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hasMissingCredentials = !password || !email;
    if (hasMissingCredentials) {
      return res.status(400).json({ message: 'missing credentials' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Incorrect email' });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    console.log(checkPassword);
    if (!checkPassword) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    return res.status(200).json({ user: user.email });
  } catch (e) {
    return res.status(400).json({ message: 'wrong request' });
  }
};

exports.update = async (req, res) => {
  try {
    const { email, campus, course } = req.body;
    const hasMissingInfo = !email || !campus || !course;
    if (hasMissingInfo) {
      return res.status(400).json({ message: 'missing info' });
    }
    const updateUser = User.findOneAndUpdate(email, { email, campus, course });
    return res.status(400).json({ message: 'Info updated successfully' });
  } catch (e) {
    return res.status(400).json({ message: 'wrong request' });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.status(400).json({ message: 'Correct Logout' });
};
