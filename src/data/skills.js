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
    items: ['ATC Automation', 'AMHS', 'Server & Jaringan'],
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
  'Google IT Support Specialization — Coursera (2022)',
  'IT Support — Digital Talent Scholarship (2022)',
]
