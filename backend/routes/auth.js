const express = require('express');
const passport = require('passport');
const router = express.Router();
// Lib
const { hashPassword } = require('../lib/hashing');
const { isLoggedIn } = require('../lib/isLoggedIn');
// Models
const User = require('../models/User.js')


/* SIGN UP */
router.post('/signup', async (req, res) => {
    const { username, password, campus, course } = req.body;

    if (!username || !password)
        return res.status(422).json({ status: 'Username and Password required' })

    try {
        const user = await User.findOne({ username });

        if (user)
            return res.status(409).json({ status: 'Username already exists. Please try with a different one.' })

        const newUser = await User.create({
            username,
            campus,
            course,
            password: hashPassword(password)
        })
        return res.status(200).json(newUser)

    } catch (error) {
        return res.status(400).json({ status: error })
    }
});

/* LOGIN */
router.post('/login', passport.authenticate('local'), (req, res) => {
    return res.json(req.user);
});

/* LOGOUT */
router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout();
        return res.json({ status: 'You have been succesfully logged out' });
    } else {
        res.status(401).json({ status: 'You are not logged in.' })
    }
})

/* EDIT */
router.post('/edit', isLoggedIn(), async (req, res) => {
    try {
        const { username, campus, course } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.user._id, {
            username,
            campus,
            course
        });
        return res.json(updatedUser);
    } catch (error) {
        return res.status(400).json({ status: error })
    }
})

/* WHO AM I */
router.get('/loggedin', async (req, res) => {
    if (req.user)
        return res.json(req.user)
    else
        return res.status(401).json({ status: 'No user logged in' })
})


module.exports = router;
