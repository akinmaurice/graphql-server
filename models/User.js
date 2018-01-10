const mongoose = require('mongoose');

const md5 = require('md5');

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
}, { collection: 'user', timestamps: true });

// Virtual Field to get User Gravatar
userSchema.virtual('gravatar').get(function () {
  const hash = md5(this.email);
  return `https://gravatar.com/avatar/${hash}?s=200`;
});

module.exports = mongoose.model('User', userSchema);
