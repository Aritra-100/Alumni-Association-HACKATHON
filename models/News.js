const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    maxlength: 200
  },
  
  // Media
  featuredImage: String,
  images: [String],
  
  // Author
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Categories and Tags
  category: {
    type: String,
    enum: ['announcement', 'achievement', 'event', 'general', 'career', 'academic'],
    required: true
  },
  tags: [String],
  
  // Status and Visibility
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  publishedAt: Date,
  
  // Engagement
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    likedAt: {
      type: Date,
      default: Date.now
    }
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String,
    commentedAt: {
      type: Date,
      default: Date.now
    }
  }],
  
  // Priority
  isPinned: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for search and filtering
newsSchema.index({ title: 'text', content: 'text', excerpt: 'text' });
newsSchema.index({ category: 1 });
newsSchema.index({ status: 1 });
newsSchema.index({ publishedAt: -1 });
newsSchema.index({ isPinned: -1, priority: -1 });

module.exports = mongoose.model('News', newsSchema);
