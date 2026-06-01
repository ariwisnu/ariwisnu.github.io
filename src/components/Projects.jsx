import { projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 md:px-8">
      <SectionHeading index="04" title="Proyek" sub="Eksperimen dan aplikasi web yang saya bangun." />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((proj, i) => (
          <Reveal key={proj.title} delay={i * 0.06} className={proj.featured ? 'sm:col-span-2' : ''}>
            <article className="card card-hover flex h-full flex-col p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-ink-700/50 text-sky">
                  <Icon name="folder" className="h-5 w-5" />
                </span>
                <div className="flex items-center gap-3">
                  {proj.repo && (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Kode di GitHub"
                      className="text-fog-faint transition-colors hover:text-sky"
                    >
                      <Icon name="github" className="h-5 w-5" />
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Demo langsung"
                      className="text-fog-faint transition-colors hover:text-sky"
                    >
                      <Icon name="external" className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-fog">
                <a href={proj.demo || proj.repo} target="_blank" rel="noreferrer" className="transition-colors hover:text-sky">
                  {proj.title}
                </a>
              </h3>
              {proj.note && (
                <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-[11px] text-fog-faint">
                  <span className="h-1.5 w-1.5 rounded-full bg-beam" /> {proj.note}
                </span>
              )}
              <p className="mt-3 flex-grow text-sm leading-relaxed text-fog-muted">{proj.desc}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <li key={t} className="font-display text-xs font-medium text-sky/80">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-8 text-center">
        <p className="mb-3 text-xs text-fog-faint">
          Repositori bersifat privat — tautan menuju hasil/demo langsung.
        </p>
        <a
          href="https://www.linkedin.com/in/ariwisnu"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-fog-muted transition-colors hover:text-sky"
        >
          <Icon name="linkedin" className="h-4 w-4" /> Selengkapnya di LinkedIn
          <Icon name="arrowUpRight" className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  )
}
