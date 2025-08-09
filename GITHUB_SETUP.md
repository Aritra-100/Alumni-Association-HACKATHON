# GitHub Setup and Push Guide

## Step 1: Install Git

1. **Download Git for Windows**:
   - Visit: https://git-scm.com/download/win
   - Download the latest version
   - Run the installer with default settings

2. **Verify Installation**:
   ```bash
   git --version
   ```

## Step 2: Configure Git (First Time Setup)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Sign in** to your account
3. **Click "New Repository"** (green button)
4. **Repository Settings**:
   - Repository name: `Alumni-Association-Backend`
   - Description: `Backend API for Alumni Association Platform`
   - Set to **Public** or **Private** (your choice)
   - **DO NOT** initialize with README (we already have one)
5. **Click "Create Repository"**

## Step 4: Push Your Code to GitHub

Open Command Prompt or PowerShell in your project directory and run:

```bash
# Navigate to your project directory
cd "C:\Users\ARITRA DAS\CascadeProjects\Alumni-Association-Backend"

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create first commit
git commit -m "Initial commit: Alumni Association Backend implementation"

# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/Alumni-Association-Backend.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 5: Verify Upload

1. Go to your GitHub repository
2. Refresh the page
3. You should see all your backend files uploaded

## Alternative: GitHub Desktop (GUI Option)

If you prefer a graphical interface:

1. **Download GitHub Desktop**: https://desktop.github.com/
2. **Install and sign in** with your GitHub account
3. **Click "Add an Existing Repository from your Hard Drive"**
4. **Select your project folder**: `C:\Users\ARITRA DAS\CascadeProjects\Alumni-Association-Backend`
5. **Publish to GitHub** using the interface

## Option 2: Manual Upload via GitHub Web Interface

If you can't install Git right now:

1. **Create a new repository** on GitHub (as described in Step 3 above)
2. **Click "uploading an existing file"** link
3. **Drag and drop** all your project files
4. **Commit the files** with message: "Initial commit: Alumni Association Backend"

## Important Notes

- **Don't forget** to create a `.env` file locally (copy from `.env.example`)
- **Never commit** your `.env` file (it's already in `.gitignore`)
- **Update the README** with your actual GitHub repository URL
- **Consider adding** a license file if you want to specify usage terms

## Repository Structure After Push

Your GitHub repository will contain:
```
Alumni-Association-Backend/
├── models/
├── routes/
├── middleware/
├── server.js
├── package.json
├── README.md
├── SETUP.md
├── GITHUB_SETUP.md
├── .gitignore
└── .env.example
```

## Next Steps After Push

1. **Share the repository** URL with collaborators
2. **Set up CI/CD** if needed
3. **Deploy to cloud** platforms like Heroku, Railway, or Vercel
4. **Create issues** for future enhancements
5. **Add branch protection** rules if working with a team

## Troubleshooting

- **Authentication issues**: Use Personal Access Token instead of password
- **Permission denied**: Check repository permissions
- **Large files**: Use Git LFS for files over 100MB
- **Merge conflicts**: Use `git pull` before pushing if repository was modified online
