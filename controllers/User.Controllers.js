const bcrypt = require('bcrypt'),
  User = require('../models/User.Model'),
  passport = require('../config/passport');

// exports.indexView = (req, res) => res.send('index');
//
// //parece esta ya no se usará
// exports.signupView = (req, res) => {
//   res.send('user/signup');
// };

exports.signupProcessUser = async (req, res) => {
  const { email, password, name } = req.body;
  console.log('b1234567yuijuhygtfr');
  if (!email || !password) {
    return res.status(403).json({ message: 'Provide email and password' });
  }
  const user = await User.findOne({
    email,
  });
  if (user) {
    // return res.send('user/signup', {errorMessage: 'user already exists' });
    return res.status(401).json({ errorMessage: 'user already exists' });
  }
  const salt = bcrypt.genSaltSync(12);
  const hashPass = bcrypt.hashSync(password, salt);
  await User.create({
    email,
    password: hashPass,
    name,
  })
    .then(() => {
      // res.send('user/login', {infoFlash: 'Welcome, please login', });
      res.status(401).json({ infoFlash: 'Welcome, please login' });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.loginView = (req, res) => {
  // console.log(req.session);
  // res.send('user/login', {    errorMessage: req.flash('error'),  });
  res.status(200).json({ errorMessage: req.flash('error') });
};

exports.loginProcess = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
});

exports.logout = (req, res) => {
  // req.logout(); //NOt working
  req.session.destroy();
  res.redirect('/');
};

exports.profileView = async (req, res) => {
  try {
    const id = req.session.passport.user;
    const user = await User.findById(id);
    res.send('profile', user);
  } catch (e) {
    console.error(e);
    // res.send('index', {      errorMessage: 'Please fill email and password ',    });
    res.status(401).json({ errorMessage: 'Please fill email and password ' });
  } finally {
    console.log('End ProfileView');
  }
};

exports.profilePicture = (req, res) => {
  const id = req.session.passport.user;
  const picture = req.file.path;
  User.findByIdAndUpdate(
    id,
    {
      picture,
    },
    {
      new: true,
    }
  )
    .then(() => {
      // res.send('profile', { infoFlash: 'cool new image' });
      res.status(202).json({ infoFlash: 'cool new image' });
    })
    .catch((e) => {
      console.log(e);
      // res.send('profile', { errorMessage: e });
      res.status(401).json({ errorMessage: e });
    });
};

exports.editProfile = async (req, res) => {
  const { email, password, name } = req.body;
  //obtener userId
  const userId = req.session.passport.user;
  if (!email || !password) {
    return res.send('profile', {
      errorMessage: 'Please fill email and password ',
    });
  }
  const salt = bcrypt.genSaltSync(12);
  const hashPass = bcrypt.hashSync(password, salt);
  const user = await User.findByIdAndUpdate(
    userId,
    {
      email,
      password: hashPass,
      name,
    },
    {
      new: true,
    }
  );
  res.status(202).json(user);
  // res.send('profile', user);
};

exports.deleteProfile = async (req, res) => {
  const userId = req.session.passport.user;
  const user = await User.findById(userId);
  let userDeleted = await User.deleteOne({
    _id: userId,
  });
  // res.redirect('/');
  res.status(200).json({ messaje: 'Profile deleted' });
};
