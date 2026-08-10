#!/bin/bash
set -e
cd /opt/data/xray-homepage
while true; do
  echo "$(date): Building..."
  npm run build
  echo "$(date): Committing..."
  git add -A
  git commit -m "Auto style sync $(date +%H%M%S)" || true
  echo "$(date): Pushing..."
  git push origin main
  echo "$(date): Deploying..."
  npx vercel --prod --yes
  echo "$(date): Done. Sleeping 30s..."
  sleep 30
done
