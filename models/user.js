// Importation des modules 

import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Création des utilisateurs, gestion des rôles et prise en charge des méthodes de login

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'super-admin', 'kicked', 'banned'],
    default: 'user'
  },

  facebook : {
    id: String,
    token: String,
    name: String
  },
  twitter: {
    id: String,
    token: String
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;