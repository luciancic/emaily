const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  credits: { type: String, default: 0 }
});

mongoose.model('users', userSchema);