# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Use the local backend when the Docker stack is run from this machine.
ARG REACT_APP_API_BASE=http://localhost:4000
ENV REACT_APP_API_BASE=${REACT_APP_API_BASE}

# Build the application
RUN npm run build

# Use a lightweight web server for serving static files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
