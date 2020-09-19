const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, failureDetails) => {
        if (err) {
            console.log(failureDetails)
            res.status(500).json({ message: "User error authentication" })
            return
        }
        if (!user) {
            res.status(401).json(failureDetails)
            return
        }
        req.login(user, err => {
            if (err) {
                res.status(500).json({ message: "Session save error" })
                return
            }
            res.status(200).json(user)
        })
    })(req, res, next)
});


router.post("/signup", (req, res, next) => {
    const username = req.body.username;
    // console.log("Body", req.body)
    const password = req.body.password;
    const { campus, course } = req.body;
    if (username === "" || password === "") {
        res.status(401).json({ message: "Indicate username and password" });
        return;
    }

    User.findOne({ username }, "username", (err, user) => {
        if (user !== null) {
            res.status(401).json({ message: "The username already exists" });
            return;
        }

        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hashPass,
            campus,
            course,
        });

        newUser.save()
            .then(() => {
                res.status(200).json({ message: "Ok" })
            })
            .catch(err => {
                res.status(500).json({ message: "Something went wrong" });
            })
    })
});

router.get("/logout", (req, res) => {
    req.logout();
    res.status(200).json({ message: "Logged out" });
});

router.get("/currentuser", (req, res) => {
    res.status(200).json({ user: req.user })
})

router.put("/photo", async(req, res) => {
    const { photo } = req.body;
    await User.findByIdAndUpdate(req.user.id, { photo })
    res.status(200).json({ message: "ok" })
})


module.exports = router;