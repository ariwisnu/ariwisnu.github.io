/* Generates a clean one-page CV at public/cv.pdf — zero dependencies.
   Replace public/cv.pdf anytime with your own final CV. Run: npm run cv */
const fs = require('fs')
const path = require('path')

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

const L = []
const rules = []
const line = (t, x, y, s, b = false) => L.push({ t, x, y, s, b })
const rule = (y) => rules.push(y)

// ---- Layout (A4 595x842, ASCII only for byte-safe encoding) ----
line('I Putu Ari Wisnu Pradana', 56, 800, 22, true)
line('Air Navigation Systems Technician - AirNav Indonesia, Unit Maumere (WATC)', 56, 779, 11)
line('i.pradana@airnavindonesia.co.id  |  Maumere, Sikka - NTT', 56, 763, 10)
line('linkedin.com/in/ariwisnu  |  github.com/ariwisnu', 56, 749, 9)
rule(741)

line('RINGKAS', 56, 723, 12, true)
line('Satu-satunya teknisi on-site di Unit Maumere (WATC) - menjaga peralatan', 56, 706, 9.5)
line('Communication & Navigation (VHF A/G, Voice Recorder, DVOR) demi keselamatan penerbangan.', 56, 693, 9.5)
rule(683)

line('PENGALAMAN', 56, 665, 12, true)
line('Telecommunications Technician - AirNav Indonesia (Maumere)', 56, 648, 10.5, true)
line('Okt 2025 - Sekarang  |  Sole on-site PoC, Unit Maumere (WATC)', 56, 635, 9)
line('- Operasional harian VHF A/G, Voice Recorder (VRS), DVOR; preventive & corrective maintenance.', 56, 622, 9)
line('- Respons insiden dgn ATC & regional (Kupang); kepatuhan PM 87/2021 & logbook.', 56, 610, 9)

line('Telecommunications Technician (Apprenticeship) - AirNav Indonesia (Maumere)', 56, 590, 10.5, true)
line('Okt 2024 - Sep 2025', 56, 577, 9)
line('- Maintenance dasar & diagnosa VHF/VRS/DVOR di bawah teknisi tersertifikasi.', 56, 564, 9)

line('Call Center & Technical Support - Neuviz Networks (Bali)', 56, 544, 10.5, true)
line('Jun 2022 - Okt 2024', 56, 531, 9)
line('- Solusi teknis pelanggan; monitoring jaringan (Fiber Optic, MikroTik).', 56, 518, 9)

line('CNSA Technician (Job Training) - AirNav Indonesia (Bali)', 56, 498, 10.5, true)
line('Mar 2018 - Feb 2019', 56, 485, 9)
line('- Relokasi & pemeliharaan peralatan C/N/S & otomasi bandara.', 56, 472, 9)
rule(458)

line('PENDIDIKAN', 56, 440, 12, true)
line('Sarjana Terapan Teknik (S.Tr.T), Teknik Telekomunikasi - PENS', 56, 423, 9.5, true)
line('Sep 2020 - Apr 2022  |  Cum Laude, TOEFL 603', 56, 411, 9)
line('Ahli Madya (A.Md.), Teknik Telekomunikasi & Navigasi Udara - ATKP Makassar', 56, 397, 9.5, true)
line('Sep 2016 - Sep 2019  |  Cum Laude, Best Graduate (IPK 3,58)', 56, 385, 9)
rule(371)

line('KEAHLIAN', 56, 353, 12, true)
line('Communication : VHF A/G, Voice Recorder (VRS), Recording, HF', 56, 336, 9)
line('Navigation    : DVOR, DME, ILS, NDB', 56, 323, 9)
line('Surveillance  : Radar (PSR/SSR), ADS-B, MLAT', 56, 310, 9)
line('Data Process. : ATC Automation (FDPS/RDPS), AFTN/AMHS, A-SMGCS', 56, 297, 9)
line('IT & Web      : MikroTik, Fiber Optic, IT Support, JavaScript, React, Next.js', 56, 284, 9)
rule(270)

line('SERTIFIKASI', 56, 252, 12, true)
line('TCC Data Processing - Batch I (Rating) - AirNav x PPI Curug (2026)', 56, 235, 9)
line('Google IT Support Specialization - Coursera (2022)', 56, 222, 9)
line('IT Support - Digital Talent Scholarship (2022)', 56, 209, 9)

line('Dokumen ini dihasilkan otomatis - ganti public/cv.pdf dengan CV final Anda.', 56, 56, 8)

// ---- Build content stream ----
let content = '0 0 0 rg\n'
for (const o of L) {
  content += `BT /${o.b ? 'F2' : 'F1'} ${o.s} Tf ${o.x} ${o.y} Td (${esc(o.t)}) Tj ET\n`
}
content += '0.6 w 0.55 0.6 0.58 RG\n'
for (const y of rules) content += `56 ${y} m 539 ${y} l S\n`

// ---- Assemble PDF objects ----
const objs = {
  1: '<< /Type /Catalog /Pages 2 0 R >>',
  2: '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  3: '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
  4: '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  5: '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  6: `<< /Length ${Buffer.byteLength(content, 'latin1')} >>\nstream\n${content}endstream`,
}

let pdf = '%PDF-1.4\n'
const offsets = {}
for (let i = 1; i <= 6; i++) {
  offsets[i] = Buffer.byteLength(pdf, 'latin1')
  pdf += `${i} 0 obj\n${objs[i]}\nendobj\n`
}
const xrefStart = Buffer.byteLength(pdf, 'latin1')
pdf += 'xref\n0 7\n0000000000 65535 f \n'
for (let i = 1; i <= 6; i++) pdf += String(offsets[i]).padStart(10, '0') + ' 00000 n \n'
pdf += `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

const out = path.join(__dirname, '..', 'public', 'cv.pdf')
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, Buffer.from(pdf, 'latin1'))
console.log('Wrote', out, `(${Buffer.byteLength(pdf, 'latin1')} bytes)`)
