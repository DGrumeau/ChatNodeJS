// importation des modules, outils et modèles 

import express from 'express'
import mongoose from 'mongoose'

import isAuth from '../tools/isauthentified'
import whichPlatform from '../tools/youtube'

const Message = mongoose.model('Message')
const Channel = mongoose.model('Channel')

const router = express.Router()

router.post('/send', isAuth, (req, res) => {
  const message = new Message({
    content: req.body.content,
    date: new Date(),
    user: req.session.passport.user._id,
  })

  const embedCode = whichPlatform(message.content)
  message.content = embedCode.length > 10 ? embedCode : message.content
  message.save((err, item) => {
    Channel.update(
      { "name": req.body.channel }, 
      { "$push": { "messages":  message._id } },
      function (err, raw) {
        if (err) console.log(err);
        console.log('Reponse de MongoDB ', raw);
      }
    )
    req.app.get('socketio').emit('ajouter_message', message);
    res.redirect('back');
  });
});

router.post('/:id/update', isAuth, (req, res) => {
  Message.findById(req.params.id, (err, message) => {
    if (message.creator.username == req.user.username) {
      message.content = req.body.content;
    }
  })
})

router.get('/:id/supprimer', isAuth, (req, res) => {
    Message.findByIdAndRemove(req.params.id, (err) => {
      if (err) console.log(err)
      req.app.get('socketio').emit('supprimer_message', req.body.id);
      res.redirect('back')
    })
})

module.exports = router;