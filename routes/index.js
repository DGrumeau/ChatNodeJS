// importation des modules, outils et modèles nécessaires 

import express from 'express'
import mongoose from 'mongoose'

const Room = mongoose.model('Room')

const router = express.Router()

router.get('/', (req, res) => {
  if (req.session.passport != null && req.session.passport.user != null) {
    Room.find().populate('creator').exec((err, rooms) => {
      rooms.forEach(room => {
        const numberOfUsers = room.users.length
        room.numberOfUsers = numberOfUsers
      });

      res.render('room/list', { rooms, user: req.session.passport.user })
    })
  } else {
    res.render('index/index')
  }
})


module.exports = router