import { useEffect, useRef } from 'react'

// Fixed "aircraft" blips in polar coords (radius 0..1, angle in radians).
const BLIPS = [
  { r: 0.42, a: 0.6 },
  { r: 0.72, a: 2.1 },
  { r: 0.55, a: 3.9 },
  { r: 0.3, a: 5.2 },
  { r: 0.84, a: 4.6 },
  { r: 0.64, a: 1.2 },
]

const SKY = '#38bdf8'
const SKY_BRIGHT = '#7dd3fc'
const BEAM = '#fbbf24'

export default function RadarScope({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let size = 0
    let raf = 0
    let angle = -Math.PI / 2 // start at 12 o'clock

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      const rect = canvas.getBoundingClientRect()
      size = Math.max(1, Math.floor(rect.width))
      canvas.width = size * dpr
      canvas.height = size * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw() {
      const c = size / 2
      const R = c * 0.92
      ctx.clearRect(0, 0, size, size)

      // glass background
      const bg = ctx.createRadialGradient(c, c, 0, c, c, R)
      bg.addColorStop(0, 'rgba(20, 29, 51, 0.95)')
      bg.addColorStop(1, 'rgba(7, 11, 22, 0.98)')
      ctx.fillStyle = bg
      ctx.beginPath()
      ctx.arc(c, c, R, 0, Math.PI * 2)
      ctx.fill()

      // range rings
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.18)'
      ctx.lineWidth = 1
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath()
        ctx.arc(c, c, (R * i) / 4, 0, Math.PI * 2)
        ctx.stroke()
      }

      // cross + diagonals
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)'
      ctx.beginPath()
      ctx.moveTo(c - R, c)
      ctx.lineTo(c + R, c)
      ctx.moveTo(c, c - R)
      ctx.lineTo(c, c + R)
      ctx.stroke()

      // bearing ticks every 30deg
      ctx.strokeStyle = 'rgba(152, 167, 199, 0.28)'
      for (let d = 0; d < 360; d += 30) {
        const rad = (d * Math.PI) / 180
        const inner = d % 90 === 0 ? R * 0.9 : R * 0.95
        ctx.beginPath()
        ctx.moveTo(c + Math.cos(rad) * inner, c + Math.sin(rad) * inner)
        ctx.lineTo(c + Math.cos(rad) * R, c + Math.sin(rad) * R)
        ctx.stroke()
      }

      // sweep (conic gradient trail) — trail follows behind the leading line
      ctx.save()
      ctx.beginPath()
      ctx.arc(c, c, R, 0, Math.PI * 2)
      ctx.clip()
      if (typeof ctx.createConicGradient === 'function') {
        const g = ctx.createConicGradient(angle, c, c)
        g.addColorStop(0, 'rgba(56, 189, 248, 0)')
        g.addColorStop(0.62, 'rgba(56, 189, 248, 0)')
        g.addColorStop(0.92, 'rgba(56, 189, 248, 0.12)')
        g.addColorStop(1, 'rgba(56, 189, 248, 0.42)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, size, size)
      } else {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.1)'
        ctx.beginPath()
        ctx.moveTo(c, c)
        ctx.arc(c, c, R, angle - 0.5, angle)
        ctx.closePath()
        ctx.fill()
      }
      // leading edge line
      ctx.strokeStyle = SKY
      ctx.lineWidth = 1.4
      ctx.shadowColor = SKY
      ctx.shadowBlur = 9
      ctx.beginPath()
      ctx.moveTo(c, c)
      ctx.lineTo(c + Math.cos(angle) * R, c + Math.sin(angle) * R)
      ctx.stroke()
      ctx.restore()

      // blips that light up as the sweep passes
      for (const b of BLIPS) {
        const x = c + Math.cos(b.a) * R * b.r
        const y = c + Math.sin(b.a) * R * b.r
        let diff = angle - b.a
        diff = ((diff % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
        const intensity = reduced ? 0.6 : Math.max(0.1, 1 - diff / (Math.PI * 1.4))
        ctx.beginPath()
        ctx.fillStyle = `rgba(125, 211, 252, ${intensity})`
        ctx.shadowColor = SKY_BRIGHT
        ctx.shadowBlur = 9 * intensity
        ctx.arc(x, y, 2.2 + intensity * 1.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // center dot
      ctx.beginPath()
      ctx.fillStyle = BEAM
      ctx.arc(c, c, 2.2, 0, Math.PI * 2)
      ctx.fill()
    }

    let last = performance.now()
    function loop(now) {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      angle += dt * 1.0 // ~6.3s per revolution (calm)
      draw()
      raf = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(() => {
      resize()
      draw()
    })
    ro.observe(canvas)
    resize()

    if (reduced) {
      angle = -Math.PI / 4
      draw()
    } else {
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <div className={`relative aspect-square ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-sky/15" />
    </div>
  )
}
