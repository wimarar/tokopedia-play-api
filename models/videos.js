const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnailUrl: String,
  videoUrl: String,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;