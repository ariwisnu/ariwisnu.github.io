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
line('Teknisi Telekomunikasi Penerbangan (CNS/ATM) - AirNav Indonesia', 56, 779, 11)
line('i.pradana@airnavindonesia.co.id  |  Sikka, NTT', 56, 763, 10)
line('github.com/ariwisnu  |  linkedin.com/in/ariwisnu', 56, 749, 9)
rule(741)

line('RINGKAS', 56, 723, 12, true)
line('Teknisi CNS/ATM yang merawat sistem Communication, Navigation, Surveillance,', 56, 706, 9.5)
line('dan Data Processing demi keselamatan lalu lintas udara. Junior Web Developer.', 56, 693, 9.5)
rule(683)

line('PENGALAMAN', 56, 665, 12, true)
line('Telecommunications Technician (CNS) - AirNav Indonesia', 56, 647, 10.5, true)
line('Sikka, NTT  |  Okt 2024 - Sekarang', 56, 634, 9)
line('- Menjaga keandalan sistem komunikasi vital untuk lalu lintas udara.', 56, 621, 9)
line('- Instalasi, konfigurasi, dan troubleshooting peralatan CNS.', 56, 609, 9)

line('Call Center & Technical Support - Neuviz Networks', 56, 589, 10.5, true)
line('Bali  |  Jun 2022 - Okt 2024', 56, 576, 9)
line('- Solusi teknis ke pelanggan; monitoring jaringan & lalu lintas internet.', 56, 563, 9)

line('CNSA Technician (Job Training) - AirNav Indonesia', 56, 543, 10.5, true)
line('Bali  |  Mar 2018 - Feb 2019', 56, 530, 9)
line('- Relokasi & pemeliharaan peralatan ATC, Navigasi, dan Surveillance.', 56, 517, 9)
rule(503)

line('KEAHLIAN (CNS/ATM)', 56, 485, 12, true)
line('Communication : VHF A/G, HF SSB, Voice Recorder, Recording, VSAT/AMSC', 56, 468, 9)
line('Navigation    : DVOR/DME, ILS (LLZ/GP), NDB', 56, 455, 9)
line('Surveillance  : Radar (PSR/SSR), ADS-B, MLAT', 56, 442, 9)
line('Data Process. : AMHS, ATC System (FDP/RDP), AMSC, Server/Jaringan', 56, 429, 9)
line('Web & IT      : JavaScript, React, HTML/CSS, Node.js, Git', 56, 416, 9)
rule(402)

line('SERTIFIKASI', 56, 384, 12, true)
line('Junior Web Developer - BNSP', 56, 367, 9)

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
