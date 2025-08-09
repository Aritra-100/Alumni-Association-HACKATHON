const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  
  // Company Information
  company: {
    name: {
      type: String,
      required: true
    },
    logo: String,
    website: String,
    description: String
  },
  
  // Job Details
  jobType: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'internship', 'freelance'],
    required: true
  },
  experienceLevel: {
    type: String,
    enum: ['entry', 'mid', 'senior', 'executive'],
    required: true
  },
  location: {
    city: String,
    state: String,
    country: String,
    isRemote: {
      type: Boolean,
      default: false
    }
  },
  
  // Compensation
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'USD'
    },
    period: {
      type: String,
      enum: ['hourly', 'monthly', 'yearly'],
      default: 'yearly'
    }
  },
  
  // Requirements
  requirements: [String],
  skills: [String],
  education: {
    level: {
      type: String,
      enum: ['high-school', 'bachelors', 'masters', 'phd', 'other']
    },
    field: String
  },
  
  // Application Details
  applicationDeadline: Date,
  applicationUrl: String,
  contactEmail: String,
  
  // Posted by
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Applications
  applications: [{
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    appliedAt: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['applied', 'reviewing', 'shortlisted', 'rejected', 'hired'],
      default: 'applied'
    },
    coverLetter: String,
    resume: String
  }],
  
  // Status
  status: {
    type: String,
    enum: ['active', 'closed', 'draft'],
    default: 'active'
  },
  
  // Metadata
  views: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for search and filtering
jobSchema.index({ title: 'text', description: 'text', 'company.name': 'text' });
jobSchema.index({ jobType: 1 });
jobSchema.index({ experienceLevel: 1 });
jobSchema.index({ status: 1 });
jobSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Job', jobSchema);
