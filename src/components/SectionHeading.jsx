import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, title, sub }) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-center gap-3">
        <span className="font-display text-sm font-semibold text-sky">{index}</span>
        <span className="h-px w-8 bg-sky/40" />
        <h2 className="font-display text-2xl font-semibold text-fog sm:text-3xl">{title}</h2>
        <span className="ml-1 h-px flex-1 bg-line" />
      </div>
      {sub && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fog-muted">{sub}</p>}
    </Reveal>
  )
}
