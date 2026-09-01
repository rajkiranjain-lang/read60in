import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

const Users = {
  slug: 'users',
  auth: true,
  admin: { useAsTitle: 'email' },
  fields: [
    { name: 'displayName', type: 'text' as const },
  ],
}

const Media = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'video/*'],
  },
  fields: [
    { name: 'alt', type: 'text' as const, required: true },
  ],
}

const Blog = {
  slug: 'blog',
  admin: { useAsTitle: 'title' },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text' as const, required: true },
    { name: 'excerpt', type: 'textarea' as const },
    { name: 'content', type: 'richText' as const },
    { name: 'category', type: 'text' as const },
    { name: 'authorName', type: 'text' as const },
    { name: 'featuredImage', type: 'upload' as const, relationTo: 'media' },
    { name: 'publishedAt', type: 'date' as const },
  ],
}

const Story = {
  slug: 'story',
  admin: { useAsTitle: 'title' },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text' as const, required: true },
    { name: 'excerpt', type: 'textarea' as const },
    { name: 'content', type: 'richText' as const },
    { name: 'category', type: 'text' as const },
    { name: 'authorName', type: 'text' as const },
    { name: 'coverImage', type: 'upload' as const, relationTo: 'media' },
    { name: 'publishedAt', type: 'date' as const },
  ],
}

const News = {
  slug: 'news',
  admin: { useAsTitle: 'headline' },
  versions: { drafts: true },
  fields: [
    { name: 'headline', type: 'text' as const, required: true },
    { name: 'summary', type: 'textarea' as const },
    { name: 'content', type: 'richText' as const },
    { name: 'category', type: 'text' as const },
    { name: 'state', type: 'text' as const },
    { name: 'city', type: 'text' as const },
    { name: 'source', type: 'text' as const },
    { name: 'featuredImage', type: 'upload' as const, relationTo: 'media' },
    { name: 'publishedAt', type: 'date' as const },
  ],
}

const Reels = {
  slug: 'reels',
  admin: { useAsTitle: 'title' },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text' as const, required: true },
    { name: 'caption', type: 'textarea' as const },
    { name: 'video', type: 'upload' as const, relationTo: 'media', required: true },
    { name: 'thumbnail', type: 'upload' as const, relationTo: 'media' },
    { name: 'category', type: 'text' as const },
    { name: 'authorName', type: 'text' as const },
    { name: 'publishedAt', type: 'date' as const },
  ],
}

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [Users, Media, Blog, Story, News, Reels],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
})
