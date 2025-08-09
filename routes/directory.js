const express = require('express');
const User = require('../models/User');
const { auth, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/directory
// @desc    Get alumni directory
// @access  Public
router.get('/', optionalAuth, async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 20, 
      search, 
      department, 
      graduationYear,
      location,
      company,
      sortBy = 'lastName'
    } = req.query;
    
    let query = { 
      isActive: true,
      isProfilePublic: true 
    };
    
    // Search functionality
    if (search) {
      query.$text = { $search: search };
    }
    
    // Filter by department
    if (department) {
      query.department = department;
    }
    
    // Filter by graduation year
    if (graduationYear) {
      if (graduationYear.includes('-')) {
        const [startYear, endYear] = graduationYear.split('-');
        query.graduationYear = { 
          $gte: parseInt(startYear), 
          $lte: parseInt(endYear) 
        };
      } else {
        query.graduationYear = parseInt(graduationYear);
      }
    }
    
    // Filter by location
    if (location) {
      query.$or = [
        { 'location.city': new RegExp(location, 'i') },
        { 'location.state': new RegExp(location, 'i') },
        { 'location.country': new RegExp(location, 'i') }
      ];
    }
    
    // Filter by company
    if (company) {
      query.currentCompany = new RegExp(company, 'i');
    }

    // Sort options
    let sortOptions = {};
    switch (sortBy) {
      case 'firstName':
        sortOptions = { firstName: 1, lastName: 1 };
        break;
      case 'graduationYear':
        sortOptions = { graduationYear: -1, lastName: 1 };
        break;
      case 'company':
        sortOptions = { currentCompany: 1, lastName: 1 };
        break;
      default:
        sortOptions = { lastName: 1, firstName: 1 };
    }

    const users = await User.find(query)
      .select('-password -email -phone -socialLinks.facebook -socialLinks.twitter')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(sortOptions);

    // Filter sensitive information based on privacy settings
    const filteredUsers = users.map(user => {
      const userObj = user.toObject();
      
      // Show email and phone only if user allows it or if it's the requesting user
      if (!user.showEmail && (!req.user || req.user.id !== user._id.toString())) {
        delete userObj.email;
      }
      if (!user.showPhone && (!req.user || req.user.id !== user._id.toString())) {
        delete userObj.phone;
      }
      
      return userObj;
    });

    const total = await User.countDocuments(query);

    res.json({
      users: filteredUsers,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      total
    });
  } catch (error) {
    console.error('Get directory error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/directory/stats
// @desc    Get directory statistics
// @access  Public
router.get('/stats', async (req, res) => {
  try {
    const totalAlumni = await User.countDocuments({ 
      isActive: true, 
      role: 'alumni' 
    });

    const departmentStats = await User.aggregate([
      { $match: { isActive: true, role: 'alumni' } },
      { $group: { _id: '$department', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    const graduationYearStats = await User.aggregate([
      { $match: { isActive: true, role: 'alumni' } },
      { $group: { _id: '$graduationYear', count: { $sum: 1 } } },
      { $sort: { _id: -1 } }
    ]);

    const locationStats = await User.aggregate([
      { $match: { isActive: true, role: 'alumni', 'location.country': { $exists: true } } },
      { $group: { _id: '$location.country', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    const companyStats = await User.aggregate([
      { $match: { isActive: true, role: 'alumni', currentCompany: { $exists: true, $ne: '' } } },
      { $group: { _id: '$currentCompany', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    res.json({
      totalAlumni,
      departmentStats,
      graduationYearStats,
      locationStats,
      companyStats
    });
  } catch (error) {
    console.error('Get directory stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/directory/search-suggestions
// @desc    Get search suggestions for directory
// @access  Public
router.get('/search-suggestions', async (req, res) => {
  try {
    const { type, query } = req.query;
    
    if (!type || !query) {
      return res.status(400).json({ message: 'Type and query parameters are required' });
    }

    let suggestions = [];
    const regex = new RegExp(query, 'i');

    switch (type) {
      case 'department':
        suggestions = await User.distinct('department', { 
          department: regex,
          isActive: true 
        });
        break;
      case 'company':
        suggestions = await User.distinct('currentCompany', { 
          currentCompany: regex,
          isActive: true 
        });
        break;
      case 'location':
        const cities = await User.distinct('location.city', { 
          'location.city': regex,
          isActive: true 
        });
        const states = await User.distinct('location.state', { 
          'location.state': regex,
          isActive: true 
        });
        const countries = await User.distinct('location.country', { 
          'location.country': regex,
          isActive: true 
        });
        suggestions = [...cities, ...states, ...countries];
        break;
      default:
        return res.status(400).json({ message: 'Invalid suggestion type' });
    }

    // Remove empty values and limit results
    suggestions = suggestions
      .filter(item => item && item.trim() !== '')
      .slice(0, 10);

    res.json({ suggestions });
  } catch (error) {
    console.error('Get search suggestions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
