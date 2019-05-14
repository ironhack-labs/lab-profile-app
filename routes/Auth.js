const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");




router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.("error") });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({message: 'Something went wrong authenticating user'});
      return;
    }
  
    if (!theUser) {
      res.status(401).json(failureDetails); 
      return;
    }

   
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({message: 'Session save went bad.'});
        return;
      }

      
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).json({message: "Indicate username and password"});
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
    .then(() => {
      req.login(newUser, (err) => {
        if (err) {
          res.status(500).json({message: 'Login after signup went bad.'});
          return;
        }
    
        res.status(201).json(newUser);
      });
    })
    .catch(err => {
      res.status(500).json({message: "Something went wrong"});
    })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(204).send();
});

router.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) { 
    res.status(200).json(req.user);
    return;
  }

  res.status(403).json({message: 'Unauthorized'});
});

router.post("/edit", (req, res, next) => {
  
  if (!req.isAuthenticated()) {
    res.status(401).json({message: "You need to be logged in to edit your profile"});
    return;
  }

  
  const cannotUpdateFields = ['_id', 'password'];
  Object.keys(req.body).filter(key => cannotUpdateFields.indexOf(key) === -1).forEach(key => {
    req.user[key] = req.body[key];
  });

  
  req.user.validate(function (error) {
    if (error) {
      
      res.status(400).json({message: error.errors});
      return;
    }

    
    req.user.save(function (err) {
      if (err) {
        res.status(500).json({message: 'Error while saving user into DB.'});
        return;
      }

      res.status(200).json(req.user);
    })
  });
});


  
  if (!req.file) {
    res.status(400).json({message: "No file uploaded!"});
    return;
  }

 
  req.user.validate(function (error) {
    if (error) {
      res.status(400).json({message: error.errors});
      return;
    }

    
      res.status(200).json(req.user);
    })
  });
  
});

module.exports = router;