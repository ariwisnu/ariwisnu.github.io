// Loads every markdown file in src/content/posts at build time.
// Frontmatter is parsed with a tiny YAML-subset reader (no deps / no Node Buffer).
const files = import.meta.glob('../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseFrontmatter(raw) {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, body: raw.trim() }
  const data = {}
  for (const line of match[1].split('\n')) {
    const m = /^([A-Za-z0-9_]+)\s*:\s*(.*)$/.exec(line)
    if (!m) continue
    let value = m[2].trim()
    // strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    // inline array: [a, b, c]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    }
    data[m[1]] = value
  }
  return { data, body: match[2].trim() }
}

function readingTime(body) {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const fileSlug = path.split('/').pop().replace(/\.md$/, '')
    const slug = data.slug || fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '')
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
      readingTime: readingTime(body),
      body,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}
