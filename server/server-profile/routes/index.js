const express = require('express');
const router = express.Router();
const User = require("../models/User.js")
// const passport = require('passport');
const bcrypt = require('bcryptjs');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/api/auth/login', (req, res, next) => {
  User.find()
    .then(user => {
      res.json(user)
    })
    .catsh(err => {
      res.json(err)
    })
  res.render('login')
})

// router.post('/api/signup', (req, res, next) => {

//   const username = req.body.username;
//   const password = req.body.password;
//   const campus = req.body.campus;
//   const course = req.body.course;
//   const image = req.body.image;

//   if (!username || !password) {
//     res.status(400).json({ message: 'Provide username and password' });
//     return;
//   }
//   const salt = bcrypt.genSaltSync(10);
//   const hashPass = bcrypt.hashSync(password, salt);

//   const aNewUser = new User({
//     username: username,
//     password: hashPass,
//     campus: campus,
//     course: course,
//     image: image
//   });

//   aNewUser.save(err => {
//     if (err) {
//       res.status(400).json({ message: 'Saving user to database went wrong.' });
//       return;
//     }
//   })
//   // User.create({
//   //     username: req.body.username,
//   //     password: req.body.password,//I know it has to be uncrypted
//   //     campus: req.body.campus, 
//   //     course: req.body.course,
//   //     image: req.body.image
//   //   })
//   //     .then(response=>{
//   //       res.json(response)
//   //     })
//   //     .then(err=>{
//   //       res.json(err)
//   //     })
//   // res.render('signup')
  
// })

router.post('/api/auth/upload', (req, res, next) => {
  res.render('uploadfile')
})

router.put('/api/auth/edit/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
  // res.render('edit')
})

router.get('/api/auth/logout', (req, res, next) => {
  res.render('logout')
})

router.get('/auth/loggedin', (req, res, next) => {
  res.render('loggedin')
})

module.exports = router;
