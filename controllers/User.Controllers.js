const bcrypt = require('bcrypt'),
  User = require('../models/User.Model'),
  passport = require('../config/passport'),
  {
    emailRegistro
  } = require('../config/nodemailer')

exports.indexView = (req, res) => res.render('index')

exports.signupView = (req, res) => {
  res.render('user/signup')
}

exports.signupProcessUser = async (req, res) => {
  const {
    email,
    password,
    name
  } = req.body
  if (!email || !password) {
    return res.render('user/signup', {
      errorMessage: 'Please fill email and password '
    })
  }
  const user = await User.findOne({
    email
  })
  if (user) {
    return res.render('user/signup', {
      errorMessage: 'user already exists'
    })
  }
  const salt = bcrypt.genSaltSync(12)
  const hashPass = bcrypt.hashSync(password, salt)
  await User.create({
      email,
      password: hashPass,
      name
    })
    //esto es de nodemailer
    .then(() => {
      emailRegistro(email, name)
      res.render('user/login', {
        infoFlash: "Welcome, please login"
      })
    }).catch(err => {
      console.log(err);
    })
}

exports.loginView = (req, res) => {
  // console.log(req.session);
  res.render("user/login", {
    "errorMessage": req.flash("error")
  });
}

exports.loginProcess = passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
})

exports.logout = (req, res) => {
  // req.logout(); //NOt working
  req.session.destroy();
  res.redirect('/');
}

exports.profileView = async (req, res) => {
  try {
    const id = req.session.passport.user
    const user = await User.findById(id)
    res.render('profile', user)
  } catch (e) {
    console.error(e);
    res.render('index', {
      errorMessage: 'Please fill email and password '
    });
  } finally {
    console.log('End ProfileView');
  }

}

exports.profilePicture = (req, res) => {
  const id = req.session.passport.user
  const picture = req.file.path
  User.findByIdAndUpdate(id, {
      picture
    }, {
      new: true
    })
    .then(() => {
      res.render('profile',{infoFlash:"cool new image"})
    })
    .catch((e) => {
        console.log(e);
        res.render('profile',{errorMessage:e})
      }
    );
}

exports.editProfile = async (req, res) => {
  const {
    email,
    password,
    name
  } = req.body
  //obtener userId
  const userId = req.session.passport.user
  if (!email || !password) {
    return res.render('profile', {
      errorMessage: 'Please fill email and password '
    })
  }
  const salt = bcrypt.genSaltSync(12)
  const hashPass = bcrypt.hashSync(password, salt)
  const user = await User.findByIdAndUpdate(userId, {
    email,
    password: hashPass,
    name
  }, {
    new: true
  })
  //esto es de nodemailer
  // await emailRegistro(email, name)
  res.render('profile', user)
}

exports.deleteProfile = async (req, res) => {
  const userId = req.session.passport.user
  const user = await User.findById(userId)
  let userDeleted = await User.deleteOne({
    _id: userId
  });
  res.redirect('/')
}
