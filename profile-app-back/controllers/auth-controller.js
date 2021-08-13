const bcrypt = require("bcrypt");

const User = require("../models/User.model")
const passport = require("../helpers/passport"); // <--- importamos passport

//con esto , liberamos el archivo de auth.js


exports.loginProcess = (req,res,next)=>{
    //abajo usamos google 
passport.authenticate("local", (error,user,errDetails)=>{
if(error){
return res.status(500).json({error})
}
if(!user){
return res.status(500).json({ error: errDetails })

}

req.login(user, (err)=>{
if(err){
return res.status(500).json({ error: err })
}
res.status(200).json({result:user})
})
})(req,res,next)
};

exports.logoutProcess = (req,res)=>{
    req.logout()
    res.status(200).json({msg:"Logged out"})
};

exports.getCurrentUser = (req,res)=>{
    res.status(200).json({result: req.user || {} })
};

exports.googleInit =  passport.authenticate("google",{//usamos passport para comprobar en vez del req,res
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ]
});

exports.googleCallback = (req,res,next)=> {

    passport.authenticate(  "google", {
        scope:[ "profile" , "email" ]
        //traemos nuestro callback
    }, (error,user)=>{
            if(error){
                return res.status(400).json({error})
            }

            req.login(user, err=>{
                if(err){
                    return res.status(400).json({error:err})
                }
                //res.status(200).json({result: user })
                res.redirect("http://localhost:3000/api/profile")
            })
        }
    )(req,res,next)
}
