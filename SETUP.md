# Alumni Association Backend - Setup Guide

## Prerequisites Installation

Since Node.js and npm are not currently installed on your system, please follow these steps:

### 1. Install Node.js
1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS version for Windows
3. Run the installer and follow the setup wizard
4. This will also install npm (Node Package Manager)

### 2. Install MongoDB
You have two options:

#### Option A: MongoDB Atlas (Cloud - Recommended)
1. Visit [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Update the `MONGODB_URI` in your `.env` file

#### Option B: Local MongoDB
1. Visit [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Download MongoDB Community Server for Windows
3. Install and start the MongoDB service

### 3. Setup Environment Variables
1. Copy `.env.example` to `.env`:
```bash
copy .env.example .env
```

2. Edit `.env` file with your settings:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/alumni_association
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

### 4. Install Dependencies
After Node.js is installed, run:
```bash
npm install
```

### 5. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

## Testing the API

### Health Check
Visit: `http://localhost:5000/api/health`

### Register a User
```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "graduationYear": 2020,
  "degree": "Bachelor of Science",
  "department": "Computer Science"
}
```

### Login
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## API Testing Tools

You can use any of these tools to test the API:
- **Postman** - Popular GUI tool for API testing
- **Thunder Client** - VS Code extension
- **curl** - Command line tool
- **Insomnia** - Alternative to Postman

## Next Steps

1. Install Node.js and MongoDB
2. Set up environment variables
3. Install dependencies with `npm install`
4. Start the server with `npm run dev`
5. Test the API endpoints
6. Build your frontend to connect to this backend

## Troubleshooting

### Common Issues:
- **Port already in use**: Change PORT in `.env` file
- **MongoDB connection failed**: Check MONGODB_URI in `.env`
- **JWT errors**: Ensure JWT_SECRET is set in `.env`

### Getting Help:
- Check the console logs for detailed error messages
- Ensure all environment variables are properly set
- Verify MongoDB is running (if using local installation)
