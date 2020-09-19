const User = require('../models/User.model');
const passport = require("../configs/passport")
const bcrypt = require("bcrypt")
const bcryptSalt = 10

exports.postLogin = async (req, res,next) => {

    passport.authenticate("local", (err, user, failureDetails) => {
        if (err) {
            console.log(failureDetails)
            res
            .status(500)
            .json({ message: "Something went wrong authenticating user" })
            return
        }

        if (!user) {
            res.status(401).json(failureDetails)
            return
        }

        req.login(user, err => {
            if (err) {
            res.status(500).json({ message: "Session save went bad." })
            return
            }
            res.status(200).json(user)
        })
    })
    (req, res, next)
}

exports.postSignup = async (req, res, next) => {

    const {username = "", password= "", campus= "", course= ""} = req.body;
    console.log(req.body)

    if (username === "" || password === "" || campus === "" || course === "") {
      res.status(401).json({ message: "Indicate email, password, campus, course" })
      return
    }
  
    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        res.status(401).json({ message: "The username already exists" })
        return
      }
  

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = new User({
        username,
        password: hashPass,
        campus,
        course
    })

    newUser
        .save()
        .then(() => {
            res.status(200).json({ message: "ok" })
        })
        .catch(err => {
            res.status(500).json({ message: "Something went wrong" })
        })
    })
  }

exports.postEditUser = async (req,res,next) => {
    const {id: userId} = req.user;
    const {username, campus, course} = req.body;
    
    const user = await User.findByIdAndUpdate(
        userId,
        { campus, course },
        { new: true }
    )
    res.status(202).json({message:"Ok"})
}

exports.postUploadImage = async (req,res,next) => {
    //Pendiente como Subir Imagen
    console.log(req.body)
    const {image} = req.body;
    const {id: userId} = req.user;    
    const user = await User.findByIdAndUpdate(
        userId,
        { image },
        { new: true }
    )
    res.status(200).json({ message: "Ok Image" })
}

exports.postLogOut = (req, res) => {
    req.logout()
    res.status(200).json({ message: "loggedout" })
  }

exports.getLoggedUser = (req, res) => {
    res.status(200).json({ user: req.user })
}

exports.getInitialIndex = (req, res, next) => {
    res.status(200).json("hola desde controlador")

}
