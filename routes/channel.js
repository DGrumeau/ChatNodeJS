// importation des modules, outils et modèles 

import express from 'express'
import mongoose from 'mongoose'
import markdown from 'marked'
import validate from 'express-validation'
import Joi from 'joi'
import slug from 'slug'

import isAuth from '../tools/isauthentified'
import isKicked from '../tools/iskicked'
import isBanned from '../tools/isbanned'

const Channel = mongoose.model('Channel')
const Message = mongoose.model('Message')
const User = mongoose.model('User')

const router = express.Router()

// Regex pour nom du channel : 2 à 50 char

router.get('/:slug', isAuth, isBanned, validate(
  {
    params: {
      slug: Joi.string().regex(/[a-zA-Z0-9]{2,50}/).required(),
    }
  }), (req, res) => {
    Channel.findOneAndUpdate({ slug: req.params.slug }, { $addToSet: { users: { _id: req.session.passport.user._id } }}, { new: true }).populate({ path: 'messages', populate: [{ path: 'user' }, { path: 'emotion' }]}).populate({ path: 'users' }).exec(function(err, channel) {
      if (err) {
        console.log(err)
      } else {
        res.render('channel/show', { channel, user: req.session.passport.user, md: markdown });
      }
    });
});

router.post('/create', isAuth, isBanned, (req, res) => {
  console.log(req.session.passport.user)
  const channel = new Channel({
    name: req.body.name,
    slug: slug(req.body.name),
    numberOfMessages: 0,
    dateCreation: new Date(),
    creator: req.session.passport.user._id,
    messages: [],
    users: [{ id: req.session.passport.user._id }]
  })

  channel.save((err, item) => {
    if (err) console.log(err)
    res.redirect('back')
  })
})

router.get('/:id/supprimer', isAuth, isBanned, (req, res) => {
  Message.findByIdAndRemove(req.params.id, (err) => {
    if (err) console.log(err)
    req.app.get('socketio').emit('supprimer_message', req.body.id);
    res.redirect('back')
  })
})

module.exports = router;
