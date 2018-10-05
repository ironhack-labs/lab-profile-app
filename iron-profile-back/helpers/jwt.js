const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.verifyToken = (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization']
    if(!token) return res.status(401).json({message:"Nohay token"})
    jwt.verify(token, process.env.TOKEN_GENERATOR, (err, decoded)=>{
        if(err) return res.status(401).json({message:"Token caducado"})
        User.findById(decoded.userId)
        .then(user=>{
            req.user = user
            next()
        })
    })
    
}

exports.generateToken = (user) => {
    return jwt.sign({
        userId: user._id,
        email: user.email
    },
    process.env.TOKEN_GENERATOR,
    {expiresIn:"72 hours"} 
    )
}