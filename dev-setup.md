# Development Environment Setup

This project provides multiple ways to run the development environment to avoid version conflicts.

## Option 1: Docker (Recommended)

### Prerequisites
- Docker Desktop installed on your machine

### Quick Start
```bash
# Build and run the container
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

The application will be available at `http://localhost:5173`

### Docker Commands
```bash
# Stop the container
docker-compose down

# Rebuild after changes
docker-compose up --build

# View logs
docker-compose logs -f portfolio

# Access container shell
docker-compose exec portfolio sh
```

## Option 2: Node Version Manager (NVM)

### Prerequisites
- NVM installed on your machine

### Setup
```bash
# Use the specified Node version
nvm use

# If version not installed, install it first
nvm install 18.19.0
nvm use 18.19.0

# Install dependencies
npm install

# Start development server
npm run dev
```

> Tip: This repo also includes a `.node-version` and an `.npmrc` with `engine-strict=true` to enforce the Node version.

## Option 3: Direct Node.js

### Prerequisites
- Node.js 18.x installed

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the root directory if needed:
```
VITE_API_URL=your_api_url_here
```

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, you can change it in `docker-compose.yml` or use:
```bash
npm run dev -- --port 3000
```

### Docker Issues
- Make sure Docker Desktop is running
- Try `docker system prune` to clean up if having space issues
- On Windows, ensure WSL2 is properly configured