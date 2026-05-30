// Keahlian dipetakan ke 4 pilar CNS/ATM — inti pekerjaan teknisi penerbangan.
export const pillars = [
  {
    code: 'C',
    title: 'Communication',
    desc: 'Suara & data darat–udara',
    items: ['VHF A/G', 'HF SSB', 'Voice Recorder', 'Recording System', 'VSAT / AMSC'],
  },
  {
    code: 'N',
    title: 'Navigation',
    desc: 'Panduan posisi & pendaratan',
    items: ['DVOR / DME', 'ILS (LLZ / GP)', 'NDB'],
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
    items: ['AMHS', 'ATC System (FDP / RDP)', 'AMSC', 'Server & Jaringan'],
  },
]

// Keahlian pendukung di luar ruang peralatan.
export const supportSkills = {
  title: 'Pengembangan Web & IT',
  items: ['JavaScript', 'React', 'HTML & CSS', 'Node.js', 'Git', 'Jaringan / Networking'],
}

// Sertifikasi.
export const certifications = ['Junior Web Developer (BNSP)']
