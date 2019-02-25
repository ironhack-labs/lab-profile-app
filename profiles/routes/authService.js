const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.get('/loggedin', (req, res, next) => {
	// req.isAuthenticated() is defined by passport
	if (req.isAuthenticated()) {
		res.status(200).json(req.user);
		return;
	}
	res.status(403).json({ message: 'Unauthorized' });
});

//
// login that makes a POST request to the auth/login route passing username and password????

// upload that makes a POST request to the auth/upload route passing the file PARA MAÑANA
// edit that makes a POST request to the auth/edit route passing username, campus and course,

// logout that makes a GET request to the auth/logout route to destroy user session,

// loggedin that makes a GET request to the auth/loggedin route to check if a user is logged in.

router.get('/currentuser', (req, res, next) => {
	if (req.user) {
		res.status(200).json(req.user);
	} else {
		next(new Error('Not logged in'));
	}
});

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, theUser, failureDetails) => {
		if (err) {
			res.status(500).json({ message: 'Something went wrong authenticating user' });
			return;
		}

		if (!theUser) {
			// "failureDetails" contains the error messages
			// from our logic in "LocalStrategy" { message: '...' }.
			res.status(401).json(failureDetails);
			return;
		}

		// save user in session
		req.login(theUser, (err) => {
			if (err) {
				res.status(500).json({ message: 'Session save went bad.' });
				return;
			}

			// We are now logged in (that's why we can also send req.user)
			res.status(200).json(theUser);
		});
	})(req, res, next);
});

// router.get('/signup', (req, res, next) => {
// 	res.render('auth/signup');
// });

router.post('/signup', (req, res, next) => {
	const { username, password, campus, course } = req.body;

	if (username === '' || password === '') {
		res.status(400).json({ message: 'Provide username and password' });
		return;
	}

	User.findOne({ username }, 'username', (err, foundUser) => {
		if (err) {
			res.status(500).json({ message: 'Username check went bad.' });
			return;
		}

		if (foundUser) {
			res.status(400).json({ message: 'Username taken. Choose another one.' });
			return;
		}

		const salt = bcrypt.genSaltSync(bcryptSalt);
		const hashPass = bcrypt.hashSync(password, salt);

		const newUser = new User({
			username: username,
			password: hashPass,
			campus: campus,
			course: course
		});

		newUser.save((err) => {
			if (err) {
				res.status(400).json({ message: 'Saving user to database went wrong.' });
				return;
			}

			// Automatically log in user after sign up
			// .login() here is actually predefined passport method
			req.login(newUser, (err) => {
				if (err) {
					res.status(500).json({ message: 'Login after signup went bad.' });
					return;
				}

				// Send the user's information to the frontend
				// We can use also: res.status(200).json(req.user);
				res.status(200).json(newUser);
			});
		});
	});
});

router.get('/logout', (req, res, next) => {
	// req.logout() is defined by passport
	req.logout();
	res.status(200).json({ message: 'Log out success!' });
});

module.exports = router;
