const userBanned = (req, res, next) => { 

  // Si l'utilisateur est banni, on le redirige vers l'écran de connexion
  
    if (req.session.passport.user.ban == true)
      res.redirect('/')
      
    return next();
}

module.exports = userBanned