import { pillars, supportSkills, topSkills } from '../data/skills.js'
import Icon, { pillarIcon } from './Icons.jsx'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 md:px-8">
      <SectionHeading
        index="// 03"
        title="Keahlian"
        sub="Empat pilar CNS/ATM yang menjaga lalu lintas udara tetap aman — inilah peralatan yang saya tangani."
      />

      <Reveal className="mb-6 flex flex-wrap items-center gap-2">
        <span className="readout mr-1 text-phosphor">Top skills:</span>
        {topSkills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-radar-line bg-radar-panel/60 px-3 py-1 font-mono text-xs text-radar-text/90"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.code} delay={i * 0.06}>
            <article className="panel panel-hover group h-full p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-phosphor/40 bg-phosphor/5 font-mono text-2xl font-bold text-phosphor text-glow">
                  {p.code}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <Icon name={pillarIcon[p.code]} className="h-4 w-4 text-amber" />
                    <h3 className="font-mono text-lg font-semibold text-radar-text">{p.title}</h3>
                  </div>
                  <p className="mt-0.5 text-sm text-radar-muted">{p.desc}</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.items.map((it) => (
                  <li
                    key={it}
                    className="rounded border border-radar-line bg-radar-bg/60 px-2.5 py-1 font-mono text-xs text-radar-text/90 transition-colors group-hover:border-phosphor/30"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-5">
        <div className="panel p-6">
          <div className="flex items-center gap-2">
            <Icon name="signal" className="h-4 w-4 text-phosphor" />
            <h3 className="font-mono text-lg font-semibold text-radar-text">{supportSkills.title}</h3>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {supportSkills.items.map((it) => (
              <li
                key={it}
                className="rounded border border-radar-line bg-radar-bg/60 px-2.5 py-1 font-mono text-xs text-radar-text/90"
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
