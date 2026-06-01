import { experience } from '../data/experience.js'
import { education } from '../data/education.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 md:px-8">
      <SectionHeading index="02" title="Pengalaman Kerja" sub="Rekam jejak tugas — dari ruang peralatan hingga meja dukungan." />
      <div className="relative ml-1 border-l border-line pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 0.05} className="relative pb-10 last:pb-0">
            {/* node */}
            <span
              className={`absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 bg-ink sm:-left-[39px] ${
                job.current ? 'border-beam' : 'border-sky/70'
              }`}
            >
              {job.current && <span className="h-1.5 w-1.5 animate-pulse2 rounded-full bg-beam" />}
            </span>

            <div className="card card-hover p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-fog">{job.role}</h3>
                  <p className="mt-0.5 text-sm font-medium text-sky">
                    {job.org}
                    <span className="text-fog-faint"> · {job.location}</span>
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-medium ${
                    job.current ? 'border-beam/50 text-beam' : 'border-line text-fog-faint'
                  }`}
                >
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-fog-muted">
                    <Icon name="chevronRight" className="mt-0.5 h-4 w-4 shrink-0 text-sky/70" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Pendidikan */}
      <Reveal className="mb-6 mt-16 flex items-center gap-3">
        <Icon name="navigation" className="h-4 w-4 text-sky" />
        <h3 className="font-display text-lg font-semibold text-fog">Pendidikan</h3>
        <span className="h-px flex-1 bg-line" />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 0.06}>
            <article className="card card-hover h-full p-5">
              <span className="label">{ed.period}</span>
              <h4 className="mt-2 font-semibold leading-snug text-fog">{ed.school}</h4>
              <p className="mt-1 text-sm font-medium text-sky">{ed.degree}</p>
              <p className="text-sm text-fog-muted">{ed.field}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ed.notes.map((n) => (
                  <li
                    key={n}
                    className="rounded-full border border-beam/40 px-2.5 py-0.5 text-[11px] font-medium text-beam"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
