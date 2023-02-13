#!/bin/bash

echo "Building project..."

# Build the TypeScript code
yarn run build

# Copy the necessary files to the build directory
mkdir build
cp -r src/ build/
cp package.json build/
cp ormconfig.json build/

# Navigate to the build directory
cd build/

# Install the production dependencies
yarn add --only=production

# Start the Node.js server
yarn start

echo "Build complete!"
