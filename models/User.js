const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // Basic Information
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  
  // Profile Information
  profilePicture: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    maxlength: 500
  },
  phone: {
    type: String,
    trim: true
  },
  
  // Academic Information
  graduationYear: {
    type: Number,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    unique: true,
    sparse: true
  },
  
  // Professional Information
  currentCompany: {
    type: String,
    trim: true
  },
  currentPosition: {
    type: String,
    trim: true
  },
  industry: {
    type: String,
    trim: true
  },
  experience: [{
    company: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String
  }],
  
  // Contact Information
  location: {
    city: String,
    state: String,
    country: String
  },
  socialLinks: {
    linkedin: String,
    twitter: String,
    facebook: String,
    website: String
  },
  
  // Privacy Settings
  isProfilePublic: {
    type: Boolean,
    default: true
  },
  showEmail: {
    type: Boolean,
    default: false
  },
  showPhone: {
    type: Boolean,
    default: false
  },
  
  // System Fields
  role: {
    type: String,
    enum: ['alumni', 'admin', 'moderator'],
    default: 'alumni'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for search functionality
userSchema.index({ 
  firstName: 'text', 
  lastName: 'text', 
  email: 'text',
  currentCompany: 'text',
  department: 'text'
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Get full name
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Transform output
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model('User', userSchema);
