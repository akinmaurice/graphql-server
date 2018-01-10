const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Please Supply and email address',
  },
  name: {
    type: String,
    required: 'Please Supply a name!',
    trim: true,
  },
});

module.exports = mongoose.model('User', userSchema);
