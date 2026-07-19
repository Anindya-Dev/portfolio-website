FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]
