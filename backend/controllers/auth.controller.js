const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('../helpers/passport');

//MailerSend configuration
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");
const mailersend = new MailerSend({
  api_key: process.env.API_KEY
});

exports.signupProcess = async (req, res) => {
    const {email, username, password, ...restUser} = req.body
    if(!email || !password){
        return res.status(400).json({msg: "Username or password empty"})
    }

    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let confirmationCode = '';
    for (let i = 0; i < 25; i++) {
        confirmationCode += characters[Math.floor(Math.random() * characters.length )];
    }
    const recipients = [
      new Recipient(email)
    ];

    const variables = [
    {
        email: email,
        substitutions:
        [
            {var: "email", value: email},
            {var: "confirmationCode", value: confirmationCode}
        ]}
    ];

    const emailParams = new EmailParams()
    .setFrom("welcome@cesarcarreras.com")
    .setFromName("IronHack Lab")
    .setRecipients(recipients)
    .setSubject("Please verify your email address! 🐶")
    .setVariables(variables)
    .setTemplateId('v69oxl5d8z4785kw')


    try{
        const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(12))
        const newUser = await User.create({
            username,
            email,
            password: hashPass,
            confirmationCode,
            ...restUser
        })

        await mailersend.send(emailParams);

        res.status(201).json({result: newUser})
    }catch(error){

        res.status(400).json({error})

    }
};

exports.loginProcess = (req, res, next) => {

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
};

exports.uploadProcess = (req, res, next) => {
    console.log(req.body)
    let {id, image} = req.body
    console.log(id, image)
    if(req.file) image = req.file.path
    console.log(image)

        User.findOneAndUpdate({id}, {$set:{image}}, {new: true})
        .then(result => res.status(200).json({result,  msg: "Congrats, the image is now updated"}))
        .catch(error => res.status(400).json({error}))

        console.log(id, image)
  };

exports.editProcess = async (req, res, next) => {
    let {id, ...restUser} = req.body
    console.log(  {id, ...restUser } = req.body)
    try{
        return await User.findByIdAndUpdate({id}, {...restUser}, {new: true})
    }catch(error){
        res.status(400).json({error})
    }
    console.log(  {id, ...restUser } = req.body)
};

exports.logoutProcess = (req, res) => {
    req.logout()
    res.status(200).json({msg: "Logged out successfully"})
};

exports.loggedInProcess =  (req, res) => {
    res.status(200).json({result: req.user || {}})
};


exports.confirmationCode = async (req, res) => {
    try{
        const {confirmationCode} = req.params
        const user = await User.findOneAndUpdate({confirmationCode}, {status: "Active"}, {new: true})
        console.log("user :", user)
        res.redirect('http://localhost:3000/confirmation-page');
        res.status(200).json({result : user, msg: "Congrats, the user is now active"})
    }catch(error){
        res.status(400).json({error})
    }

};

exports.googleInit = passport.authenticate('google', {
    scope : [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
        ]
});

exports.googleCallback = (req, res , next) => {

    passport.authenticate('google', { scope : ["profile", "email"]},
    (error, user) => {
        if(error){
            return res.status(400).json({error})
        }

        req.login(user, err => {
            if(err){
                return res.status(400).json({error : err})
            }
            // res.status(200).json({result : user})
            res.redirect('http://localhost:3000/profile')
        })
    })(req, res, next)
};
