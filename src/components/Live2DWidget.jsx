import { useEffect, useState } from 'react';

const dialogs = {
  beranda: ["Hai, selamat datang di Portofolio Luthfi! 👋", "Wah, desainnya keren ya?", "Ayo scroll ke bawah untuk lihat rahasia Luthfi!"],
  github: ["Wow, lihat commit hijaunya! 💻", "Luthfi aktif banget lho di GitHub.", "Banyak repository open source di sini!"],
  tentang: ["Sstt.. Luthfi itu Asisten Lab dan IT Staff kampus! 🤫", "Wah, tech stack-nya banyak juga ya.", "Ternyata dia suka bangun sistem IT kampus."],
  workflow: ["Kerja rapi, sistem terpantau! 🛠️", "Dokumentasi itu hal yang penting lho.", "Semua ada prosesnya, dari awal sampai rilis."],
  proyek: ["Coba lihat proyek-proyek ini, keren kan? ✨", "Banyak sistem nyata yang sudah dirilis.", "Silakan klik detail untuk lihat selengkapnya."],
  tools: ["Ini nih senjata andalan Luthfi tiap hari! ⚔️", "VS Code adalah teman setia.", "Pilih tool yang tepat untuk tugas yang tepat."],
  kontak: ["Ada ide proyek seru? Langsung hubungi aja! 📩", "Jangan malu-malu buat kirim pesan.", "Terima kasih sudah berkunjung ke sini! ❤️"]
};

export default function Live2DWidget({ jsonPath, position = 'right' }) {
  const [activeSection, setActiveSection] = useState('beranda');
  const [currentText, setCurrentText] = useState(dialogs.beranda[0]);
  const [isVisible, setIsVisible] = useState(true);

  // Observer untuk scroll section
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let best = null;
      let maxRatio = 0;
      entries.forEach(entry => {
         if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            best = entry.target.getAttribute('data-section');
         }
      });
      if (best) setActiveSection(best);
    }, { threshold: [0.1, 0.3, 0.5, 0.8] });

    const timeout = setTimeout(() => {
      document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));
    }, 1000);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  // Ganti teks animasi
  useEffect(() => {
     const texts = dialogs[activeSection] || dialogs.beranda;
     
     setIsVisible(false);
     const timer1 = setTimeout(() => {
       setCurrentText(texts[Math.floor(Math.random() * texts.length)]);
       setIsVisible(true);
     }, 400);

     const timer2 = setInterval(() => {
       setIsVisible(false);
       setTimeout(() => {
          setCurrentText(texts[Math.floor(Math.random() * texts.length)]);
          setIsVisible(true);
       }, 400);
     }, 8000); // ganti teks tiap 8 detik

     return () => { clearTimeout(timer1); clearInterval(timer2); };
  }, [activeSection]);

  // Load Live2D Core
  useEffect(() => {
    const cleanUpWidget = () => {
      const widget = document.getElementById('live2d-widget');
      if (widget) widget.remove();
      const canvas = document.getElementById('live2dcanvas');
      if (canvas) canvas.remove();
    };

    cleanUpWidget();

    const initLive2D = () => {
      if (window.L2Dwidget) {
        const isMobile = window.innerWidth < 768;
        window.L2Dwidget.init({
          model: {
            jsonPath: jsonPath,
          },
          display: {
            position: isMobile ? 'left' : position,
            width: isMobile ? 300 : 400,
            height: isMobile ? 500 : 700,
            hOffset: isMobile ? -20 : (position === 'right' ? 80 : 20),
            vOffset: isMobile ? 80 : 0,
          },
          mobile: {
            show: true,
            scale: 0.6,
            motion: true,
          },
          react: {
            opacityDefault: 1,
            opacityOnHover: 1,
          },
        });
      }
    };

    const scriptId = 'live2d-script';
    let script = document.getElementById(scriptId);
    
    if (script) {
      script.remove();
      window.L2Dwidget = undefined;
    }

    script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
    script.async = true;
    script.onload = initLive2D;
    document.body.appendChild(script);

    return () => {
      cleanUpWidget();
    };
  }, [jsonPath, position]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div 
      className={`fixed z-[99999] p-4 md:p-5 rounded-2xl shadow-2xl backdrop-blur-md border transition-all duration-500 ease-out transform pointer-events-none ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
      }`}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        color: '#0f172a',
        borderColor: 'rgba(203, 213, 225, 0.5)',
        maxWidth: isMobile ? '200px' : '280px',
        bottom: isMobile ? '360px' : '540px',
        left: isMobile ? '130px' : 'auto',
        right: isMobile ? 'auto' : '260px',
      }}
    >
      <p className="font-bold text-xs md:text-sm leading-relaxed text-slate-800 drop-shadow-sm">
        {currentText}
      </p>
      
      {/* Ekor Balon Chat */}
      <div 
        className="absolute w-5 h-5 bg-white/95 border-r border-b"
        style={{
          bottom: '-10px',
          borderColor: 'rgba(203, 213, 225, 0.5)',
          left: isMobile ? '20px' : 'auto',
          right: isMobile ? 'auto' : '30px',
          transform: 'rotate(45deg)',
        }}
      />
    </div>
  );
}
