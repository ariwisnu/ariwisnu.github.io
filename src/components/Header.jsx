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
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-radar-line bg-radar-bg/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 md:px-8">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Beranda">
          <span className="grid h-9 w-9 place-items-center rounded border border-phosphor/40 font-mono text-sm font-bold text-phosphor text-glow transition-colors group-hover:bg-phosphor/10">
            {profile.callSign}
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-radar-muted sm:inline">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse2 rounded-full bg-phosphor align-middle" />
            {profile.status}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {sections.map((s, i) => (
            <Link
              key={s.id}
              to={{ pathname: '/', hash: `#${s.id}` }}
              className="font-mono text-sm text-radar-muted transition-colors hover:text-phosphor"
            >
              <span className="text-phosphor/50">0{i + 1}.</span> {s.label}
            </Link>
          ))}
          <Link
            to="/blog"
            className={`font-mono text-sm transition-colors hover:text-phosphor ${
              pathname.startsWith('/blog') ? 'text-phosphor' : 'text-radar-muted'
            }`}
          >
            <span className="text-phosphor/50">05.</span> Blog
          </Link>
          <a
            href={profile.cv}
            download
            className="flex items-center gap-2 rounded border border-phosphor/50 px-3 py-1.5 font-mono text-sm text-phosphor transition-colors hover:bg-phosphor/10"
          >
            <Icon name="download" className="h-4 w-4" /> CV
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-radar-text md:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-radar-line bg-radar-panel/95 px-4 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {sections.map((s, i) => (
              <Link
                key={s.id}
                to={{ pathname: '/', hash: `#${s.id}` }}
                className="rounded px-2 py-2.5 font-mono text-sm text-radar-muted hover:bg-phosphor/5 hover:text-phosphor"
              >
                <span className="text-phosphor/50">0{i + 1}.</span> {s.label}
              </Link>
            ))}
            <Link
              to="/blog"
              className="rounded px-2 py-2.5 font-mono text-sm text-radar-muted hover:bg-phosphor/5 hover:text-phosphor"
            >
              <span className="text-phosphor/50">05.</span> Blog
            </Link>
            <a
              href={profile.cv}
              download
              className="mt-2 flex items-center justify-center gap-2 rounded border border-phosphor/50 px-3 py-2.5 font-mono text-sm text-phosphor hover:bg-phosphor/10"
            >
              <Icon name="download" className="h-4 w-4" /> Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
