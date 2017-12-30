// importation des modules

import mongoose from 'mongoose'

const Channel = mongoose.model('Channel')

function userKicked(channel) {
  return function(req, res, next) {
    Channel.findById({channel}, (err, channel) => {
      if (channel.users.includes(req.session.passport.user._id)) next();
      else res.redirect('/')
    })
  }
}

module.exports = userKicked()