exports.isLogged=(req, res, next)=>{
    if(!req.isAuthenticated())
        return res.status(401).json({
            message: 'You are NOT logged in'
        })
        next()
}