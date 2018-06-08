const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String
});
console.log('I run!');

module.exports = mongoose.model('User', userSchema);