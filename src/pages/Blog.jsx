import { Link } from 'react-router-dom'
import { posts, formatDate } from '../lib/posts.js'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'

export default function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:px-8">
      <Reveal>
        <p className="label mb-3 text-sky">Logbook</p>
        <h1 className="font-display text-3xl font-bold text-fog sm:text-4xl">Catatan &amp; Tulisan</h1>
        <p className="mt-3 max-w-xl text-fog-muted">
          Coretan seputar telekomunikasi penerbangan, CNS/ATM, dan dunia pemrograman.
        </p>
      </Reveal>

      <div className="mt-12 space-y-4">
        {posts.length === 0 && (
          <p className="text-sm text-fog-muted">Belum ada tulisan. Segera hadir.</p>
        )}
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link to={`/blog/${post.slug}`} className="card card-hover group block p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-fog-faint">
                <time>{formatDate(post.date)}</time>
                <span className="text-sky/40">·</span>
                <span>{post.readingTime} mnt baca</span>
              </div>
              <h2 className="mt-2 font-display text-xl font-semibold text-fog transition-colors group-hover:text-sky">
                {post.title}
              </h2>
              {post.excerpt && <p className="mt-2 text-sm leading-relaxed text-fog-muted">{post.excerpt}</p>}
              <div className="mt-4 flex items-center justify-between">
                <ul className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <li key={t} className="font-display text-xs text-sky/70">
                      #{t}
                    </li>
                  ))}
                </ul>
                <span className="flex items-center gap-1 text-xs font-medium text-sky opacity-0 transition-opacity group-hover:opacity-100">
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
