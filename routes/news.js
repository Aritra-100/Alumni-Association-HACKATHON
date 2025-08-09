const express = require('express');
const { body, validationResult } = require('express-validator');
const News = require('../models/News');
const { auth, moderatorAuth, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/news
// @desc    Get all news
// @access  Public
router.get('/', optionalAuth, async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      search, 
      category,
      status = 'published'
    } = req.query;
    
    let query = { status };
    
    if (search) {
      query.$text = { $search: search };
    }
    
    if (category) {
      query.category = category;
    }

    const news = await News.find(query)
      .populate('author', 'firstName lastName profilePicture')
      .populate('likes.user', 'firstName lastName')
      .populate('comments.user', 'firstName lastName profilePicture')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ isPinned: -1, priority: -1, publishedAt: -1 });

    const total = await News.countDocuments(query);

    res.json({
      news,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      total
    });
  } catch (error) {
    console.error('Get news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/news
// @desc    Create new news
// @access  Private (moderator)
router.post('/', auth, moderatorAuth, [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('category').isIn(['announcement', 'achievement', 'event', 'general', 'career', 'academic'])
    .withMessage('Invalid category')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newsData = {
      ...req.body,
      author: req.user.id,
      publishedAt: req.body.status === 'published' ? new Date() : null
    };

    const news = new News(newsData);
    await news.save();

    const populatedNews = await News.findById(news._id)
      .populate('author', 'firstName lastName profilePicture');

    res.status(201).json({
      message: 'News created successfully',
      news: populatedNews
    });
  } catch (error) {
    console.error('Create news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/news/:id
// @desc    Get news by ID
// @access  Public
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const news = await News.findById(req.params.id)
      .populate('author', 'firstName lastName profilePicture')
      .populate('likes.user', 'firstName lastName')
      .populate('comments.user', 'firstName lastName profilePicture');

    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }

    // Increment view count
    news.views += 1;
    await news.save();

    res.json(news);
  } catch (error) {
    console.error('Get news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/news/:id/like
// @desc    Like/unlike news
// @access  Private
router.post('/:id/like', auth, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }

    const existingLike = news.likes.find(
      like => like.user.toString() === req.user.id
    );

    if (existingLike) {
      // Unlike
      news.likes = news.likes.filter(
        like => like.user.toString() !== req.user.id
      );
      await news.save();
      res.json({ message: 'News unliked', liked: false });
    } else {
      // Like
      news.likes.push({ user: req.user.id });
      await news.save();
      res.json({ message: 'News liked', liked: true });
    }
  } catch (error) {
    console.error('Like news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/news/:id/comment
// @desc    Add comment to news
// @access  Private
router.post('/:id/comment', auth, [
  body('content').notEmpty().withMessage('Comment content is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const news = await News.findById(req.params.id);
    
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }

    news.comments.push({
      user: req.user.id,
      content: req.body.content
    });

    await news.save();

    const updatedNews = await News.findById(req.params.id)
      .populate('comments.user', 'firstName lastName profilePicture');

    res.json({
      message: 'Comment added successfully',
      comments: updatedNews.comments
    });
  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
