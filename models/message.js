// Importation des modules 

import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Création du schema message 

const MessageSchema = new Schema({
    content: String,
    date: Date,
    dateLastUpdate: Date,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    emotion: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Emotion",
        required: false
      }],
    platform: String
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;