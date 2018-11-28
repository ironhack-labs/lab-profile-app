const express   = require(`express`),
      authSites = express.Router(),
      bcrypt    = require(`bcrypt`),
      jwt       = require(`jsonwebtoken`),
      multer    = require(`../helpers/multer`),
      User      = require(`../models/User`);

authSites.post(`/login`, async (req,res) => {
  const user = await User.findOne({username: req.body.username});

  if (!user) return res.status(404).json({errorMessage: `Invalid username`});

  const validPassword = bcrypt.compareSync(req.body.password, user.password);

  if (!validPassword) return res.status(500).json({errorMessage: `Invalid password`});

  const token = jwt.sign(
    { id: user._id },
    process.env.SECRET,
    // { expiresIn: 60 } // Time of session, default: never expire
  );

  delete user._doc.password;

  res.status(200).json({user, token});
});

authSites.post(`/signup`, (req,res) => {
  const salt           = bcrypt.genSaltSync(256),
        hashedPassword = bcrypt.hashSync(req.body.password, salt),
        password       = hashedPassword,
        {username, campus, course, image} = req.body;

  User.create({username, campus, course, image, password})
      .then( user => (
        res.status(201)
           .json(user)
      ))
      .catch(err => (
        res.status(500)
           .json({err, errorMessage: `User wasn't created. Something went wrong`})
      ));
});

authSites.patch(`/upload/:id`, multer.single(`image`), (req,res) => {
  let user = {};

  if (req.file) user.image = req.file.url;

  User.findByIdAndUpdate(req.params.id, {$set: user}, {new: true})
      .then( user => (
        res.status(200)
           .json(user)
      ))
      .catch(err => (
        res.status(500)
           .json({err, errorMessage: `Image wasn't uploaded. Something went wrong`})
      ));
});

authSites.patch(`/edit/:id`, (req,res) => {
  let user = {};

  Object.keys(req.body).forEach( key => user[key] = req.body[key] );

  User.findByIdAndUpdate(req.params.id, {$set: user}, {new: true})
      .then( user => (
        res.status(200)
           .json(user)
      ))
      .catch(err => (
        res.status(500)
           .json({err, errorMessage: `User wasn't updated. Something went wrong`})
      ));
});

authSites.get(`/loggedin`, (req,res) => {
  const token = req.headers[`x-access-token`];

  if (!token) return res.status(403).json({errorMessage: `There's no token`});

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) return res.status(403).json({errorMessage: `No valid token`});
    req.user = await User.findById(decoded.id)
                         .then( () => (
                            res.status(200)
                               .send(`User is logged in!`)
                         ))
                         .catch( err => (
                            res.status(500)
                               .json({err, errorMessage: `Something went wrong`})
                         ));
  })
});

module.exports = authSites;