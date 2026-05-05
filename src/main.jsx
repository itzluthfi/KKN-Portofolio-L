import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx' // tambahkan import Navbar
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import DetailProyek from './components/DetailProyek.jsx'

import "remixicon/fonts/remixicon.css"; 
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PreLoader />
      <div className='container mx-auto px-4'>
        {/* Navbar dipindah ke luar agar muncul di semua halaman */}
        <Navbar /> 
        
        <Routes>
          {/* Halaman Utama (Beranda) */}
          <Route path="/" element={<App />} />
          
          {/* Halaman Detail Proyek yang dinamis berdasarkan slug */}
          <Route path="/proyek/:slug" element={<DetailProyek />} />
        </Routes>

        {/* Footer dipindah ke luar agar muncul di semua halaman */}
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
