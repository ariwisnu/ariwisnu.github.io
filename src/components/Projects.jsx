import { projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 md:px-8">
      <SectionHeading index="// 04" title="Proyek" sub="Eksperimen dan aplikasi web yang saya bangun." />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((proj, i) => (
          <Reveal key={proj.title} delay={i * 0.06} className={proj.featured ? 'sm:col-span-2' : ''}>
            <article className="panel panel-hover flex h-full flex-col p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded border border-radar-line text-phosphor">
                  <Icon name="folder" className="h-5 w-5" />
                </span>
                <div className="flex items-center gap-3">
                  {proj.repo && (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Kode di GitHub"
                      className="text-radar-muted transition-colors hover:text-phosphor"
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
                      className="text-radar-muted transition-colors hover:text-phosphor"
                    >
                      <Icon name="external" className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-radar-text">
                <a href={proj.demo || proj.repo} target="_blank" rel="noreferrer" className="hover:text-phosphor">
                  {proj.title}
                </a>
              </h3>
              <p className="mt-2 flex-grow leading-relaxed text-sm text-radar-muted">{proj.desc}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <li key={t} className="font-mono text-xs text-phosphor/80">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-8 text-center">
        <a
          href="https://github.com/ariwisnu"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-radar-muted transition-colors hover:text-phosphor"
        >
          <Icon name="github" className="h-4 w-4" /> Lihat selengkapnya di GitHub
          <Icon name="arrowUpRight" className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  )
}
