# Dockerfile for Express server
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application
COPY . ./

# Expose the application port
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]
