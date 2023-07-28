const Video = require('../models/videos');

// Add a new video
exports.addVideo = async (req, res) => {
  try {
    const { title, description, thumbnailUrl, videoUrl } = req.body;
    const newVideo = new Video({ title, description, thumbnailUrl, videoUrl });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all videos
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a video by ID
exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
