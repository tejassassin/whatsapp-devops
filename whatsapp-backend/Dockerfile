# Use a Node.js base image from Docker Hub
FROM node:16

# Create and set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy application files to the container
COPY . .

# Expose the port your app runs on
EXPOSE 8000

# Command to start your Node.js application
CMD ["npm", "start"]

