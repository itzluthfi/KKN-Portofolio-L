# 🚀 TUTORIAL PORTFOLIO — PART 2
## Membuat Semua Komponen React

---

## 🔧 BAGIAN 17 — BUAT src/components/Navbar.jsx

```jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/#beranda', label: 'Beranda' },
    { to: '/#tentang', label: 'Tentang' },
    { to: '/#proyek', label: 'Proyek' },
    { to: '/#kontak', label: 'Kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05080a]/90 backdrop-blur-xl border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/#beranda" className="flex items-center gap-3 group">
          <span className="grid h-9 w-9 place-items-center bg-lime-300 font-black text-slate-950 text-sm transition-transform group-hover:scale-110">
            NK
          </span>
          <span className="text-white font-bold text-lg hidden sm:block">
            Nama Kamu
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}CV_NamaKamu.pdf`}
            download
            className="px-4 py-2 bg-lime-300 text-slate-950 text-sm font-bold hover:bg-lime-200 transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#05080a]/95 backdrop-blur-xl border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-slate-300 hover:text-cyan-300 font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}CV_NamaKamu.pdf`}
            download
            className="px-4 py-2 bg-lime-300 text-slate-950 text-sm font-bold text-center"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
```

> **Ganti `NK` dan `Nama Kamu`** dengan inisial dan nama kamu!  
> **Ganti `CV_NamaKamu.pdf`** dengan nama file CV kamu!

---

## 🔧 BAGIAN 18 — BUAT src/components/PreLoader.jsx

```jsx
import { useState, useEffect } from 'react';

const PreLoader = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05080a] transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-8 flex items-center gap-4">
        <span className="grid h-16 w-16 place-items-center bg-lime-300 font-black text-slate-950 text-2xl">
          NK
        </span>
        <div>
          <p className="text-white font-black text-2xl">Nama Kamu</p>
          <p className="text-slate-400 text-sm">Portfolio</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-[2px] bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-lime-300 transition-all duration-100"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      <p className="mt-4 text-slate-500 text-xs font-mono">
        {Math.min(Math.round(progress), 100)}%
      </p>
    </div>
  );
};

export default PreLoader;
```

---

## 🔧 BAGIAN 19 — BUAT src/components/Footer.jsx

```jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer mt-24 py-8 border-t border-slate-800 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <Link to="/#beranda" className="flex items-center gap-3 group">
            <span className="grid h-9 w-9 place-items-center bg-lime-300 font-black text-slate-950 transition-transform group-hover:scale-110">
              NK
            </span>
            <span>
              <strong className="block text-lg text-white">Nama Kamu</strong>
              <small className="text-slate-400">Web Dev · Mobile · IT Staff</small>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-4 text-sm font-bold text-slate-300">
            <Link to="/#beranda" className="hover:text-cyan-300 transition-colors">Beranda</Link>
            <Link to="/#tentang" className="hover:text-cyan-300 transition-colors">Tentang</Link>
            <Link to="/#proyek" className="hover:text-cyan-300 transition-colors">Proyek</Link>
            <Link to="/#kontak" className="hover:text-cyan-300 transition-colors">Kontak</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-2xl text-slate-300">
            <a href="https://github.com/USERNAME" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-300 transition-colors" aria-label="GitHub">
              <i className="ri-github-fill" />
            </a>
            <a href="https://instagram.com/USERNAME" target="_blank" rel="noopener noreferrer"
               className="hover:text-pink-400 transition-colors" aria-label="Instagram">
              <i className="ri-instagram-fill" />
            </a>
            <a href="https://linkedin.com/in/USERNAME" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <i className="ri-linkedin-fill" />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Nama Kamu · Kota, Provinsi, Indonesia
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## 🔧 BAGIAN 20 — BUAT src/components/DetailProyek.jsx

```jsx
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { listProyek, toolLinks } from '../data';

const DetailProyek = () => {
  const { slug } = useParams();
  const proyek = listProyek.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!proyek) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-4xl font-black text-white">404</h1>
        <p className="text-slate-400">Proyek tidak ditemukan.</p>
        <Link to="/" className="px-6 py-3 bg-lime-300 text-slate-950 font-bold hover:bg-lime-200 transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link to="/" className="hover:text-cyan-300 transition-colors">Beranda</Link>
          <i className="ri-arrow-right-s-line" />
          <Link to="/#proyek" className="hover:text-cyan-300 transition-colors">Proyek</Link>
          <i className="ri-arrow-right-s-line" />
          <span className="text-white">{proyek.nama}</span>
        </nav>

        {/* Gambar */}
        <div className="mb-8 overflow-hidden rounded-lg border border-slate-800">
          <img
            src={proyek.gambar}
            alt={proyek.nama}
            className="w-full object-cover max-h-[500px]"
          />
        </div>

        {/* Judul & Desk */}
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          {proyek.nama}
        </h1>
        <p className="text-slate-400 text-lg mb-6">{proyek.desk}</p>

        {/* Tools/Tech Stack */}
        <div className="mb-8 flex flex-wrap gap-2">
          {proyek.tools.map((tool) => (
            <a
              key={tool}
              href={toolLinks[tool] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm font-bold border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors rounded-full"
            >
              {tool}
            </a>
          ))}
        </div>

        {/* Deskripsi Lengkap */}
        <div className="prose prose-invert max-w-none mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Tentang Proyek</h2>
          <p className="text-slate-300 leading-8 whitespace-pre-line">
            {proyek.deskripsiLengkap}
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-wrap gap-4">
          <a
            href={proyek.linkGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-300 transition-all font-bold"
          >
            <i className="ri-github-fill text-lg" />
            Lihat di GitHub
          </a>
          <Link
            to="/#proyek"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white hover:bg-slate-700 transition-colors font-bold"
          >
            <i className="ri-arrow-left-line" />
            Kembali ke Proyek
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DetailProyek;
```

---

## 🔧 BAGIAN 21 — BUAT EFEK VISUAL

### 21.1 Crosshair.jsx (Custom Cursor)

Buat `src/components/effects/Crosshair.jsx`:

```jsx
import { useEffect, useRef } from 'react';

const Crosshair = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <>
      {/* Dot kecil */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div className="h-2 w-2 rounded-full bg-cyan-400" />
      </div>
      {/* Ring besar */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9997] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
        style={{ willChange: 'transform' }}
      >
        <div className="h-8 w-8 rounded-full border border-cyan-400/50" />
      </div>
    </>
  );
};

export default Crosshair;
```

### 21.2 GradualBlur.jsx

Buat `src/components/effects/GradualBlur.jsx`:

```jsx
const GradualBlur = ({ position = 'bottom' }) => {
  const isBottom = position === 'bottom';
  return (
    <div
      className={`pointer-events-none absolute ${isBottom ? 'bottom-0 bg-gradient-to-t' : 'top-0 bg-gradient-to-b'} left-0 right-0 h-40 from-[#05080a] to-transparent z-10`}
    />
  );
};

export default GradualBlur;
```

### 21.3 LaserFlow.jsx

Buat `src/components/effects/LaserFlow.jsx`:

```jsx
import { useEffect, useRef } from 'react';

const LaserFlow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const lines = Array.from({ length: 6 }, (_, i) => ({
      y: (i + 1) * (canvas.height / 7),
      speed: 0.3 + Math.random() * 0.4,
      offset: Math.random() * 1000,
      color: i % 2 === 0 ? 'rgba(103,232,249,0.15)' : 'rgba(190,242,100,0.10)',
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lines.forEach((line) => {
        line.offset += line.speed;
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        const pos = (Math.sin(line.offset * 0.01) + 1) / 2;
        gradient.addColorStop(Math.max(0, pos - 0.15), 'transparent');
        gradient.addColorStop(pos, line.color);
        gradient.addColorStop(Math.min(1, pos + 0.15), 'transparent');
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.moveTo(0, line.y + Math.sin(line.offset * 0.008) * 20);
        for (let x = 0; x < canvas.width; x += 10) {
          ctx.lineTo(x, line.y + Math.sin((x + line.offset) * 0.01) * 20);
        }
        ctx.stroke();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    />
  );
};

export default LaserFlow;
```

### 21.4 ImageTrail.jsx

Buat `src/components/effects/ImageTrail.jsx`:

```jsx
import { useEffect, useRef } from 'react';

const ImageTrail = ({ images = [] }) => {
  const containerRef = useRef(null);
  const indexRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const activeImagesRef = useRef([]);

  useEffect(() => {
    if (!images.length) return;

    const THRESHOLD = 100;
    const LIFETIME = 800;
    const MAX_IMAGES = 8;

    const spawnImage = (x, y) => {
      if (!containerRef.current) return;

      // Remove oldest if too many
      if (activeImagesRef.current.length >= MAX_IMAGES) {
        const oldest = activeImagesRef.current.shift();
        oldest?.remove();
      }

      const img = document.createElement('img');
      img.src = images[indexRef.current % images.length];
      indexRef.current++;

      img.className = 'trail-image';
      img.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%) scale(0);
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
        pointer-events: none;
        z-index: 9990;
        transition: transform 0.2s ease, opacity 0.4s ease;
        opacity: 1;
      `;

      document.body.appendChild(img);
      activeImagesRef.current.push(img);

      requestAnimationFrame(() => {
        img.style.transform = 'translate(-50%, -50%) scale(1)';
      });

      setTimeout(() => {
        img.style.opacity = '0';
        img.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
          img.remove();
          activeImagesRef.current = activeImagesRef.current.filter(i => i !== img);
        }, 400);
      }, LIFETIME);
    };

    const onMouseMove = (e) => {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > THRESHOLD) {
        lastPosRef.current = { x: e.clientX, y: e.clientY };
        spawnImage(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [images]);

  return <div ref={containerRef} />;
};

export default ImageTrail;
```

---

## 🔧 BAGIAN 22 — BUAT src/Particles.jsx

Buat file `src/Particles.jsx`:

```jsx
import { useEffect, useRef } from 'react';

const Particles = ({
  particleColors = ['#ffffff'],
  particleCount = 100,
  speed = 0.1,
  particleBaseSize = 80,
  moveParticlesOnHover = false,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let mouse = { x: -9999, y: -9999 };
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    if (moveParticlesOnHover) {
      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
    }

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * (particleBaseSize / 100) + 0.5,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (moveParticlesOnHover) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            p.x -= dx * 0.02;
            p.y -= dy * 0.02;
          }
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [particleColors, particleCount, speed, particleBaseSize, moveParticlesOnHover]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
    />
  );
};

export default Particles;
```

---

## 🔧 BAGIAN 23 — BUAT src/Lanyard.jsx (3D Card Interaktif)

> ⚠️ Komponen ini membutuhkan file `public/card.glb` dan `public/lanyard.png`!

```jsx
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useTexture, Environment } from '@react-three/drei';
import { Physics, RigidBody, BallCollider } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

extend({ MeshLineGeometry, MeshLineMaterial });

// Komponen tali lanyard
function LanyardRope({ points = [] }) {
  const ref = useRef();
  useFrame(() => {
    if (ref.current && points.length > 1) {
      ref.current.geometry.setPoints(points.map((p) => new THREE.Vector3(...p)));
    }
  });
  return (
    <mesh ref={ref}>
      <meshLineGeometry />
      <meshLineMaterial
        color="#a78bfa"
        lineWidth={0.015}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

// Komponen kartu ID
function Card({ onPointerDown, onPointerUp, dragging }) {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}card.glb`);
  const ref = useRef();

  return (
    <RigidBody ref={ref} type="dynamic" colliders={false} mass={0.8}>
      <BallCollider args={[0.5]} />
      <primitive
        object={scene}
        scale={[1, 1, 1]}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      />
    </RigidBody>
  );
}

// Scene utama lanyard
function LanyardScene({ position = [0, 0, 11], gravity = [0, -30, 0], fov = 20 }) {
  const [dragging, setDragging] = useState(false);

  return (
    <Canvas
      camera={{ position, fov }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <Environment preset="city" />
      <Physics gravity={gravity}>
        <Card
          dragging={dragging}
          onPointerDown={() => setDragging(true)}
          onPointerUp={() => setDragging(false)}
        />
      </Physics>
    </Canvas>
  );
}

// Wrapper export
const Lanyard = ({ position, gravity, fov }) => {
  return (
    <div className="h-full w-full">
      <LanyardScene position={position} gravity={gravity} fov={fov} />
    </div>
  );
};

export default Lanyard;
```

> **CATATAN:** Implementasi penuh Lanyard dengan fisika tali ada di file referensi project `Lanyard.jsx`.  
> File ini sangat kompleks (250+ baris). Untuk mendapatkannya, gunakan prompt AI di PART 4.
---

> ✅ **PART 2 SELESAI!** Lanjut ke PART 3 → Buat App.jsx utama + CSS styling
