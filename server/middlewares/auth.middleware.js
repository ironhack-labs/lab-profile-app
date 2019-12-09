exports.isNotLoggedIn = (req,res, next) => {
  !req.isAuthenticated() ? res.redirect('/login') : next();
};



exports.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
    req.app.locals.logged =  true;
  } else {
    req.app.locals.logged = false;
    res.redirect('/login')
  }
  return next();
}


exports.isConnected = (req, res, next) => {
  if(req.isAuthenticated()){
    res.redirect('/profile');
  }
  else{
    return next();
  }
}