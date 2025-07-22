#!/bin/bash

# SquareBlack Replica - Quick Start Script

echo "🚀 Starting SquareBlack Replica..."
echo "=================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🔧 Building project..."
npm run build

echo "🌐 Starting development server..."
echo "📱 Open http://localhost:5173 in your browser"
echo "🔄 Press Ctrl+C to stop the server"

npm run dev