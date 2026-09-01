const sections = [
  { title: 'Blog', slug: 'blog', description: 'Articles, guides and knowledge.' },
  { title: 'Story', slug: 'story', description: 'Stories, fiction and storytelling.' },
  { title: 'News', slug: 'news', description: 'News from India and beyond.' },
  { title: 'Reels', slug: 'reels', description: 'Short-form video content.' },
]

export default function HomePage() {
  return (
    <main className="read60-home">
      <header className="read60-header">
        <div className="brand">READ60</div>
        <p>Choose what you want to read.</p>
      </header>
      <section className="section-grid" aria-label="READ60 sections">
        {sections.map((section) => (
          <a className="section-card" href={`/${section.slug}`} key={section.slug}>
            <span className="section-title">{section.title}</span>
            <span className="section-description">{section.description}</span>
          </a>
        ))}
      </section>
      <footer>Powered by Payload CMS</footer>
    </main>
  )
}
