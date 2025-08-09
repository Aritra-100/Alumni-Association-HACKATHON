# Alumni Association Backend

A comprehensive backend API for an Alumni Association platform built with Node.js, Express, and MongoDB.

## Features

- **User Authentication & Authorization** - JWT-based auth with role-based access control
- **Alumni Directory** - Searchable directory with privacy controls
- **Event Management** - Create, manage, and RSVP to alumni events
- **Job Board** - Post and browse job opportunities
- **News & Announcements** - Share updates and news with the community
- **User Profiles** - Comprehensive alumni profiles with professional information

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, Rate Limiting
- **Validation**: Express Validator

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Alumni-Association-Backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` file with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/alumni_association
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
```

5. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/change-password` - Change password
- `POST /api/auth/forgot-password` - Request password reset

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `GET /api/events/:id` - Get event by ID
- `PUT /api/events/:id` - Update event
- `POST /api/events/:id/register` - Register for event
- `DELETE /api/events/:id/register` - Unregister from event

### Jobs
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create new job
- `GET /api/jobs/:id` - Get job by ID
- `POST /api/jobs/:id/apply` - Apply for job

### News
- `GET /api/news` - Get all news
- `POST /api/news` - Create new news (moderator only)
- `GET /api/news/:id` - Get news by ID
- `POST /api/news/:id/like` - Like/unlike news
- `POST /api/news/:id/comment` - Add comment to news

### Directory
- `GET /api/directory` - Get alumni directory
- `GET /api/directory/stats` - Get directory statistics
- `GET /api/directory/search-suggestions` - Get search suggestions

## User Roles

- **Alumni**: Regular users who can view content, register for events, apply for jobs
- **Moderator**: Can create/edit news and events, moderate content
- **Admin**: Full access to all features including user management

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Rate limiting to prevent abuse
- CORS protection
- Input validation and sanitization
- Helmet for security headers

## Database Models

- **User**: Alumni profiles with academic and professional information
- **Event**: Alumni events with registration functionality
- **Job**: Job postings with application tracking
- **News**: News articles with likes and comments

## Development

### Running Tests
```bash
npm test
```

### Code Structure
```
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── uploads/         # File uploads directory
├── server.js        # Main server file
└── package.json     # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
