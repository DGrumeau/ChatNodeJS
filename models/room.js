// Importation des modules 

import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Création des salons 

const RoomSchema = new Schema({
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

const Room = mongoose.model('Room', RoomSchema)

module.exports = Room