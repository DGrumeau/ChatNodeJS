// Importation des modules 

import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Création des salons 

const ChannelSchema = new Schema({
  
    name: String,
    slug: String,
    dateCreation: Date,
    dateLastUpdate: Date,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
    messages:
    [
      {
        type: mongoose.Schema.Types.ObjectId, ref: "Message"
      }
    ],
    users:
    [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId, ref: "User"
        },
        authorization:{
          type: String,
          enum: ['ok', 'kick', 'ban', 'muted'],
          default: 'ok'
        },
      }
    ]
});

const Channel = mongoose.model('Channel', ChannelSchema)

module.exports = Channel