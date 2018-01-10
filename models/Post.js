const mongoose = require('mongoose');
// Use global promise for mongoose
mongoose.Promise = global.Promise;

// Make Schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    require: 'Please enter a Title for the blog post!',
  },
  content: {
    type: String,
    trim: true,
    required: 'Enter a blog content',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'Blog Post Should have a valid User!',
  },
}, { collection: 'post', timestamps: true });
// Define Our Indexes for quick queries and searches
postSchema.index({
  title: 'text',
  description: 'text',
});

module.exports = mongoose.model('Post', postSchema);
