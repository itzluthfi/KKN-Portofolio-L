# 🚀 TUTORIAL LENGKAP PORTFOLIO REACT + VITE
## PART 1: Install, Setup, Struktur Folder
> Dari NOL sampai HOSTING di GitHub Pages — Gratis!

---

## 📋 DAFTAR ISI LENGKAP

| Part | Topik |
|------|-------|
| **PART 1** | Install Tools, Setup GitHub, Buat Project, Struktur Folder |
| **PART 2** | Konfigurasi File, Buat Semua Komponen (Navbar, PreLoader, Lanyard, dll) |
| **PART 3** | App.jsx (Hero, GitHub Stats, About, Projects, Contact) + CSS |
| **PART 4** | AI Prompts, Kustomisasi Data, Testing, Deploy ke GitHub Pages |

---

## 🧰 BAGIAN 1 — SOFTWARE YANG DIBUTUHKAN

| Software | Link Download | Fungsi |
|----------|--------------|--------|
| Node.js v18+ | https://nodejs.org | Runtime JS |
| Git | https://git-scm.com | Version control |
| VS Code | https://code.visualstudio.com | Code editor |
| Chrome/Firefox | (sudah ada) | Testing |

---

## 🔧 BAGIAN 2 — INSTALL NODE.JS

1. Buka https://nodejs.org → klik **LTS**
2. Jalankan installer → klik Next sampai selesai
3. Verifikasi di terminal:

```bash
node --version
# Harus muncul: v18.x.x atau lebih
npm --version
# Harus muncul: 9.x.x atau lebih
```

> Jika tidak muncul → restart terminal!

---

## 🔧 BAGIAN 3 — INSTALL GIT

1. Buka https://git-scm.com/downloads
2. Download sesuai OS → install default
3. Verifikasi:

```bash
git --version
# Output: git version 2.x.x
```

4. Setup identitas Git (WAJIB):

```bash
git config --global user.name "Nama Lengkap Kamu"
git config --global user.email "email@kamu.com"
```

---

## 🔧 BAGIAN 4 — INSTALL VS CODE + EXTENSION

1. Download di https://code.visualstudio.com
2. Install extension ini (tekan Ctrl+Shift+X):
   - **ESLint** — cek kualitas kode
   - **Prettier** — format otomatis
   - **Tailwind CSS IntelliSense** — autocomplete Tailwind
   - **ES7+ React/Redux snippets** — shortcut React
   - **Auto Rename Tag** — rename tag HTML otomatis

---

## 🔧 BAGIAN 5 — BUAT AKUN GITHUB

1. Buka https://github.com → **Sign Up**
2. Isi username, email, password
3. Verifikasi email

> **Tips pilih username:** Gunakan nama yang profesional!  
> URL portfolio kamu → `https://USERNAME.github.io/NAMA-REPO/`

---

## 🔧 BAGIAN 6 — BUAT REPOSITORY DI GITHUB

1. Login GitHub → klik **"+"** (pojok kanan atas) → **New repository**
2. Isi form:
   - **Repository name:** `portofolio` ← catat ini!
   - **Description:** My personal portfolio website
   - Pilih **Public**
   - ✅ Centang "Add a README file"
3. Klik **Create repository**

> ⚠️ Catat nama repository kamu! Akan dipakai di `vite.config.js`

---

## 🔧 BAGIAN 7 — BUAT PROJECT REACT + VITE

Buka terminal, masuk ke folder yang diinginkan:

```bash
# Windows — buka Command Prompt / PowerShell
cd C:\Users\NamaKamu\Documents

# Buat folder baru (opsional)
mkdir portofolio
cd portofolio
```

Buat project Vite:

```bash
npm create vite@latest . -- --template react
```

Jika ada pertanyaan "Current directory is not empty. Remove existing files?" → ketik `y` lalu Enter.

Install dependencies:

```bash
npm install
```

Test jalankan:

```bash
npm run dev
```

Buka http://localhost:5173 — jika muncul halaman Vite default → ✅ BERHASIL!

---

## 🔧 BAGIAN 8 — INSTALL SEMUA LIBRARY

Tekan `Ctrl+C` untuk stop dev server, lalu jalankan:

**Library utama (dependencies):**
```bash
npm install react-router-dom three @react-three/fiber @react-three/drei @react-three/rapier meshline aos animate.css remixicon lucide-react ogl clsx tailwind-merge class-variance-authority tailwindcss @tailwindcss/vite
```

**Library development (devDependencies):**
```bash
npm install --save-dev gh-pages tw-animate-css
```

---

## 🔧 BAGIAN 9 — TAMBAH SCRIPTS DI package.json

Buka `package.json`, ganti bagian `"scripts"`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## 🔧 BAGIAN 10 — BUAT STRUKTUR FOLDER

Jalankan perintah ini di terminal (di dalam folder project):

```bash
mkdir src\components\effects
mkdir src\lib
mkdir public\assets\proyek
mkdir public\assets\tools
mkdir public\assets\lanyard
```

Struktur lengkap yang akan kamu buat:

```
portofolio/
├── public/
│   ├── card.glb              ← Model 3D kartu (download/buat)
│   ├── lanyard.png           ← Tekstur tali lanyard
│   ├── CV_NamaKamu.pdf       ← CV kamu
│   └── assets/
│       ├── favicon.ico
│       ├── hero-img.webp     ← Foto profil kamu
│       ├── proyek/
│       │   ├── proyek1.webp
│       │   ├── proyek2.webp
│       │   └── proyek3.webp
│       └── tools/
│           ├── vscode.png
│           ├── github.png
│           └── ... dll
│
├── src/
│   ├── components/
│   │   ├── effects/
│   │   │   ├── Crosshair.jsx
│   │   │   ├── GradualBlur.jsx
│   │   │   ├── ImageTrail.jsx
│   │   │   └── LaserFlow.jsx
│   │   ├── DetailProyek.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── PreLoader.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── Lanyard.jsx
│   ├── Particles.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── vite.config.js
└── package.json
```

---

## 🔧 BAGIAN 11 — SIAPKAN ASSET

### 11.1 Foto Profil
- Siapkan foto profil kamu
- Konversi ke `.webp` di https://squoosh.app (opsional, lebih ringan)
- Simpan ke `public/assets/hero-img.webp`

### 11.2 Gambar Proyek (Screenshot)
- Screenshot website/project kamu
- Simpan ke `public/assets/proyek/proyek1.webp`, `proyek2.webp`, dst

### 11.3 Icon Tools
- Download icon dari https://simpleicons.org atau https://devicons.github.io
- Simpan ke `public/assets/tools/` dengan nama: `vscode.png`, `github.png`, dll

### 11.4 File card.glb (Model 3D Kartu)
Ada 3 cara:
1. **Buat di Blender** (gratis) — tutorial di YouTube
2. **Buat di Spline** (spline.design) — export ke .glb
3. **Clone dari referensi project** (cara termudah)

### 11.5 File lanyard.png (Tekstur Tali)
- Buat di Photoshop/Canva: gambar persegi panjang vertikal warna solid
- Atau download dari referensi project

### 11.6 CV PDF
- Buat CV di Canva/Word → export PDF
- Simpan ke `public/CV_NamaKamu.pdf`

---

## 🔧 BAGIAN 12 — KONFIGURASI vite.config.js

Buka `vite.config.js`, ganti SELURUH isinya:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // ⚠️ GANTI 'portofolio' dengan nama repo GitHub kamu!
  base: '/portofolio/',
  plugins: [
    tailwindcss(),
    react()
  ],
})
```

> **CONTOH:** Jika nama repo GitHub kamu = `my-portfolio`, maka: `base: '/my-portfolio/'`

---

## 🔧 BAGIAN 13 — KONFIGURASI index.html

Ganti SELURUH isi `index.html`:

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfolio - Web Developer & Mobile Developer" />
    <title>Portfolio | Nama Kamu</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 🔧 BAGIAN 14 — BUAT src/main.jsx

Ganti SELURUH isi `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import 'animate.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import DetailProyek from './components/DetailProyek.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PreLoader />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyek/:slug" element={<DetailProyek />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
```

> **Kenapa `basename={import.meta.env.BASE_URL}`?**  
> Di GitHub Pages URL-nya `/nama-repo/`, bukan `/`.  
> Tanpa ini routing akan error "No routes matched location".

---

## 🔧 BAGIAN 15 — BUAT src/lib/utils.js

Buat file baru `src/lib/utils.js`:

```js
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

---

## 🔧 BAGIAN 16 — BUAT src/data.js

Buat/ganti `src/data.js` — ini adalah "database" konten portfolio kamu:

```js
// ================================================
// IMPORT GAMBAR HERO (foto profil utama)
// ================================================
import HeroImage from "/assets/hero-img.webp";

const Image = { HeroImage };
export default Image;

// ================================================
// IMPORT ICON TOOLS — sesuaikan dengan yang kamu punya
// ================================================
import ToolsVscode from "/assets/tools/vscode.png";
import ToolsGithub from "/assets/tools/github.png";
import ToolsUbuntu from "/assets/tools/ubuntu.png";
import ToolsMySQL from "/assets/tools/mysql.png";
// Tambah import lainnya sesuai kebutuhan...

// ================================================
// DATA LIST TOOLS
// Isi dengan tools yang sering kamu pakai
// ================================================
export const listTools = [
  {
    id: 1,
    gambar: ToolsVscode,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",            // delay animasi AOS (ms)
    link: "https://code.visualstudio.com/",
  },
  {
    id: 2,
    gambar: ToolsGithub,
    nama: "GitHub",
    ket: "Repository & Version Control",
    dad: "200",
    link: "https://github.com/",
  },
  {
    id: 3,
    gambar: ToolsUbuntu,
    nama: "Ubuntu Server",
    ket: "Operating System",
    dad: "300",
    link: "https://ubuntu.com/server",
  },
  {
    id: 4,
    gambar: ToolsMySQL,
    nama: "MySQL",
    ket: "Database",
    dad: "400",
    link: "https://www.mysql.com/",
  },
  // Tambah tools lainnya di sini...
];

// ================================================
// TOOL LINKS — mapping nama tool ke URL resminya
// Dipakai di chip/badge pada project card
// ================================================
export const toolLinks = {
  "React": "https://react.dev/",
  "Next.js": "https://nextjs.org/",
  "Laravel": "https://laravel.com/",
  "Flutter": "https://flutter.dev/",
  "HTML": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "CSS": "https://developer.mozilla.org/en-US/docs/Web/CSS",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "Bootstrap": "https://getbootstrap.com/",
  "Tailwind": "https://tailwindcss.com/",
  "MySQL": "https://www.mysql.com/",
  "PHP": "https://www.php.net/",
  // Tambah sesuai tools yang kamu pakai di proyek
};

// ================================================
// IMPORT GAMBAR PROYEK
// ================================================
import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";

// ================================================
// DATA LIST PROYEK
// Tambah proyek sesuai pengalaman kamu
// ================================================
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Nama Proyek 1",
    desk: "Deskripsi singkat proyek, 1-2 kalimat saja.",
    tools: ["React", "Laravel", "MySQL"],
    dad: "200",
    slug: "nama-proyek-1",   // URL: /proyek/nama-proyek-1
    linkGithub: "https://github.com/username/repo",
    deskripsiLengkap: `
      Ceritakan detail proyek kamu di sini.
      Apa masalah yang diselesaikan?
      Apa peran kamu dalam tim?
      Teknologi apa yang dipakai dan kenapa?
      Apa tantangannya dan bagaimana solusinya?
      Apa hasilnya?
    `,
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Nama Proyek 2",
    desk: "Deskripsi singkat proyek 2.",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    dad: "300",
    slug: "nama-proyek-2",
    linkGithub: "https://github.com/username/repo2",
    deskripsiLengkap: "Deskripsi lengkap proyek 2...",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Nama Proyek 3",
    desk: "Deskripsi singkat proyek 3.",
    tools: ["Flutter", "Dart", "MySQL"],
    dad: "400",
    slug: "nama-proyek-3",
    linkGithub: "https://github.com/username/repo3",
    deskripsiLengkap: "Deskripsi lengkap proyek 3...",
  },
];
```

---

> ✅ **PART 1 SELESAI!** Lanjut ke PART 2 → Buat Komponen (Navbar, PreLoader, Lanyard, dll)
