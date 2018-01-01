// importation des modules, outils et modèles

import express from 'express'
import mongoose from 'mongoose'

// définition des constantes

const Channel = mongoose.model('Channel')
const router = express.Router()

router.get('/', (req, res) => {
  
  if (req.session.passport != null && req.session.passport.user != null) {
    Channel.find().populate('creator').exec((err, channels) => {
      channels.forEach(channel => {
        const nbUsers = channel.users.length
        channel.nbUsers = nbUsers
      });

      res.render('channel/list', { channels, user: req.session.passport.user })
    })
  } else {
    res.render('index/index')
  }
})

module.exports = router