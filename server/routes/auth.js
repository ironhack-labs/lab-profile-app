const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10
const multer = require('multer');
const upload = multer({dest:'public/uploads'});

router.post('/signup', async (req, res) => {
  const { username, password ,campus,course} = req.body

  if(!username || !password){
    res.status(400).json({ message: "Please provide both credentials"})
    return
  }

  if(!campus || !course){
    res.status(400).json({ message: "Please provide both credentials"})
    return
  }

 
  try {
  const userFound = await User.findOne( { username,campus,course})
  if(userFound){
     res.status(400).json({ message: "This username already exists" })
     return
  } 

  // encrypt the password
  const salt = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password, salt)
  
  const user = await User.create({ username: username, password: hashPass,campus:campus,course:course})
  
  req.session.user = user  
  res.status(200).json(user)
  return
  }
  catch(err){
    console.log(err)
    res.status(500).json({ message: "Something went wrong"})
  }
})


router.post('/login', async (req,res) => {
    const {username,password} = req.body

    console.log(req.body)
    if(!username || !password){
        res.status(400).json({message: 'Please provide both creditials'})
        return
    }
    try {
        const user = await User.findOne({username})
        if(user){
            const passwordCorrect = await bcrypt.compare(password, user.password)
            if(passwordCorrect){
                req.session.user = user
                res.status(200).json(user)
            }
        } else {
            res.status(400).json({message:'Plesae provide the right creditials'})
        }
    } catch(err){
        console.log(err)
        res.status(500).json({message:'Something went wrong'})
    }
})


router.put('/edit',(req,res,next)=> {
    const {username,campus,course} = req.body;
    User.findOneAndUpdate(req.params.id,{username,campus,course})
    .then(user=>{
        res.json({message:`${user.username} was updated succesfully`})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/logout',(req,res)=> {
    req.session.destroy()
    res.status(200).json({message:'User is logged out'})
})

router.get('/loggedin',(req,res)=> {
    if(req.session.user){
        res.status(200).json(req.session.user)
    } else {
        res.status(400).json({message:'No user in session'})
    }
})


router.post('/upload',upload.single('uploads'),(req,res)=> {
    if(!req.session.user) {
        return res.status(401).json({message:'user not logged'});
    }

    const {username} = req.session.user;

    User.updateOne({username:username},{imageUrl:req.file.filename})
    .then((response) => {
       res.status(200).json(response);
    })
    .catch((err)=>{
        res.status(500).json({message:'Something went wrong with uploading your avatar'})
    })
})

module.exports = router