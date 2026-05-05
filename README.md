# Portfolio Luthfi Shidqi

Personal portfolio berbasis React + Vite dengan visual interaktif, lanyard 3D, particle background, efek cursor, GitHub stats, project showcase, tool stack, dan contact form.

## Tech Stack

- React 19 untuk UI.
- Vite 7 untuk dev server dan production build.
- Tailwind CSS 4 untuk utility styling.
- Three.js, `@react-three/fiber`, `@react-three/drei`, dan `@react-three/rapier` untuk lanyard 3D + physics.
- Meshline untuk render tali lanyard.
- React Router untuk routing halaman utama dan detail project.
- AOS dan Animate.css untuk scroll/reveal animation.
- Remix Icon dan Lucide React untuk icon.
- GitHub REST API dan contribution endpoint publik untuk statistik GitHub.

## Struktur Project

```text
.
├── public/
│   ├── assets/
│   │   ├── lanyard/          # Asset lanyard dan GLB cadangan
│   │   ├── proyek/           # Gambar project
│   │   └── tools/            # Icon tools
│   ├── card.glb              # Model 3D lanyard card utama
│   ├── lanyard.png           # Texture tali
│   └── CV_Rifky Octory Mulyana.pdf
├── src/
│   ├── components/
│   │   ├── effects/          # Crosshair, ImageTrail, LaserFlow, GradualBlur
│   │   ├── DetailProyek.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── PreLoader.jsx
│   ├── App.jsx               # Halaman utama portfolio
│   ├── data.js               # Data tools, projects, links
│   ├── index.css             # Styling global dan custom effects
│   ├── Lanyard.jsx           # Lanyard 3D + physics
│   ├── main.jsx              # Entry point dan routes
│   └── Particles.jsx         # Background particle effect
├── package.json
├── vite.config.js
└── README.md
```

## Instalasi Lokal

Pastikan sudah install Node.js versi modern. Disarankan Node.js 20+.

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka URL yang muncul, biasanya:

```text
http://localhost:5173
```

## Script

```bash
npm run dev
```

Menjalankan Vite dev server dengan hot reload.

```bash
npm run build
```

Membuat production build ke folder `dist/`.

```bash
npm run preview
```

Menjalankan preview hasil build lokal.

```bash
npm run lint
```

Menjalankan ESLint untuk cek error statis.

## Build Production

Sebelum publish, jalankan:

```bash
npm run lint
npm run build
```

Jika sukses, folder `dist/` siap dipublish.

Catatan: Vite mungkin memberi warning chunk size besar karena Three.js dan React Three Fiber cukup berat. Itu warning performa bundle, bukan error build.

## Publish ke Vercel

### Opsi 1: Lewat Dashboard Vercel

1. Push project ini ke repository GitHub.
2. Buka `https://vercel.com`.
3. Login dengan GitHub.
4. Klik `Add New...` lalu `Project`.
5. Import repository portfolio ini.
6. Pastikan setting berikut:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. Klik `Deploy`.

Setiap push ke branch utama akan otomatis trigger deploy baru.

### Opsi 2: Lewat Vercel CLI

Install Vercel CLI:

```bash
npm i -g vercel
```

Login:

```bash
vercel login
```

Deploy preview:

```bash
vercel
```

Deploy production:

```bash
vercel --prod
```

## Environment Variables

Project saat ini tidak membutuhkan token rahasia untuk build dasar.

Jangan menaruh GitHub token, admin password, database URL, atau secret lain di frontend React. Variable dengan prefix `VITE_` akan ikut terbaca di browser, jadi tidak aman untuk secret.

Jika nanti memakai CRUD admin, secret harus disimpan di Vercel Environment Variables dan hanya dipakai di serverless function/API route.

## Arsitektur Saat Ini

```text
Browser
  ├── React + Vite SPA
  ├── Static assets dari public/
  ├── GitHub public API untuk statistik ringan
  └── Formspree untuk contact form
```

Data project dan tools saat ini berada di:

```text
src/data.js
```

Artinya perubahan data masih dilakukan lewat edit kode, commit, lalu redeploy.

## Rencana Arsitektur CRUD Admin

Untuk admin CRUD di production, rekomendasi paling aman adalah deploy di Vercel dengan API serverless dan database.

```text
Browser
  ├── Portfolio public pages
  └── Admin page /admin
        └── Login
             └── Vercel Function API
                  ├── Auth check
                  ├── CRUD projects/tools/profile
                  └── Database / storage
```

Pilihan storage:

- Supabase atau Neon Postgres: pilihan terbaik untuk data project, tools, profile, dan admin user.
- Vercel Blob: cocok untuk upload gambar/project asset.
- Vercel Edge Config: cocok untuk config yang jarang berubah, bukan CRUD utama.
- JSON file di GitHub: bisa, tapi kurang ideal untuk admin realtime karena butuh GitHub token dan commit API.

Rekomendasi implementasi:

```text
Vercel + Supabase
```

Alasannya:

- Bisa CRUD beneran tanpa commit ulang.
- Bisa bikin admin dashboard.
- Bisa simpan gambar di Supabase Storage atau Vercel Blob.
- Secret tetap aman di server-side environment variables.

## Roadmap CRUD Admin

1. Buat halaman `/admin/login`.
2. Buat halaman `/admin/projects`, `/admin/tools`, `/admin/profile`.
3. Tambahkan API:
   - `GET /api/projects`
   - `POST /api/projects`
   - `PUT /api/projects/:id`
   - `DELETE /api/projects/:id`
4. Pindahkan data dari `src/data.js` ke database.
5. Tambahkan upload image ke storage.
6. Proteksi API dengan session/token server-side.

## Catatan GitHub Stats

Statistik GitHub public bisa diambil tanpa token untuk data dasar seperti repo, follower, dan repo terbaru.

Untuk contribution graph seperti halaman profil GitHub, ada dua opsi:

- Endpoint publik contribution graph pihak ketiga.
- GitHub GraphQL API resmi dengan token, tetapi token harus disimpan di backend/serverless function, bukan di frontend.

Jika token pernah terlanjur terkirim di chat atau commit, revoke token tersebut dari GitHub Developer Settings dan buat token baru.

## Troubleshooting

Jika install dependency gagal:

```bash
rm -rf node_modules package-lock.json
npm install
```

Di Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

Jika lanyard atau asset 3D tidak tampil:

- Pastikan `public/card.glb` ada.
- Pastikan `public/lanyard.png` ada.
- Jalankan ulang dev server.

Jika route detail project 404 saat refresh di hosting:

- Di Vercel biasanya aman untuk SPA Vite.
- Jika pakai hosting static lain, tambahkan rewrite semua route ke `index.html`.

## Author

Portfolio untuk Luthfi Shidqi Habibulloh.

GitHub: `https://github.com/itzluthfi`
