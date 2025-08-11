## javascript deployment

### What is JavaScript Deployment?

- JavaScript Deployment is the Process of Making JavaScript Applications Available for Use by Users
- It involves Transferring Code from Development Environments to Production Environments
- Deployment can include Hosting the Application on a Server, Configuring the Environment, and Ensuring
  that the Application Runs Smoothly

### Common JavaScript Deployment Methods

- **Static Hosting**
  - Hosting static files (HTML, CSS, JavaScript) on a web server or CDN
- **Server-Side Deployment**
  - Deploying JavaScript applications that run on a server, such as Node.js applications
- **Containerization**
  - Using Docker or similar technologies to package applications and their dependencies into containers
- **Serverless Deployment**
  - Deploying applications using serverless platforms like AWS Lambda, Azure Functions, or Google Cloud Functions
- **Continuous Integration/Continuous Deployment (CI/CD)**
  - Automating the deployment process using CI/CD tools like Jenkins, GitHub Actions, or GitLab CI/CD

## DOCKERFILE example

```dockerfile
# Use the official Node.js image as the base image
FROM node:14

# make a directory for the app
RUN mkdir /app
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .
# Expose the port the app runs on
EXPOSE 3000
# Command to run the application
CMD ["npm", "start"]


```

## docker-compose example

```yaml
services:
  app:
    build:
      context: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=production
    depends_on:
      - db
    networks:
      - internal

  db:
    image: mongo:6
    volumes:
      - data:/data/db
    ports:
      - 27017:27017
    networks:
      - internal

networks:
  internal:

volumes:
  data:
```
