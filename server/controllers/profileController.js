const User = require("../models/User");

exports.signup = (req, res, next ) => {
  const username = req.body.username;
  const password = req.body.password;
  if( username === "" || password === "") {
    res.json({message: 'Indicate username and password'});
    return;
  }

  User.findOne({username}, "username", (err, user) => {
    if(user !== null) {
      res.json({message: "The username already exists"});
      return;
    }

    const newUser = newUser ({
      username,
      password
    });

    newUser
    .save()
    .then(() => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      res.status(500).json({message: "Something went wrong"});
    });
  });
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const profile = await Profile.findById(id)
  res.status(200).json(profile);
}