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
    transition: { delay: 0.07 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 md:grid-cols-[1.12fr_0.88fr] md:gap-10 md:pt-28 md:pb-28">
        {/* Left: copy */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-800/70 px-3.5 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky" />
            </span>
            <span className="label text-fog-muted">{profile.status} · WATC</span>
            <span className="hidden text-fog-faint sm:inline">·</span>
            <span className="hidden font-display text-[11px] tracking-wider text-fog-faint sm:inline">
              08.6°S 122.2°E
            </span>
          </motion.div>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-3 text-sm font-medium text-sky"
          >
            Hai, nama saya
          </motion.p>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-4xl font-bold leading-[1.04] tracking-tight text-fog sm:text-6xl"
          >
            {profile.name}.
          </motion.h1>

          <motion.h2
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-3 bg-gradient-to-r from-fog-muted to-fog-faint bg-clip-text text-2xl font-semibold leading-tight text-transparent sm:text-4xl"
          >
            {profile.tagline}
          </motion.h2>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl leading-relaxed text-fog-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link to={{ pathname: '/', hash: '#projects' }} className="btn-primary group">
              Lihat Proyek
              <Icon name="chevronRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a href={profile.cv} download className="btn-ghost">
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
                className="text-fog-faint transition-all hover:-translate-y-0.5 hover:text-sky"
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: refined instrument */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="group relative animate-float rounded-3xl border border-line bg-ink-800/50 p-4 shadow-card backdrop-blur-md">
            {/* corner ticks */}
            <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-sky/40" />
            <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-sky/40" />
            <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-sky/40" />
            <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-sky/40" />

            <RadarScope />

            <div className="pointer-events-none absolute inset-4 flex flex-col justify-between p-3">
              <div className="flex justify-between font-display text-[10px] uppercase tracking-widest text-sky/70">
                <span>{profile.callSign}-SCAN</span>
                <span className="flex items-center gap-1 text-beam">
                  <span className="h-1.5 w-1.5 animate-pulse2 rounded-full bg-beam" /> LIVE
                </span>
              </div>
              <div className="text-center font-display text-[10px] uppercase tracking-[0.3em] text-fog-faint">
                Scanning · 4 NM
              </div>
            </div>
          </div>
          <p className="mt-4 text-center font-display text-[11px] uppercase tracking-[0.25em] text-fog-faint">
            {profile.roleShort} · {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
