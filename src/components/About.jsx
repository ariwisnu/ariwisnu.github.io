import { profile } from '../data/profile.js'
import { certifications } from '../data/skills.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

const facts = [
  { k: 'Stasiun', v: profile.org },
  { k: 'Unit', v: profile.unit },
  { k: 'Lokasi', v: profile.location },
  { k: 'Bidang', v: 'CNS / ATM' },
  { k: 'Status', v: profile.status },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 md:px-8">
      <SectionHeading index="// 01" title="Tentang Saya" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_0.9fr]">
        <Reveal className="space-y-4 leading-relaxed text-radar-muted">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="panel p-5">
            <p className="readout mb-4 flex items-center gap-2">
              <Icon name="signal" className="h-4 w-4 text-phosphor" /> Station Log
            </p>
            <dl className="space-y-3">
              {facts.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between gap-3 border-b border-radar-line/60 pb-2">
                  <dt className="font-mono text-xs uppercase tracking-wider text-radar-muted">{f.k}</dt>
                  <dd className="text-right font-mono text-sm text-radar-text">{f.v}</dd>
                </div>
              ))}
            </dl>
            <p className="readout mb-2 mt-5">Sertifikasi</p>
            <ul className="space-y-2.5">
              {certifications.map((c) => (
                <li key={c.title} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  <span>
                    <span className="text-radar-text">{c.title}</span>
                    <span className="block font-mono text-[11px] leading-snug text-radar-muted">
                      {c.issuer} · {c.year}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
