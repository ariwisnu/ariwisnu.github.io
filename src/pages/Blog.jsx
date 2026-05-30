import { Link } from 'react-router-dom'
import { posts, formatDate } from '../lib/posts.js'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

export default function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:px-8">
      <Reveal>
        <p className="readout mb-3 text-phosphor">// Logbook</p>
        <h1 className="text-3xl font-bold text-radar-text sm:text-4xl">Catatan &amp; Tulisan</h1>
        <p className="mt-3 max-w-xl text-radar-muted">
          Coretan seputar telekomunikasi penerbangan, CNS/ATM, dan dunia pemrograman.
        </p>
      </Reveal>

      <div className="mt-12 space-y-4">
        {posts.length === 0 && (
          <p className="font-mono text-sm text-radar-muted">Belum ada tulisan. Segera hadir.</p>
        )}
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link
              to={`/blog/${post.slug}`}
              className="panel panel-hover group block p-6"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-radar-muted">
                <time>{formatDate(post.date)}</time>
                <span className="text-phosphor/40">·</span>
                <span>{post.readingTime} mnt baca</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-radar-text transition-colors group-hover:text-phosphor">
                {post.title}
              </h2>
              {post.excerpt && <p className="mt-2 text-sm leading-relaxed text-radar-muted">{post.excerpt}</p>}
              <div className="mt-4 flex items-center justify-between">
                <ul className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <li key={t} className="font-mono text-xs text-phosphor/70">
                      #{t}
                    </li>
                  ))}
                </ul>
                <span className="flex items-center gap-1 font-mono text-xs text-phosphor opacity-0 transition-opacity group-hover:opacity-100">
                  Baca <Icon name="arrowUpRight" className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
