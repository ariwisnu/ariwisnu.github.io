import { experience } from '../data/experience.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 md:px-8">
      <SectionHeading index="// 02" title="Pengalaman Kerja" sub="Rekam jejak tugas — dari ruang peralatan hingga meja dukungan." />
      <div className="relative ml-1 border-l border-radar-line pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 0.05} className="relative pb-10 last:pb-0">
            {/* node */}
            <span
              className={`absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 sm:-left-[39px] ${
                job.current ? 'border-amber bg-radar-bg' : 'border-phosphor/70 bg-radar-bg'
              }`}
            >
              {job.current && <span className="h-1.5 w-1.5 animate-pulse2 rounded-full bg-amber" />}
            </span>

            <div className="panel panel-hover p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-radar-text">{job.role}</h3>
                  <p className="mt-0.5 font-mono text-sm text-phosphor">
                    {job.org}
                    <span className="text-radar-muted"> · {job.location}</span>
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded border px-2 py-1 font-mono text-[11px] ${
                    job.current
                      ? 'border-amber/50 text-amber'
                      : 'border-radar-line text-radar-muted'
                  }`}
                >
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-radar-muted">
                    <Icon name="chevronRight" className="mt-0.5 h-4 w-4 shrink-0 text-phosphor/70" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
