const passport = require('passport');

const bcrypt = require('bcryptjs');
const salt = 10;

const User = require('../../models/User');

module.exports = {
    //login
    login(req, res, next){
        passport.authenticate('local', (err, theUser, failureDetails) => {
            if (err) {
              res
                .status(500)
                .json({ message: 'Something went wrong authenticating user' });
              return;
            }
          
            if (!theUser) {
              res.status(401).json(failureDetails);
              return;
            }
          
            req.login(theUser, (err) => {
              if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
              }
            
              res.status(200).json(theUser);
            });
        })(req, res, next)
    },
        
    //signup
    signup(req, res, next){
        const {
            username,
            password
        } = req.body;

        if (username === '' || password === '') {
            res.status(400).json({ message: 'No username or password provided' })
            return
        }
        
        if (password.length < 5 ) {
            res.status(400).json({ message: 'Password must have 5 or more characters'})
            return
        }
        
        let syncSalt = bcrypt.genSaltSync(salt);
        let hash = bcrypt.hashSync(password, syncSalt);
        
        User.create({ 
            ...req.body,
            password: hash
        })
            .then(responseFromDB => {
                req.login(responseFromDB, (error) => {
                    if (error) {
                        res.status(500).json({ message: "Login after signup went bad" })
                        return
                    }
                    res.status(200).json(responseFromDB)
                })
            })
            .catch(error => res.status(500).json(error))
    },

    //logout
    logout(req, res, next){
        req.logout()
        res.status(200).json({ message: 'Logout successfully' })
    },

    //loggedin
    loggedin(req, res, next){
        if (req.isAuthenticated()) {
            res.status(200).json(req.user)
            return
        }
        res.status(403).json({ message: 'Unauthorized' })
    },

    //edit
    edit(req, res, next){
        const { username } = req.body;
        if (username === '') {
          res.status(400).json({ message: 'You must put a valid username' })
        }


        let { _id } = req.user;
        User.findOneAndUpdate({_id} === '' || req.body)
        .then( userFound => res.status(200).json({ message: "Update successfully"}))
        .catch(error => res.status(500).json({ message: 'Update failed' }))
   },

    getUsers:(req, res, next) => {
        User.find()
        .then(responseFromDB => res.status(200).json(responseFromDB))
        .catch(error => res.status(500).json(error))
    },

    //update
    upload: (req, res, next) => {
        
        if(!req.file) {
            next(new Error("No file uploaded!"));
            return;
        }

        let { secure_url } = req.file;
        let { id } = req.params;

        User.findByIdAndUpdate( id, { image: secure_url})
            .then( response => res.status(200).json({ secure_url }))
            .catch( error => res.status(501).json({ message: "Somenthing went wrong"}));

        
    }
}




