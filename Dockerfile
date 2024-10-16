#use Node.js image to build and serve the React app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Install a simple HTTP server to serve the app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to serve the build directory
CMD ["serve", "-s", "build", "-l", "3000"]

