import { Link } from 'react-router-dom'
import Icon from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-display text-7xl font-bold text-sky text-glow sm:text-8xl">404</p>
      <p className="mt-4 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-beam">
        <span className="h-1.5 w-1.5 animate-pulse2 rounded-full bg-beam" /> Signal Lost
      </p>
      <p className="mt-5 max-w-md text-fog-muted">
        Halaman yang Anda cari berada di luar jangkauan radar. Mari kembali ke menara.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <Icon name="chevronLeft" className="h-4 w-4" /> Kembali ke Beranda
      </Link>
    </div>
  )
}
