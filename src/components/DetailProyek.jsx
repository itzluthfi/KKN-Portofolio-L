import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { listProyek, toolLinks } from '../data'; 
import Particles from '../Particles';

const DetailProyek = () => {
  const { slug } = useParams();
  
  // 1. State untuk mengatur status zoom gambar
  const [isZoomed, setIsZoomed] = useState(false);

  // Memaksa layar untuk selalu mulai dari koordinat atas (0, 0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proyek = listProyek.find(p => p.slug === slug);

  if (!proyek) {
    return <div className="text-center mt-32 text-2xl font-bold">Proyek tidak ditemukan</div>;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* --- 2. FITUR ZOOM (MODAL IMAGE) --- */}
      {/* Kode ini hanya muncul jika gambar diklik (isZoomed = true) */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out animate__animated animate__fadeIn animate__faster"
          onClick={() => setIsZoomed(false)} // Klik di mana saja untuk menutup zoom
        >
          {/* Ikon Close (Silang) di pojok kanan atas */}
          <i className="ri-close-line absolute top-6 right-6 text-4xl text-white hover:text-violet-500 transition-colors"></i>
          
          <img 
            src={proyek.gambar} 
            alt={proyek.nama} 
            className="max-w-[90%] max-h-[90vh] object-contain rounded-xl shadow-2xl animate__animated animate__zoomIn animate__faster"
          />
        </div>
      )}
      {/* ----------------------------------- */}

      <div className="pt-32 pb-10 min-h-screen animate__animated animate__fadeIn max-w-5xl mx-auto">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center leading-snug">
          {proyek.nama}
        </h1>
        
        {/* 3. GAMBAR UTAMA DI HALAMAN DETAIL */}
        <img 
          src={proyek.gambar} 
          alt={proyek.nama} 
          onClick={() => setIsZoomed(true)} // Aksi saat gambar diklik
          className="w-full md:w-4/5 lg:w-3/4 mx-auto block object-cover rounded-xl mb-10 shadow-lg shadow-violet-900/20 cursor-zoom-in hover:scale-[1.02] transition-transform duration-300" 
        />
        
        <div className="bg-zinc-800 p-5 md:p-8 rounded-xl border border-zinc-700">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-violet-400">Deskripsi Proyek</h2>
          <p className="text-base md:text-lg/loose mb-8 opacity-80 text-justify">
            {proyek.deskripsiLengkap}
          </p>
          
          <h2 className="text-lg md:text-xl font-bold mb-4 text-violet-400">Tools yang Digunakan:</h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {proyek.tools.map((tool, index) => (
              <a
                href={toolLinks[tool] || 'https://github.com/itzluthfi'}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-3 md:py-2 md:px-4 text-sm md:text-base border border-zinc-500 bg-zinc-700 rounded-lg font-medium hover:border-cyan-300 hover:text-cyan-200"
                key={index}
              >
                {tool}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProyek;
