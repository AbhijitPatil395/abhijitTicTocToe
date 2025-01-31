# Stage 1: Build the Angular application
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the Angular source code and configuration files
COPY . .

# # Build the Angular app
RUN npm run build --prod

# # Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine

# # Copy the built app from the previous stage
COPY --from=build /app/dist/tiktoktoe-new /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
# CMD ["npm", "run", "start"]
