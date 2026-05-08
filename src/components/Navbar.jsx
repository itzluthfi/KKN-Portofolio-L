import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { href: "/#beranda", label: "Beranda", icon: "ri-home-5-line", iconActive: "ri-home-5-fill" },
  { href: "/#tentang", label: "Tentang", icon: "ri-user-3-line", iconActive: "ri-user-3-fill" },
  { href: "/#proyek", label: "Proyek", icon: "ri-code-box-line", iconActive: "ri-code-box-fill" },
  { href: "/#kontak", label: "Kontak", icon: "ri-mail-line", iconActive: "ri-mail-fill" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section for bottom bar highlight
      const sections = ["beranda", "tentang", "proyek", "kontak"];
      let current = "beranda";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    const id = href.replace("/#", "");
    return activeSection === id;
  };

  return (
    <>
      {/* ─── Desktop Navbar ─── */}
      <header className={`site-nav mt-4 animate__animated animate__fadeIn animate__delay-3s ${scrolled ? "shadow-cyan-950/30" : ""}`}>
        <div className="flex min-h-16 items-center justify-between px-4 md:px-5">
          <Link to="/#beranda" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center bg-cyan-300 font-black text-slate-950">LS</span>
            <span className="hidden font-black text-white sm:block">Luthfi Shidqi</span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(item => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link px-4 py-2 text-sm font-bold transition-colors ${isActive(item.href) ? "text-cyan-300" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a href="https://github.com/itzluthfi" target="_blank" rel="noopener noreferrer" className="nav-link grid h-10 w-10 place-items-center" aria-label="GitHub">
              <i className="ri-github-fill text-xl" />
            </a>
            <a href="https://www.instagram.com/itzluthfi/" target="_blank" rel="noopener noreferrer" className="nav-link grid h-10 w-10 place-items-center" aria-label="Instagram">
              <i className="ri-instagram-fill text-xl" />
            </a>
            <Link to="/#kontak" className="primary-action min-h-10 px-4 text-sm">
              Hire Me
            </Link>
          </div>

          {/* Mobile: tombol Download CV di kanan atas */}
          <a
            href={`${import.meta.env.BASE_URL}CV_Luthfi.pdf`}
            download
            className="flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-xs font-bold text-cyan-300 backdrop-blur transition-all hover:bg-cyan-400/20 md:hidden"
            aria-label="Download CV"
          >
            <i className="ri-download-cloud-2-line text-sm" />
            CV
          </a>
        </div>
      </header>

      {/* ─── Mobile Bottom Bar ─── */}
      <nav className="mobile-bottom-bar md:hidden animate__animated animate__fadeInUp animate__delay-3s">
        <div className="mobile-bottom-bar-inner">
          {navItems.map(item => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`mobile-nav-item ${active ? "mobile-nav-item--active" : ""}`}
                aria-label={item.label}
              >
                <span className="mobile-nav-icon-wrap">
                  <i className={active ? item.iconActive : item.icon} />
                  {active && <span className="mobile-nav-ping" />}
                </span>
                <span className="mobile-nav-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
