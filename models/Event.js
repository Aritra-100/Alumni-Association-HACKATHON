const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    enum: ['reunion', 'networking', 'workshop', 'seminar', 'social', 'career', 'other'],
    required: true
  },
  
  // Date and Time
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  
  // Location
  venue: {
    name: String,
    address: String,
    city: String,
    state: String,
    country: String
  },
  isVirtual: {
    type: Boolean,
    default: false
  },
  virtualLink: {
    type: String
  },
  
  // Event Details
  maxAttendees: {
    type: Number,
    default: null
  },
  registrationFee: {
    type: Number,
    default: 0
  },
  currency: {
    type: String,
    default: 'USD'
  },
  
  // Registration
  registrationDeadline: {
    type: Date
  },
  requiresApproval: {
    type: Boolean,
    default: false
  },
  
  // Organizer
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Attendees
  attendees: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    registeredAt: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['registered', 'approved', 'declined', 'waitlist'],
      default: 'registered'
    }
  }],
  
  // Media
  images: [String],
  banner: String,
  
  // Status
  status: {
    type: String,
    enum: ['draft', 'published', 'cancelled', 'completed'],
    default: 'draft'
  },
  
  // Tags for categorization
  tags: [String]
}, {
  timestamps: true
});

// Index for search and filtering
eventSchema.index({ title: 'text', description: 'text', tags: 'text' });
eventSchema.index({ startDate: 1 });
eventSchema.index({ eventType: 1 });
eventSchema.index({ status: 1 });

module.exports = mongoose.model('Event', eventSchema);
