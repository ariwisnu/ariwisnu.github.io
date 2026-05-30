import { profile } from '../data/profile.js'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-24 text-center sm:px-6 md:px-8">
      <Reveal>
        <p className="readout mb-4 text-phosphor">// 05 · Kontak</p>
        <h2 className="text-3xl font-bold text-radar-text sm:text-5xl">Mari Terhubung</h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-radar-muted">
          Punya proyek menarik, peluang kerja, atau sekadar ingin berbincang soal aviasi dan teknologi?
          Saluran saya selalu terbuka — kirim pesan, saya pasti membalas.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-2.5 rounded border border-phosphor/60 bg-phosphor/5 px-6 py-3.5 font-mono text-sm text-phosphor transition-all hover:bg-phosphor/15 hover:shadow-glow"
          >
            <Icon name="mail" className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.cv}
            download
            className="flex items-center gap-2 rounded border border-radar-line px-6 py-3.5 font-mono text-sm text-radar-muted transition-colors hover:border-phosphor/40 hover:text-phosphor"
          >
            <Icon name="download" className="h-4 w-4" /> Download CV
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          {profile.socials
            .filter((s) => s.icon !== 'mail')
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-radar-muted transition-colors hover:text-phosphor"
              >
                <Icon name={s.icon} className="h-4 w-4" /> {s.label}
              </a>
            ))}
        </div>
      </Reveal>
    </section>
  )
}
