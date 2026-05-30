import { Link } from 'react-router-dom'
import Icon from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-mono text-7xl font-bold text-phosphor text-glow sm:text-8xl">404</p>
      <p className="mt-4 font-mono text-sm uppercase tracking-[0.3em] text-amber animate-blink">
        ◌ No Contact — Signal Lost
      </p>
      <p className="mt-5 max-w-md text-radar-muted">
        Halaman yang Anda cari berada di luar jangkauan radar. Mari kembali ke menara.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded border border-phosphor/60 bg-phosphor/5 px-5 py-3 font-mono text-sm text-phosphor transition-all hover:bg-phosphor/15 hover:shadow-glow"
      >
        <Icon name="chevronLeft" className="h-4 w-4" /> Kembali ke Beranda
      </Link>
    </div>
  )
}
