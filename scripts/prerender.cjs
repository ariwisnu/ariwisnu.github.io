// Post-build prerender: materialize a static index.html at every known SPA
// route so GitHub Pages serves them with HTTP 200 instead of falling through
// to 404.html (which returns a 404 status + a client-side redirect flash).
// The shell is the built index.html; the SPA boots and react-router renders
// the matching route. Per-route <title> is still set client-side in the page
// components, so Googlebot (which renders JS) indexes the right title.
//
// Unknown routes still hit public/404.html — that fallback is intentionally
// kept for genuinely missing URLs.
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const postsDir = path.join(root, 'src', 'content', 'posts')

const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

// Mirror the slug logic in src/lib/posts.js: frontmatter `slug:` wins,
// otherwise the filename with the leading YYYY-MM-DD- date prefix stripped.
function slugOf(file) {
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
  const fm = /^---\s*\n([\s\S]*?)\n---/.exec(raw)
  if (fm) {
    const line = fm[1].split('\n').find((l) => /^slug\s*:/.test(l))
    if (line) {
      const value = line.replace(/^slug\s*:/, '').trim().replace(/^["']|["']$/g, '')
      if (value) return value
    }
  }
  return file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

const slugs = fs
  .readdirSync(postsDir)
  .filter((f) => f.endsWith('.md'))
  .map(slugOf)

const routes = ['blog', ...slugs.map((s) => `blog/${s}`)]

for (const route of routes) {
  const dir = path.join(dist, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), shell)
}

console.log(`prerender: wrote ${routes.length} route shells -> ${routes.join(', ')}`)
