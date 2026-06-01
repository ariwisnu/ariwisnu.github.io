import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'
import Icon from './Icons.jsx'

const sections = [
  { label: 'Tentang', id: 'about' },
  { label: 'Pengalaman', id: 'experience' },
  { label: 'Keahlian', id: 'skills' },
  { label: 'Proyek', id: 'projects' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 md:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="Beranda">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-sky/40 bg-sky/10 font-display text-sm font-bold text-sky transition-colors group-hover:bg-sky/20">
            {profile.callSign}
          </span>
          <span className="hidden items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-fog-muted sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse2 rounded-full bg-sky" />
            {profile.status}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {sections.map((s, i) => (
            <Link
              key={s.id}
              to={{ pathname: '/', hash: `#${s.id}` }}
              className="group text-sm text-fog-muted transition-colors hover:text-fog"
            >
              <span className="font-display text-xs text-sky/60 group-hover:text-sky">0{i + 1}</span>{' '}
              {s.label}
            </Link>
          ))}
          <Link
            to="/blog"
            className={`group text-sm transition-colors hover:text-fog ${
              pathname.startsWith('/blog') ? 'text-fog' : 'text-fog-muted'
            }`}
          >
            <span className="font-display text-xs text-sky/60 group-hover:text-sky">05</span> Blog
          </Link>
          <a
            href={profile.cv}
            download
            className="flex items-center gap-2 rounded-xl border border-sky/50 px-3.5 py-1.5 text-sm font-medium text-sky transition-colors hover:bg-sky/10"
          >
            <Icon name="download" className="h-4 w-4" /> CV
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-fog md:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink-800/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {sections.map((s, i) => (
              <Link
                key={s.id}
                to={{ pathname: '/', hash: `#${s.id}` }}
                className="rounded-lg px-3 py-2.5 text-sm text-fog-muted transition-colors hover:bg-sky/5 hover:text-fog"
              >
                <span className="font-display text-xs text-sky/60">0{i + 1}</span> {s.label}
              </Link>
            ))}
            <Link
              to="/blog"
              className="rounded-lg px-3 py-2.5 text-sm text-fog-muted transition-colors hover:bg-sky/5 hover:text-fog"
            >
              <span className="font-display text-xs text-sky/60">05</span> Blog
            </Link>
            <a
              href={profile.cv}
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-sky/50 px-3 py-2.5 text-sm font-medium text-sky hover:bg-sky/10"
            >
              <Icon name="download" className="h-4 w-4" /> Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
