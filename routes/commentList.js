const express = require('express');
const router = express.Router();
const Comment = require('../models/commentList');

// Add a new comment
router.post('/comments', async (req, res) => {
  try {
    const { videoId, name, comment } = req.body;
    const newComment = new Comment({ videoId, name, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all comments for a specific video
router.get('/comments/:videoId', async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a comment by ID
router.put('/comments/:commentId', async (req, res) => {
  try {
    const { name, comment } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      { name, comment },
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(updatedComment);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a comment by ID
router.delete('/comments/:commentId', async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
