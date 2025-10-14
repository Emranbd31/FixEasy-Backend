#!/bin/bash
echo "🚀 Auto-deploying FixEasy frontend..."

git add .
git commit -m "Auto build & deploy"
git push origin main

echo "🔧 Building and deploying to Vercel..."
npx vercel build --prod --yes
npx vercel deploy --prebuilt --prod --yes

echo "✅ FixEasy successfully rebuilt & deployed!"
