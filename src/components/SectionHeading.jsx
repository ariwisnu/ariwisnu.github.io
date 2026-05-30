import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, title, sub }) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-phosphor">{index}</span>
        <h2 className="font-mono text-2xl font-semibold text-radar-text sm:text-3xl">{title}</h2>
        <span className="h-px flex-1 bg-radar-line" />
      </div>
      {sub && <p className="mt-3 max-w-2xl text-sm text-radar-muted">{sub}</p>}
    </Reveal>
  )
}
