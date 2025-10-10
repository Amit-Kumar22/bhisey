#!/bin/bash
# Backend startup script

echo "🚀 Starting Bhisey Backend Server..."

# Navigate to backend directory
cd "$(dirname "$0")/backend" || exit 1

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the backend
echo "🔨 Building backend..."
npm run build

# Start the server
echo "✅ Starting server..."
npm start
