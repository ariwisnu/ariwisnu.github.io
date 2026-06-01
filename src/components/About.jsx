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
      <SectionHeading index="01" title="Tentang Saya" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_0.9fr]">
        <Reveal className="space-y-4 leading-relaxed text-fog-muted">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6">
            <p className="label mb-4 flex items-center gap-2 text-sky">
              <Icon name="signal" className="h-4 w-4" /> Station Log
            </p>
            <dl className="space-y-3">
              {facts.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between gap-3 border-b border-line/70 pb-2">
                  <dt className="text-xs uppercase tracking-wider text-fog-faint">{f.k}</dt>
                  <dd className="text-right text-sm font-medium text-fog">{f.v}</dd>
                </div>
              ))}
            </dl>
            <p className="label mb-3 mt-6 text-sky">Sertifikasi</p>
            <ul className="space-y-2.5">
              {certifications.map((c) => (
                <li key={c.title} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-beam" />
                  <span>
                    <span className="text-fog">{c.title}</span>
                    <span className="block text-[12px] leading-snug text-fog-faint">
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
