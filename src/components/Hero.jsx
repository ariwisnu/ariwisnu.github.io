import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'
import RadarScope from './RadarScope.jsx'
import Icon from './Icons.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:pt-24 md:pb-24">
        {/* Left: copy */}
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="readout mb-5 flex flex-wrap items-center gap-x-3 gap-y-1"
          >
            <span className="text-phosphor">▌LAT 08.6°S</span>
            <span>LON 122.2°E</span>
            <span className="hidden sm:inline">STN WATC</span>
            <span className="text-amber animate-flicker">LINK OK</span>
          </motion.p>

          <motion.p custom={1} variants={fadeUp} initial="hidden" animate="show" className="mb-3 font-mono text-phosphor">
            Hai, nama saya
          </motion.p>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold leading-[1.05] tracking-tight text-radar-text sm:text-6xl"
          >
            {profile.name}.
          </motion.h1>

          <motion.h2
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-3 text-2xl font-semibold leading-tight text-radar-muted sm:text-4xl"
          >
            {profile.tagline}
          </motion.h2>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl leading-relaxed text-radar-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to={{ pathname: '/', hash: '#projects' }}
              className="group flex items-center gap-2 rounded border border-phosphor/60 bg-phosphor/5 px-5 py-3 font-mono text-sm text-phosphor transition-all hover:bg-phosphor/15 hover:shadow-glow"
            >
              Lihat Proyek
              <Icon name="chevronRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={profile.cv}
              download
              className="flex items-center gap-2 rounded border border-radar-line px-5 py-3 font-mono text-sm text-radar-muted transition-colors hover:border-phosphor/40 hover:text-phosphor"
            >
              <Icon name="download" className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center gap-5"
          >
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.icon === 'mail' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={s.label}
                className="text-radar-muted transition-all hover:-translate-y-0.5 hover:text-phosphor"
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: radar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative rounded-xl border border-radar-line bg-radar-panel/40 p-3 shadow-panel">
            {/* corner ticks */}
            <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-phosphor/50" />
            <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-phosphor/50" />
            <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-phosphor/50" />
            <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-phosphor/50" />

            <RadarScope />

            <div className="pointer-events-none absolute inset-3 flex flex-col justify-between p-3">
              <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-phosphor/70">
                <span>{profile.callSign}-RDR</span>
                <span className="animate-blink text-amber">● REC</span>
              </div>
              <div className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-radar-muted">
                Scanning · 4 NM
              </div>
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-radar-muted">
            {profile.roleShort} · {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
