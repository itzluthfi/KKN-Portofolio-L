import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { href: "/#beranda", label: "Beranda" },
  { href: "/#tentang", label: "Tentang" },
  { href: "/#proyek", label: "Proyek" },
  { href: "/#kontak", label: "Kontak" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-nav mt-4 ${active ? "shadow-cyan-950/30" : ""}`}>
      <div className="flex min-h-16 items-center justify-between px-4 md:px-5">
        <Link to="/#beranda" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center bg-cyan-300 font-black text-slate-950">LS</span>
          <span className="hidden font-black text-white sm:block">Luthfi Shidqi</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(item => (
            <Link key={item.href} to={item.href} className="nav-link px-4 py-2 text-sm font-bold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="https://github.com/itzluthfi" target="_blank" rel="noopener noreferrer" className="nav-link grid h-10 w-10 place-items-center" aria-label="GitHub">
            <i className="ri-github-fill text-xl" />
          </a>
          <Link to="/#kontak" className="primary-action min-h-10 px-4 text-sm">
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-2xl text-white md:hidden"
          onClick={() => setOpen(value => !value)}
          aria-label="Toggle navigation"
        >
          <i className={open ? "ri-close-line" : "ri-menu-3-line"} />
        </button>
      </div>

      {open && (
        <nav className="mobile-menu mx-3 mb-3 grid gap-1 p-2 md:hidden">
          {navItems.map(item => (
            <Link
              key={item.href}
              to={item.href}
              className="nav-link px-4 py-3 text-sm font-bold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
