// Keahlian dipetakan ke 4 pilar CNS/ATM — inti pekerjaan teknisi penerbangan.
// Item bertanda "Fokus harian @ Unit Maumere": VHF A/G, Voice Recorder (VRS), DVOR.
export const pillars = [
  {
    code: 'C',
    title: 'Communication',
    desc: 'Suara & data darat–udara',
    items: ['VHF A/G', 'Voice Recorder (VRS)', 'Recording System', 'HF SSB'],
  },
  {
    code: 'N',
    title: 'Navigation',
    desc: 'Panduan posisi & pendaratan',
    items: ['DVOR', 'DME', 'ILS', 'NDB'],
  },
  {
    code: 'S',
    title: 'Surveillance',
    desc: 'Deteksi & pelacakan pesawat',
    items: ['Radar (PSR / SSR)', 'ADS-B', 'MLAT'],
  },
  {
    code: 'D',
    title: 'Data Processing',
    desc: 'Otomasi & pesan aeronautika',
    items: ['ATC Automation (FDPS / RDPS)', 'AFTN / AMHS', 'A-SMGCS'],
  },
]

// Top skills (dari LinkedIn).
export const topSkills = [
  'Air Traffic Control Collaboration',
  'Air Navigation Systems',
  'Incident Response',
  'Regulatory Compliance',
  'Navigation Systems',
]

// Keahlian pendukung di luar ruang peralatan.
export const supportSkills = {
  title: 'Jaringan, IT & Web',
  items: ['MikroTik', 'Fiber Optic', 'Networking', 'IT Support', 'JavaScript', 'React', 'Next.js', 'Git'],
}

// Sertifikasi (dari LinkedIn).
export const certifications = [
  {
    title: 'TCC Data Processing — Batch I (Rating)',
    issuer: 'AirNav Indonesia × Politeknik Penerbangan Curug (PPI Curug)',
    year: '2026',
  },
  {
    title: 'Google IT Support Specialization',
    issuer: 'Coursera',
    year: '2022',
  },
  {
    title: 'IT Support',
    issuer: 'Digital Talent Scholarship (Kominfo)',
    year: '2022',
  },
]
