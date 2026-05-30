import { profile } from '../data/profile.js'
import Icon from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-radar-line">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-5">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.icon === 'mail' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={s.label}
                className="text-radar-muted transition-colors hover:text-phosphor hover:-translate-y-0.5"
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.18em] text-radar-muted">
            {profile.name}
          </p>
          <p className="font-mono text-[11px] text-radar-muted/70">
            Dibangun dengan React · Vite · Tailwind CSS &nbsp;|&nbsp; WATC · 08°38′S 122°14′E
          </p>
        </div>
      </div>
    </footer>
  )
}
