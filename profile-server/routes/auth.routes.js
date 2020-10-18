const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const uploader = require('../configs/cloudinary');

// require the user model
const User = require('../models/User.model');


router.post('/signup', (req, res, next) => {
    const { username, password, campus, course } = req.body;

    if (!username || !password || !campus || !course) {
        res.status(400).json({ message: 'Please fill out all fields' });
        return;
    }

    if (password.length < 7) {
        res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
        return;
    }

    // Check to see if username already exists
    User.findOne({ username }, (err, existingUser) => {

        if (err) {
            res.status(500).json({ message: "Username check failed." });
            return;
        }

        if (existingUser) {
            res.status(400).json({ message: 'Username already exists. Please choose a different one.' });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const aNewUser = new User({
            username: username,
            password: hashPass,
            campus: campus,
            course: course
        });

        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database failed.' });
                return;
            }

            // Automatically log in user after sign up
            // .login() here is a predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup failed.' });
                    return;
                }
                req.user.passport = '';
                // Send the user's information to the frontend
                // We can also do: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});

router.put('/edit', (req, res, next) => {
    const { username, campus, course } = req.body;

    userObj = { username, campus, course }
    User.findByIdAndUpdate(req.user._id, { new: true })
        .then((updatedUser) => {
            res.json({
                message: `User with ${req.user._id} is updated successfully.`,
                updatedUser: updatedUser
            });
        })
        .catch(err => {
            res.json(err);
        });
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'User authentication failed' });
            return;
        }

        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails);
            return;
        }
        req.session.user = theUser;
        console.log(theUser)
        // save user in session

        // We are now logged in (that's why we can also send req.user)
        res.status(200).json(theUser);
    })(req, res, next);
});

router.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

router.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Logged out successfully!' });
});

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
    console.log('file is: ', req.file)

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }
    // get secure_url from the file object and save it in the 
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    res.json({ secure_url: req.file.secure_url })
})

module.exports = router;