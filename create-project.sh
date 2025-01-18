#!/bin/bash

# Create main project directories
mkdir -p fullstack-demo
cd fullstack-demo

# Create frontend directory
mkdir -p react-frontend/src/{components,pages,services,utils}

# Create middleware directory
mkdir -p express-graphql-middleware/src/{schema,resolvers,middleware}

# Create backend directory
mkdir -p springboot-backend/src/{main,test}/java/com/demo/training/{controller,service,model}

# Create documentation directory
mkdir -p docs 