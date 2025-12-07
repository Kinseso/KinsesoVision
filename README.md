# KinsesoVision v12 (Scaffold)

This package is a scaffold for KinsesoVision v12 (Web + Mobile stubs). It is a starting point to build the full platform you described.

## What's included
- Next.js web scaffold (app dir) with login (Supabase magic link), landing page, SQL schema, and API placeholder for Stripe checkout.
- Mobile Expo app stub in /mobile with initial screen and instructions.
- SQL schema for Supabase (service_requests, posts_blog, evidence_records).

## How to deploy (web)
1. In Vercel, create a new project from this repo branch (or upload files).
2. Add environment variables in Vercel:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - STRIPE_PUBLISHABLE_KEY
   - STRIPE_SECRET_KEY
   - STRIPE_WEBHOOK_SECRET
   - SITE_URL (e.g. https://kinsesogroups.co.uk)
3. In Supabase run: web/sql/schema_v12.sql
4. Push to GitHub and redeploy in Vercel.

## Mobile
We included a simple Expo app stub at /mobile. To run locally:
1. Install Expo CLI: npm install -g expo-cli
2. cd mobile
3. npm install
4. expo start

For production mobile app you will need Apple/Google developer accounts and to build native binaries.

## Evidence Engine notes
- This scaffold includes a schema for evidence_records, but real-time secure streaming and tamper-proof storage requires additional infra (S3, WebRTC ingestion, TURN, ffmpeg transcoding, mobile native background upload).
