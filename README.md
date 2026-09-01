# READ60.in

READ60 is being rebuilt as a clean content platform powered by Payload CMS and Next.js.

## First milestone

The first working structure is:

- Blog
- Story
- News
- Reels
- Payload Admin
- PostgreSQL
- REST API

The public homepage is intentionally simple. We will build the product one working piece at a time.

## Local setup

Requirements:

- Node.js 20.9+
- PostgreSQL
- npm, pnpm or another supported package manager

1. Copy `.env.example` to `.env`.
2. Set `PAYLOAD_SECRET` to a long random value.
3. Set `DATABASE_URL` to your PostgreSQL connection string.
4. Install dependencies: `npm install`
5. Start development: `npm run dev`
6. Open `http://localhost:3000/admin` and create the first admin user.
7. Create a Blog, Story, News item and Reel in Payload.
8. Open `/blog`, `/story`, `/news` and `/reels` to see the published records.

## Architecture

The frontend and Payload backend live in the same Next.js application. Payload owns the admin panel, content models, authentication, API and database integration. The public READ60 interface is our own frontend and can evolve independently from the admin UI.

## Deployment

The target is self-hosting. Production deployment will be tested on the user's Hostinger environment only after the local/admin/database/API loop works.
