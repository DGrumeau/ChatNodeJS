// importation des modules, outils et modèles nécessaires 

import express from 'express'
import mongoose from 'mongoose'

const Channel = mongoose.model('Channel')

const router = express.Router()

router.get('/', (req, res) => {
  if (req.session.passport != null && req.session.passport.user != null) {
    Channel.find().populate('creator').exec((err, channels) => {
      channels.forEach(channel => {
        const numberOfUsers = channel.users.length
        channel.numberOfUsers = numberOfUsers
      });

      res.render('channel/list', { channels, user: req.session.passport.user })
    })
  } else {
    res.render('index/index')
  }
})


module.exports = router