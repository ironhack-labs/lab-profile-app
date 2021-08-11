const express = require('express');
const bcrypt = require('bcrypt');
const { catchError } = require('../utils');
const uploader = require('../helpers/multer');
const passport = require('../helpers/passport');
const router = express.Router();

router.post('/login', (req, res, next) => {

    passport.authenticate("local", (error, user, errDetails) => {

        //Validar cualquier error
        if(error) res.status(500).json({error})

        //Validar que no llegue vacío
        if(!user) res.status(500).json({errDetails})

        req.login(user, (err) => {
            if(err) {
                return res.status(500).json({error: err})
            }
            res.status(200).json({result: user})
        })
    }) (req, res, next)
});

router.post('/signup', catchError, async (req, res) => {
    const {username, password, campus, course, ...restUser} = req.body
    try{
        if(!username || password) res.status(400).json({msg: "Username or password empty"})

        const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(12))

        const newUser = await User.create({
            username,
            password: hashPass,
            ...restUser
        })

        res.status(201).json({result: newUser})

    }catch(error){
        res.status(400).json({error})
    }
});

router.post('/upload', uploader.single("image"), (req, res, next) => {
    console.log("Que me regresa :", req.file)
    let image
    if(req.file) avatar = req.file.path

    User.create({...req.body, image})
    .then(user => res.status(200).json({result: user}))
    .catch(error => res.status(402).json({error}))
});

router.post('/edit',(req, res, next) => {});

router.post('/logout', (req, res) => {
    req.logout()
    res.status(200).json({msg: "Logged out successfully"})
});

router.get('/logged-in', (req, res) => {
    res.status(200).json({result: req.user || {}})
});

module.exports = router;