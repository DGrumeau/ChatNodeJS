// importation des modules

import express from 'express'
import mongoose from 'mongoose'

import isAuth from '../tools/isauthentified'

const User = mongoose.model('User')
const Channel = mongoose.model('Channel')

const router = express.Router()
const ObjectId = mongoose.Types.ObjectId

router.get('/', isAuth, (req, res) => {
  User.find().sort({'date' : -1}).populate('message').exec((err, users) => {
    res.render('user/list', { users });
  });
});

router.get('/:id/kick/:channel', isAuth, (req, res) => {
  Channel.findOneAndUpdate({ _id: req.params.channel }, { $pull: { 'users': new ObjectId(req.params.id) }}, { safe: true, multi: true }).exec(() => 
    res.redirect('back')
  )
})

module.exports = router;