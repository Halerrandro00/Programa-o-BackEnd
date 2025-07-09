const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  password: String,
  googleId: { type: String, unique: true, sparse: true },
  name: String
});

module.exports = mongoose.model('User', UserSchema);
