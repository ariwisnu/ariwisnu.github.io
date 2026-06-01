import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, formatDate } from '../lib/posts.js'
import { profile } from '../data/profile.js'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import NotFound from './NotFound.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  useEffect(() => {
    if (post) document.title = `${post.title} — ${profile.shortName}`
    return () => {
      document.title = `${profile.name} — ${profile.role}`
    }
  }, [post])

  if (!post) return <NotFound />

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6 md:px-8">
      <Reveal>
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-fog-muted transition-colors hover:text-sky"
        >
          <Icon name="chevronLeft" className="h-4 w-4" /> Kembali ke Logbook
        </Link>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-fog-faint">
          <time>{formatDate(post.date)}</time>
          <span className="text-sky/40">·</span>
          <span>{post.readingTime} mnt baca</span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-fog sm:text-4xl">{post.title}</h1>
        {post.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li key={t} className="rounded-full border border-line px-2.5 py-0.5 font-display text-xs text-sky/80">
                #{t}
              </li>
            ))}
          </ul>
        )}
        <hr className="my-8 border-line" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="prose-night">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
      </Reveal>

      <hr className="my-10 border-line" />
      <div className="flex items-center justify-between">
        <Link to="/blog" className="text-sm text-fog-muted transition-colors hover:text-sky">
          ← Semua tulisan
        </Link>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm text-fog-muted transition-colors hover:text-sky"
        >
          Diskusi via email →
        </a>
      </div>
    </article>
  )
}
