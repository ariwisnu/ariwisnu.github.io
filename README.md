# ariwisnu.github.io

Portfolio **I Putu Ari Wisnu Pradana** — Teknisi Telekomunikasi Penerbangan (CNS/ATM).
Tema "Radar Console": React + Vite + Tailwind CSS, di-deploy ke GitHub Pages.

## Jalankan lokal

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & preview

```bash
npm run build      # output ke dist/
npm run preview
```

## Edit konten (tanpa sentuh kode)

| Mau ubah | File |
| --- | --- |
| Nama, intro, kontak, sosial | `src/data/profile.js` |
| Pengalaman kerja | `src/data/experience.js` |
| Keahlian (pilar CNS/ATM) | `src/data/skills.js` |
| Proyek | `src/data/projects.js` |
| Tulisan blog | `src/content/posts/*.md` |

### Tambah tulisan blog

Buat file baru `src/content/posts/YYYY-MM-DD-judul.md`:

```markdown
---
title: "Judul Tulisan"
date: "2026-06-01"
excerpt: "Ringkasan singkat."
tags: ["aviasi", "web"]
---

Isi tulisan dalam Markdown...
```

### CV / Resume

Tombol "Download CV" menunjuk ke `public/cv.pdf`. Ganti file itu dengan CV final Anda,
atau regenerasi placeholder dengan `npm run cv` (edit teks di `scripts/gen-cv.cjs`).

## Deploy

Push ke branch `main` -> GitHub Action (`.github/workflows/deploy.yml`) otomatis build
dan deploy ke GitHub Pages. Aktifkan sekali di **Settings -> Pages -> Source: GitHub Actions**.

---
Dibangun dengan React, Vite, dan Tailwind CSS.
