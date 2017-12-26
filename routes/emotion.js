// importation des modules

import express from 'express'
import mongoose from 'mongoose'

import isAuth from '../tools/isauthentified'

const Message = mongoose.model('Message')
const Emotion = mongoose.model('Emotion')

const router = express.Router()

router.get('/send/:message_id', isAuth, (req, res) => {
  const emotion = new Emotion({
    type: 'poucebleu',
    number: 1,
    message: req.params.message_id
  })

  Emotion.findOneAndUpdate({
    type: 'poucebleu',
    message: req.params.message_id,
  },{ 
    $inc : { number : 1 }
  },{
    upsert: true,
    setDefaultsOnInsert: true
  })

  Message.findOneAndUpdate({
    _id: req.params.message_id
  },
  {
    $push: { emotion: emotion._id }
  })
  
  req.app.get('socketio').emit('new_emotion', emotion)
  res.redirect('back')
});

module.exports = router;