# 🚀 My Portfolio — Luthfi Shidqi Habibulloh

Portfolio website personal yang dibangun dengan **React + Vite**, menampilkan efek visual 3D interaktif, animasi halus, dan desain modern bertema dark mode.

🌐 **Live Demo:** [https://itzluthfi.github.io/KKN-Portofolio-L/](https://itzluthfi.github.io/KKN-Portofolio-L/)

![Portfolio Preview](./portofolio%20website.jpeg)

---

## ✨ Fitur Utama

- 🎴 **3D Lanyard Card** — Kartu identitas interaktif berbasis fisika (Three.js + Rapier)
- ✨ **Particle Background** — Animasi partikel dinamis yang bereaksi terhadap mouse
- 🖱️ **Image Trail Effect** — Efek jejak gambar mengikuti kursor
- 🎯 **Crosshair Cursor** — Kursor kustom berbentuk crosshair
- 🌊 **Laser Flow Effect** — Animasi cahaya laser pada hero section
- 📱 **Responsive Design** — Mobile-first, adaptif di semua ukuran layar
- 📬 **Contact Form** — Terintegrasi dengan Formspree
- 🔗 **GitHub Live Stats** — Statistik GitHub real-time via API publik
- 🌀 **PreLoader Animation** — Animasi loading saat pertama kali masuk
- 🔄 **SPA Routing** — Navigasi halaman detail proyek tanpa reload

---

## 🧠 Prompt Pembuatan (Cara Recreate dari Nol)

Berikut prompt yang bisa kamu kirimkan ke AI (seperti ChatGPT / Gemini / Claude) untuk membuat project serupa dari awal:

<details>
<summary><strong>📋 Klik untuk lihat Prompt Lengkap</strong></summary>

```
Buatkan saya sebuah website portfolio personal menggunakan React + Vite dengan spesifikasi berikut:

STACK TEKNOLOGI:
- React 19 + Vite 7
- Tailwind CSS v4 (@tailwindcss/vite)
- React Router DOM v7
- Three.js + @react-three/fiber + @react-three/drei
- @react-three/rapier (physics engine)
- meshline (untuk tali lanyard)
- AOS (Animate On Scroll)
- animate.css
- remixicon (icon library)
- Formspree (contact form)

FITUR YANG HARUS ADA:
1. Navbar sticky dengan link navigasi ke section: Beranda, Tentang, Proyek, Kontak
2. Hero Section dengan:
   - Teks nama besar (clamp font size)
   - Status badge "Available for roles"
   - Tombol Download CV dan Lihat Project
   - 3D Lanyard Card interaktif (bisa di-drag, pakai fisika Rapier)
   - Floating console terminal UI
3. GitHub Stats Section — ambil dari API https://api.github.com/users/{username} dengan fallback data lokal
4. Tentang Section — foto profil, deskripsi, dan focus area cards
5. Workflow Section — numbered steps + timeline cards per tahun
6. Proyek Section — grid kartu proyek dengan gambar, tools chips, dan link detail
7. Tool Stack Section — grid tile tools dengan icon dan deskripsi
8. Kontak Section — info kontak + form (Formspree)
9. Footer sederhana

EFEK VISUAL TAMBAHAN:
- Particle background (WebGL canvas, partikel bereaksi ke mouse)
- Crosshair custom cursor
- Image Trail (gambar mengikuti kursor saat bergerak)
- Laser Flow (animasi cahaya di hero)
- Gradual Blur di bagian bawah hero
- PreLoader animation saat halaman pertama load

STRUKTUR DATA:
Buat file src/data.js yang berisi:
- listProyek: array objek { id, gambar, nama, desk, tools, dad, slug, linkGithub, deskripsiLengkap }
- listTools: array objek { id, gambar, nama, ket, dad, link }
- toolLinks: object mapping nama tool ke URL resminya

ROUTING:
- "/" → halaman utama (semua section)
- "/proyek/:slug" → halaman DetailProyek

DEPLOYMENT:
- Konfigurasi Vite dengan base: '/nama-repo/'
- BrowserRouter dengan basename={import.meta.env.BASE_URL}
- Script deploy menggunakan gh-pages ke GitHub Pages

ASSET PUBLIC (letakkan di folder /public):
- card.glb (model 3D kartu lanyard)
- lanyard.png (tekstur tali lanyard)
- /assets/hero-img.webp (foto profil)
- /assets/proyek/proyek1.webp, proyek2.webp, dst.
- /assets/tools/ (icon-icon tools: vscode.png, ubuntu.png, dll)

STYLING:
- Dark mode (#05080a background)
- Warna aksen: cyan (#67e8f9), lime (#bef264), slate
- Font: Inter / sistem sans-serif
- Glassmorphism untuk card efek
- Smooth scroll dan animasi AOS
```

</details>

---

## 📦 Tech Stack & Library

### Core Framework
| Library | Versi | Fungsi |
|---------|-------|--------|
| [React](https://react.dev/) | ^19.2.0 | UI Framework |
| [Vite](https://vitejs.dev/) | ^7.3.1 | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | ^7.13.1 | Client-side routing |

### 3D & Physics
| Library | Versi | Fungsi |
|---------|-------|--------|
| [Three.js](https://threejs.org/) | ^0.183.2 | 3D rendering engine |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | ^9.5.0 | React renderer untuk Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | ^10.7.7 | Helper & utilities Three.js |
| [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) | ^2.2.0 | Physics engine (Rapier) |
| [meshline](https://github.com/pmndrs/meshline) | ^3.3.1 | Render garis 3D (tali lanyard) |

### Styling & Animasi
| Library | Versi | Fungsi |
|---------|-------|--------|
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.0 | Utility-first CSS |
| [@tailwindcss/vite](https://tailwindcss.com/docs/vite) | ^4.2.0 | Plugin Tailwind untuk Vite |
| [animate.css](https://animate.style/) | ^4.1.1 | CSS animasi siap pakai |
| [AOS](https://michalsnik.github.io/aos/) | ^3.0.0-beta.6 | Animate On Scroll |
| [tw-animate-css](https://github.com/jamiebuilds/tailwindcss-animate) | ^1.4.0 | Plugin animasi Tailwind |

### UI & Icons
| Library | Versi | Fungsi |
|---------|-------|--------|
| [remixicon](https://remixicon.com/) | ^4.9.1 | Icon library |
| [lucide-react](https://lucide.dev/) | ^0.575.0 | Icon SVG components |
| [radix-ui](https://www.radix-ui.com/) | ^1.4.3 | Headless UI primitives |
| [ogl](https://github.com/oframe/ogl) | ^1.0.11 | WebGL untuk efek particles |

### Utilities
| Library | Versi | Fungsi |
|---------|-------|--------|
| [clsx](https://github.com/lukeed/clsx) | ^2.1.1 | Conditional className |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | ^3.5.0 | Merge Tailwind classes |
| [class-variance-authority](https://cva.style/) | ^0.7.1 | Variant-based styling |
| [gh-pages](https://github.com/tschaub/gh-pages) | ^6.x | Deploy ke GitHub Pages |

---

## 📁 Struktur File

```
My-Portofolio-Luthfi/
│
├── public/                         # Asset statis (tidak diproses Vite)
│   ├── card.glb                    # Model 3D kartu lanyard
│   ├── lanyard.png                 # Tekstur tali lanyard
│   ├── CV_NamaKamu.pdf             # File CV untuk download
│   └── assets/
│       ├── favicon.ico
│       ├── hero-img.webp           # Foto profil utama
│       ├── hero-img2.webp
│       ├── proyek/
│       │   ├── proyek1.webp
│       │   ├── proyek2.webp
│       │   └── proyek3.webp
│       └── tools/
│           ├── vscode.png
│           ├── ubuntu.png
│           ├── github.png
│           └── ... (icon tools lainnya)
│
├── src/
│   ├── components/
│   │   ├── effects/
│   │   │   ├── Crosshair.jsx       # Kursor crosshair kustom
│   │   │   ├── GradualBlur.jsx     # Efek blur gradien bawah hero
│   │   │   ├── ImageTrail.jsx      # Efek jejak gambar mengikuti kursor
│   │   │   └── LaserFlow.jsx       # Animasi laser di hero section
│   │   ├── DetailProyek.jsx        # Halaman detail proyek (/proyek/:slug)
│   │   ├── Footer.jsx              # Footer global
│   │   ├── Navbar.jsx              # Navigasi bar sticky
│   │   └── PreLoader.jsx           # Animasi loading awal
│   │
│   ├── lib/
│   │   └── utils.ts                # Helper function (cn untuk classnames)
│   │
│   ├── App.jsx                     # Komponen utama (semua section)
│   ├── Lanyard.jsx                 # Komponen 3D Lanyard Card interaktif
│   ├── Particles.jsx               # Komponen background partikel WebGL
│   ├── data.js                     # Data proyek, tools, dan link
│   ├── global.d.ts                 # TypeScript declaration (meshline types)
│   ├── index.css                   # Global styles & design tokens
│   └── main.jsx                    # Entry point React + Router setup
│
├── index.html                      # HTML template utama
├── vite.config.js                  # Konfigurasi Vite (base path, plugins)
├── package.json                    # Dependencies & scripts
├── eslint.config.js                # ESLint konfigurasi
└── README.md                       # Dokumentasi ini
```

---

## ⚙️ Cara Install & Jalankan Lokal

### Prasyarat
Pastikan sudah terinstall:
- **Node.js** versi 18 ke atas → [Download Node.js](https://nodejs.org/)
- **Git** → [Download Git](https://git-scm.com/)

### 1. Clone Repository
```bash
git clone https://github.com/itzluthfi/KKN-Portofolio-L.git
```

### 2. Masuk ke Folder Project
```bash
cd KKN-Portofolio-L
```

### 3. Install Semua Dependencies
```bash
npm install
```

### 4. Jalankan Development Server
```bash
npm run dev
```

Buka browser dan akses:
```
http://localhost:5173/
```

> **Catatan:** Saat development lokal, `base` path otomatis menjadi `/` sehingga semua asset berjalan normal.

---

## 🛠️ Cara Kustomisasi Konten

### Ganti Data Proyek & Tools
Edit file `src/data.js`:

```js
// Tambah proyek baru
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,              // import gambar di bagian atas
    nama: "Nama Project Kamu",
    desk: "Deskripsi singkat",
    tools: ["React", "Laravel"],  // nama tools
    dad: "200",                   // delay animasi AOS (ms)
    slug: "nama-project",         // URL slug: /proyek/nama-project
    linkGithub: "https://github.com/username/repo",
    deskripsiLengkap: "Deskripsi panjang untuk halaman detail..."
  },
];
```

### Ganti Foto & Asset
- Ganti `public/assets/hero-img.webp` dengan foto kamu
- Ganti `public/card.glb` dengan model GLB kartu kamu
- Ganti `public/CV_NamaKamu.pdf` dengan file CV kamu
- Update path di `App.jsx` line download CV

### Ganti Data Personal
Edit bagian ini di `src/App.jsx`:
- Nama lengkap di `<h1>`
- Deskripsi di `<p>`
- Stats (years, projects, dll)
- Focus areas (System Admin, Frontend, dll)
- Timeline tahun & pencapaian
- Info kontak (email, WhatsApp, GitHub)
- Link Formspree di `action="https://formspree.io/f/xxxxx"`

---

## 🌐 Cara Deploy ke GitHub Pages (Gratis)

### Prasyarat
- Sudah punya akun [GitHub](https://github.com/)
- Repository sudah dibuat di GitHub

### Step 1 — Setup `vite.config.js`
Pastikan `base` sudah diisi dengan nama repo GitHub kamu:
```js
// vite.config.js
export default defineConfig({
  base: '/nama-repo-kamu/',   // ← ganti sesuai nama repo
  plugins: [tailwindcss(), react()],
})
```

### Step 2 — Setup `main.jsx`
Pastikan `BrowserRouter` sudah pakai `basename`:
```jsx
// src/main.jsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
  {/* ... */}
</BrowserRouter>
```

### Step 3 — Install `gh-pages`
```bash
npm install --save-dev gh-pages
```

### Step 4 — Tambah Script di `package.json`
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 5 — Inisialisasi Git & Push Source Code
```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/username/nama-repo.git
git branch -M main
git push -u origin main
```

> Jika remote sudah ada commit lama, gunakan `git push -u origin main --force`

### Step 6 — Deploy ke GitHub Pages
```bash
npm run deploy
```

Perintah ini otomatis:
1. Build project → menghasilkan folder `dist/`
2. Push folder `dist/` ke branch `gh-pages`

### Step 7 — Aktifkan GitHub Pages
1. Buka repo di GitHub
2. Klik tab **Settings**
3. Di sidebar kiri klik **Pages**
4. Pilih **Source: Deploy from a branch**
5. Pilih branch **`gh-pages`** → folder **`/ (root)`**
6. Klik **Save**

Tunggu 1-2 menit, lalu website bisa diakses di:
```
https://username.github.io/nama-repo/
```

### Update Website Selanjutnya
Setiap kali ada perubahan, cukup jalankan:
```bash
git add .
git commit -m "update: deskripsi perubahan"
git push
npm run deploy
```

---

## 📜 Scripts yang Tersedia

| Script | Perintah | Fungsi |
|--------|---------|--------|
| Development | `npm run dev` | Jalankan dev server lokal |
| Build | `npm run build` | Build production ke folder `dist/` |
| Preview | `npm run preview` | Preview hasil build secara lokal |
| Deploy | `npm run deploy` | Build + push ke GitHub Pages |
| Lint | `npm run lint` | Cek kualitas kode dengan ESLint |

---

## ❓ Troubleshooting

### ❌ Error: `No routes matched location "/nama-repo/"`
**Penyebab:** `BrowserRouter` tidak tahu base path.  
**Fix:** Tambahkan `basename={import.meta.env.BASE_URL}` ke `<BrowserRouter>` di `main.jsx`.

### ❌ Asset 404 (gambar/GLB tidak muncul)
**Penyebab:** Path asset hardcoded seperti `/card.glb` tidak cocok di GitHub Pages.  
**Fix:** Gunakan `` `${import.meta.env.BASE_URL}card.glb` `` untuk asset di folder `public/`.

### ❌ Push ditolak (`rejected - fetch first`)
**Penyebab:** Remote sudah punya commit yang belum ada di lokal.  
**Fix:** Gunakan force push `git push -u origin main --force` (hati-hati, ini overwrite remote).

### ❌ `npm run dev` tidak jalan
**Penyebab:** Dependencies belum terinstall.  
**Fix:** Jalankan `npm install` terlebih dahulu.

---

## 📄 Lisensi

Project ini dibuat untuk keperluan pribadi dan KKN. Bebas digunakan sebagai referensi dengan mencantumkan kredit.

---

<div align="center">
  <p>Made with ❤️ by <strong>Luthfi Shidqi Habibulloh</strong></p>
  <p>
    <a href="https://github.com/itzluthfi">GitHub</a> •
    <a href="https://wa.me/6289507370805">WhatsApp</a> •
    <a href="https://itzluthfi.github.io/KKN-Portofolio-L/">Portfolio</a>
  </p>
</div>
