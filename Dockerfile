# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
    
# Copy the rest of your app
COPY . .

# Build the app (for React/Next.js)
RUN npm run build

# Expose port (change if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]