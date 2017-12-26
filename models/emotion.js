// Importation des modules 

import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Réactions sur les posts 

const EmotionSchema = new Schema({
    type: {
      type: String,
      enum: ['poucebleu', 'poucerouge'],
      default: 'user'
    },
    number: {
      type: Number,
      default: 0
    },
    message: { type: mongoose.Schema.Types.ObjectId, ref: "Message", required: false }
});

const Emotion = mongoose.model('Emotion', EmotionSchema);

module.exports = Emotion;