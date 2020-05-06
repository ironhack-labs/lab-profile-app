const passport = require('passport');

const bcrypt = require('bcrypt');
const salt = 20;

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
            password,
            campus,
            course
        } = req.body;

        console.log(req.body)

        if (username === '' || password === '') {
            res.status(400).json({ message: 'No username or password provided' })
            console.log('inside if 400')

            return
        }
        
        let syncSalt = bcrypt.genSaltSync(salt);
        let hash = bcrypt.hashSync(password, syncSalt);
        
        User.create({ ...req.body, password: hash })
            .then(responseFromDB => {
                console.log('inside then')
                res.status(200).json(responseFromDB)
            })
            .catch(error => res.status(500).json(error))
    }
}



