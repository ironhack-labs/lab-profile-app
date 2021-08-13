const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.model")
const { googleCallback,
        googleInit,
        loginProcess,
        getCurrentUser,
        logoutProcess
} = require('../controllers/auth-controller')
const uploader = require('../helpers/cloudinary');

router.post("/signup",  uploader.single("avatar"), (req, res) => {
  
    let avatar
  if(req.file){
     avatar = req.file.path
  }
    
    const { password,username, ...restUser } = req.body;
   
    console.log("probando probando",req.body)
    bcrypt.hash(password, 10).then((hashedPassword) => {
      const user = { ...restUser, password: hashedPassword,avatar };
      User.create(user)
        .then(() => {
          res.status(201).json({ msg: "Usuario creado con éxto" });
        })
        .catch((err) => res.status(400).json(err));
    });
  });


router.post("/login",loginProcess);

router.get("/logout",logoutProcess);


router.get("/current-user",getCurrentUser)


router.get("/google",googleInit)
router.get("/google/callback",googleCallback)

module.exports = router;