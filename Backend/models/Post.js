const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [commentSchema], 
  averageRating: { type: Number, default: 0 },
  ratings: [{ type: Number }], 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
