import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

const sections = {
  blog: { title: 'Blog', field: 'title' },
  story: { title: 'Story', field: 'title' },
  news: { title: 'News', field: 'headline' },
  reels: { title: 'Reels', field: 'title' },
} as const

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  if (!(section in sections)) notFound()

  const current = sections[section as keyof typeof sections]
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: section as 'blog' | 'story' | 'news' | 'reels',
    limit: 12,
    sort: '-createdAt',
  })

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px' }}>
      <a href="/" style={{ color: '#666' }}>← READ60</a>
      <h1 style={{ fontSize: 52, marginBottom: 8 }}>{current.title}</h1>
      <p style={{ color: '#666', marginBottom: 32 }}>{result.totalDocs} published item(s)</p>
      {result.docs.length === 0 ? (
        <div style={{ border: '1px dashed #bbb', borderRadius: 16, padding: 28 }}>
          No content yet. Open <a href="/admin"><strong>Admin</strong></a> and create the first {current.title.toLowerCase()}.
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {result.docs.map((doc) => {
            const title = String((doc as Record<string, unknown>)[current.field] ?? 'Untitled')
            return (
              <article key={String(doc.id)} style={{ border: '1px solid #ddd', borderRadius: 16, padding: 22, background: '#fff' }}>
                <h2 style={{ marginTop: 0 }}>{title}</h2>
                <small style={{ color: '#888' }}>READ60 · {current.title}</small>
              </article>
            )
          })}
        </div>
      )}
    </main>
  )
}
