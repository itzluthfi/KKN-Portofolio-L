import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer mt-24 py-8">
      <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <Link to="/#beranda" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center bg-lime-300 font-black text-slate-950">LS</span>
          <span>
            <strong className="block text-lg text-white">Luthfi Shidqi</strong>
            <small className="text-slate-400">Web Dev · Mobile · IT Staff ITATS</small>
          </span>
        </Link>

        <nav className="flex flex-wrap gap-4 text-sm font-bold text-slate-300">
          <Link to="/#beranda" className="hover:text-cyan-300">Beranda</Link>
          <Link to="/#tentang" className="hover:text-cyan-300">Tentang</Link>
          <Link to="/#proyek" className="hover:text-cyan-300">Proyek</Link>
          <Link to="/#kontak" className="hover:text-cyan-300">Kontak</Link>
        </nav>

        <div className="flex items-center gap-3 text-2xl text-slate-300">
          <a href="https://github.com/itzluthfi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-300 transition-colors">
            <i className="ri-github-fill" />
          </a>
          <a href="https://www.instagram.com/itzluthfi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
            <i className="ri-instagram-fill" />
          </a>
          <a href="https://www.linkedin.com/in/luthfi-shidqi-b99862372/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
            <i className="ri-linkedin-fill" />
          </a>
          <a href="https://www.youtube.com/channel/UC_WCJzQTbagpZww5g9W9EpQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-400 transition-colors">
            <i className="ri-youtube-fill" />
          </a>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Luthfi Shidqi Habibulloh · Driyorejo, Gresik, Jatim, Indonesia
      </div>
    </footer>
  );
};

export default Footer;
