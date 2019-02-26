const express = require("express");
const authRoutes = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("../../models/User");

authRoutes.post('/signup', (req, res, next) => {
    console.log("----"+req.body )
    const username = req.body.username;
    const password = req.body.password;
    const campus = req.body.campus;
    const course = req.body.course;
  
    if (!username || !password) {
      res.status(400).json({ message: 'Provide username and password' });
      return;
    }
  
    if(password.length < 4){
        res.status(400).json({ message: 'Please make your password at least 3 characters long for security purposes.' });
        return;
    }
  
    User.findOne({ username }, (err, foundUser) => {
  
        if(err){
            res.status(500).json({message: "Username check went bad."});
            return;
        }
  
        if (foundUser) {
            res.status(400).json({ message: 'Username taken. Choose another one.' });
            return;
        }
  
        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
  
        const aNewUser = new User({
            username: username,
            password: hashPass,
            campus: campus,
            course: course
        });
  
        aNewUser.save(err => {
            console.log("save"+err)
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }
            
            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            console.log("antes login"+err)
            req.login(aNewUser, (err) => {
                console.log("despues login"+err)
                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }
            
                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
  });


authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        console.log(theUser)
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }
    
        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }
            res.status(200).json(theUser);
        });
    })(req, res, next);
});

authRoutes.post('/edit', (req, res, next) => {
    const username = req.body.username;
    const campus = req.body.campus;
    const course = req.body.course;

    User.findOneAndUpdate({username}, {$set:{username,campus,course}} )
        .then (console.log(data))
});

authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});

authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;
