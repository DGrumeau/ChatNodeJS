const userIsLoggedIn = (req, res, next) => {  

  // Si l'utilisateur n'est pas identifié, on le redirige vers l'écran de connexion

    if (req.isAuthenticated())
      return next();
    
    res.redirect('/auth/login')
}

module.exports = userIsLoggedIn