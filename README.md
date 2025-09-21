# KinsesoVision v9 (v7 merged + v8 extras)

## Features
- Social network (feed, likes, comments, follow, friend requests)
- Community Forum
- Showcase competition + public voting
- Insurance marketplace (brands ↔ insurers)
- Education hub
- Trends, Influencers/Deals, Ads targeting demo
- Marketplace with Buy/Resell + card/crypto demo buttons
- Analytics: CSV → KPIs, charts, AI insights (heuristic rules), Decision Brief export
- Chat assistant (demo)
- Profiles, About, Contact
- Blog (National / Tech / Fashion)
- Header with logo and footer with LinkedIn
- robots.txt & sitemap.xml

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy (Vercel via GitHub)
```bash
git add .
git commit -m "v9 full merge"
git push
# Vercel will auto-build and deploy
```

## Notes
- Replace `/public/logo.png` with your final logo.
- Ensure `.gitignore` keeps `node_modules`, `.next`, etc. out of git.
