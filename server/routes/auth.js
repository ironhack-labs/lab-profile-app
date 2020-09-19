const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, failureDetails) => {
        if (err) {
            res.status(500).json({
                message: "Failure authenticating"
            })
            return;
        }
        if (!user) {
            res.status(401).json(failureDetails)
            return
        }
        req.login(user, err => {
            if (err) {
                res.status(500).json({
                    message: "Something went wrong with the session creation"
                })
                return
            }
            res.status(200).json(user)
        })
    })(req, res, next)
});


router.post("/signup", (req, res, next) => {
    const {
        username,
        password,
        campus,
        course
    } = req.body;
    if (username === "" || password === "") {
        res.status(401).json({
            message: "Indicate username and password"
        });
        return;
    }

    User.findOne({
        username
    }, "username", (err, user) => {
        if (user !== null) {
            res.status(401).json({
                message: "The username already exists"
            });
            return;
        }

        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hashPass,
            campus,
            course
        });

        newUser.save()
            .then(() => {
                res.status(200).json({
                    message: 'ok'
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: "Something went wrong"
                });
            })
    });
});

router.get("/logout", (req, res) => {
    req.logout();
    res.status(200).json({
        message: 'logout successful'
    })
});

router.get('/loggedin', (req, res) => {
    res.status(200).json(req.user)
})

/* PUT edit profile */
router.put('/edit', async(req, res) => {
    const newProfile = req.body
    const user = await User.findByIdAndUpdate(req.user._id, newProfile, {
        new: true
    }).catch(err => {
        res.status(500).json({
            message: "Something went wrong"
        });
    })
    res.status(200).json(user)
})

router.put('/upload', async(req, res) => {
    const {
        image
    } = req.body
    const user = await User.findByIdAndUpdate(req.user.id, {
        image
    }, {
        new: true
    })
    res.status(200).json(user)
})

module.exports = router;