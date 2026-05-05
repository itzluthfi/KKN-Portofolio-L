import { useEffect, useMemo, useRef, useState } from 'react';
import DataImage from './data';
import { listTools, listProyek, toolLinks } from './data';
import Particles from './Particles';
import Lanyard from './Lanyard.jsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Crosshair from './components/effects/Crosshair.jsx';
import GradualBlur from './components/effects/GradualBlur.jsx';
import ImageTrail from './components/effects/ImageTrail.jsx';
import LaserFlow from './components/effects/LaserFlow.jsx';

let isFirstLoad = true;

const stats = [
  { value: '5+', label: 'Tahun studi dan eksplorasi IT' },
  { value: '3', label: 'Project end-to-end terdokumentasi' },
  { value: '24/7', label: 'Mindset monitoring dan reliability' },
];

const githubFallback = {
  publicRepos: 42,
  followers: 8,
  following: 8,
  stars: 0,
  forks: 0,
  topLanguages: ['JavaScript', 'CSS', 'PHP'],
  latestRepos: [],
};

const focusAreas = [
  {
    icon: 'ri-server-line',
    title: 'System Administration',
    body: 'Mengelola server Linux, service deployment, akses, dan stabilitas infrastruktur agar aplikasi tetap siap dipakai.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Network Security',
    body: 'Membangun eksperimen IDPS, firewall rules, logging, dan alerting untuk mendeteksi aktivitas mencurigakan.',
  },
  {
    icon: 'ri-layout-4-line',
    title: 'Frontend Engineering',
    body: 'Membuat antarmuka React yang responsif, rapi, dan nyaman dipakai untuk mempresentasikan sistem teknis.',
  },
];

const timeline = [
  { year: '2021', title: 'Fondasi IT', text: 'Memperkuat jaringan komputer, sistem operasi, database, dan pemrograman dasar.' },
  { year: '2023', title: 'Cloud Collaboration', text: 'Berperan pada pengelolaan infrastruktur GCP untuk capstone Bangkit Academy.' },
  { year: '2024', title: 'Frontend Internship', text: 'Mengembangkan UI website IndoTeknisi dan membantu integrasi workflow platform.' },
  { year: '2025', title: 'Security Research', text: 'Merancang IDPS berbasis Iptables dengan notifikasi Telegram, Email, dan monitoring.' },
];

const workflow = [
  'Audit kebutuhan sistem',
  'Rancang topologi dan akses',
  'Deploy, monitor, dokumentasi',
  'Iterasi dari log dan feedback',
];

function App() {
  const shellRef = useRef(null);
  const [githubStats, setGithubStats] = useState(githubFallback);
  const location = useLocation();
  const navigate = useNavigate();

  const trailImages = useMemo(
    () => [
      DataImage.HeroImage,
      ...listProyek.map(project => project.gambar),
      ...listTools.slice(0, 5).map(tool => tool.gambar),
    ],
    []
  );

  useEffect(() => {
    isFirstLoad = false;
  }, []);

  useEffect(() => {
    const navEntries = window.performance.getEntriesByType('navigation');

    if (navEntries.length > 0 && navEntries[0].type === 'reload') {
      navigate('/', { replace: true });
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    let cancelled = false;

    const loadGithubStats = async () => {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch('https://api.github.com/users/itzluthfi'),
          fetch('https://api.github.com/users/itzluthfi/repos?per_page=100&sort=updated'),
        ]);

        if (!profileResponse.ok || !reposResponse.ok) return;

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))].slice(0, 4);

        if (!cancelled) {
          setGithubStats({
            publicRepos: profile.public_repos ?? githubFallback.publicRepos,
            followers: profile.followers ?? githubFallback.followers,
            following: profile.following ?? githubFallback.following,
            stars: repos.reduce((total, repo) => total + (repo.stargazers_count || 0), 0),
            forks: repos.reduce((total, repo) => total + (repo.forks_count || 0), 0),
            topLanguages: languages.length ? languages : githubFallback.topLanguages,
            latestRepos: repos.slice(0, 3).map(repo => ({
              name: repo.name,
              url: repo.html_url,
              language: repo.language || 'Repository',
              updated: repo.updated_at,
            })),
          });
        }
      } catch {
        setGithubStats(githubFallback);
      }
    };

    loadGithubStats();
    return () => {
      cancelled = true;
    };
  }, []);

  const handlePointerMove = event => {
    const { innerWidth, innerHeight } = window;
    shellRef.current?.style.setProperty('--mx', (event.clientX / innerWidth - 0.5).toFixed(3));
    shellRef.current?.style.setProperty('--my', (event.clientY / innerHeight - 0.5).toFixed(3));
  };

  return (
    <main
      ref={shellRef}
      className="portfolio-shell"
      onPointerMove={handlePointerMove}
    >
      <Crosshair />
      <ImageTrail images={trailImages} />
      <div className="fixed inset-0 -z-20 bg-[#05080a]" />
      <div className="fixed inset-0 -z-10 opacity-70">
        <Particles
          particleColors={['#f8fafc', '#67e8f9', '#bef264']}
          particleCount={180}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={95}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <section id="beranda" className="hero-stage relative min-h-[calc(100vh-96px)] overflow-hidden pt-8">
        <div className="hero-grid absolute inset-0 -z-10" />
        <div className="hero-scanline absolute inset-x-0 top-12 -z-10 h-px" />
        <LaserFlow />
        <GradualBlur position="bottom" />

        <div className="grid min-h-[calc(100vh-120px)] grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className={`relative z-10 max-w-3xl animate__animated animate__fadeInUp ${isFirstLoad ? 'animate__delay-1s' : ''}`}>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="status-pill">
                <span className="status-dot" />
                Available for IT support and frontend roles
              </span>
              <span className="mini-pill">Bandung, Indonesia</span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              System Admin / IT Support / Frontend
            </p>
            <h1 className="max-w-4xl text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] text-white">
              Luthfi Shidqi Habibulloh
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Saya membangun dan merapikan sistem dari sisi infrastruktur, keamanan jaringan, sampai antarmuka web. Fokus saya sederhana: sistem harus jelas, stabil, mudah dipantau, dan enak dipakai.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/CV_Rifky Octory Mulyana.pdf" download className="primary-action">
                <i className="ri-download-cloud-2-line" />
                Download CV
              </a>
              <Link to="/#proyek" className="secondary-action">
                <i className="ri-terminal-box-line" />
                Lihat Project
              </Link>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map(item => (
                <div className="metric-tile" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative h-[64vh] min-h-[440px] animate__animated animate__fadeIn ${isFirstLoad ? 'animate__delay-2s' : ''}`}>
            <div className="lanyard-orbit" />
            <div className="lanyard-top-pin" />
            <div className="absolute inset-[3%_-5%_-6%] translate-x-[calc(var(--mx)*-18px)] translate-y-[calc(var(--my)*-12px)]">
              <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} fov={20} />
            </div>
            <div className="floating-console">
              <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
                <span className="console-light bg-rose-400" />
                <span className="console-light bg-amber-300" />
                <span className="console-light bg-lime-300" />
                ops-note.sh
              </div>
              <p><span>$</span> monitor --logs --alerts</p>
              <p><span>OK</span> service healthy</p>
              <p><span>UP</span> portfolio live</p>
            </div>
          </div>
        </div>
      </section>

      <section className="github-section py-24">
        <div className="github-panel">
          <div>
            <p className="eyebrow">GitHub live stats</p>
            <h2 className="section-title max-w-3xl">Aktivitas coding dari profil GitHub saya.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Statistik ini diambil dari API publik GitHub untuk akun itzluthfi, dengan fallback lokal jika koneksi atau rate limit sedang bermasalah.
            </p>
            <a href="https://github.com/itzluthfi" target="_blank" rel="noopener noreferrer" className="secondary-action mt-8">
              <i className="ri-github-fill" />
              github.com/itzluthfi
            </a>
          </div>

          <div className="github-metrics">
            <div><strong>{githubStats.publicRepos}</strong><span>Public repos</span></div>
            <div><strong>{githubStats.followers}</strong><span>Followers</span></div>
            <div><strong>{githubStats.stars}</strong><span>Total stars</span></div>
            <div><strong>{githubStats.forks}</strong><span>Total forks</span></div>
          </div>

          <div className="github-repos">
            {githubStats.latestRepos.length > 0 ? githubStats.latestRepos.map(repo => (
              <a href={repo.url} target="_blank" rel="noopener noreferrer" key={repo.name}>
                <span>{repo.language}</span>
                <strong>{repo.name}</strong>
                <small>Updated {new Date(repo.updated).toLocaleDateString('id-ID')}</small>
              </a>
            )) : githubStats.topLanguages.map(language => (
              <a href="https://github.com/itzluthfi?tab=repositories" target="_blank" rel="noopener noreferrer" key={language}>
                <span>Language</span>
                <strong>{language}</strong>
                <small>Repository stack</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="section-band py-24">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="sticky-panel">
            <img src={DataImage.HeroImage} alt="Luthfi Shidqi Habibulloh" className="profile-photo" loading="lazy" />
            <div>
              <p className="eyebrow">Tentang saya</p>
              <h2 className="section-title">Engineer yang suka sistem rapi dan visual yang punya fungsi.</h2>
            </div>
            <p className="text-base leading-8 text-slate-300">
              Lulusan S1 Teknik Komputer dengan minat kuat pada System Administration, IT Support, keamanan jaringan, dan pengembangan frontend React. Saya nyaman membaca log, mengatur server, membuat dokumentasi, dan mengubah ide teknis menjadi UI yang mudah dipahami.
            </p>
          </div>

          <div className="space-y-5">
            {focusAreas.map((area, index) => (
              <article className="focus-card" key={area.title} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="focus-icon"><i className={area.icon} /></div>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Workflow</p>
            <h2 className="section-title max-w-3xl">Dari requirement sampai sistem bisa dipantau.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-400">
            Saya suka proses yang terlihat: scope jelas, konfigurasi tercatat, deployment bisa diulang, dan masalah punya jejak lewat log.
          </p>
        </div>

        <div className="workflow-strip">
          {workflow.map((item, index) => (
            <div className="workflow-step" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map(item => (
            <article className="timeline-card" key={item.title}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proyek" className="section-band py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title max-w-3xl">Project yang menunjukkan cara saya berpikir.</h2>
          </div>
          <Link to="/#kontak" className="text-link">
            Diskusi project <i className="ri-arrow-right-up-line" />
          </Link>
        </div>

        <div className="project-showcase">
          {listProyek.map((proyek, index) => (
            <article className="project-card" key={proyek.id} data-aos="fade-up" data-aos-delay={proyek.dad}>
              <Link to={`/proyek/${proyek.slug}`} className="project-media" aria-label={`Buka detail ${proyek.nama}`}>
                <img src={proyek.gambar} alt={proyek.nama} loading="lazy" />
                <span>0{index + 1}</span>
              </Link>
              <div className="project-copy">
                <p>{proyek.desk}</p>
                <Link to={`/proyek/${proyek.slug}`} className="project-title-link">
                  <h3>{proyek.nama}</h3>
                </Link>
                <div className="chip-row">
                  {proyek.tools.slice(0, 5).map(tool => (
                    <a href={toolLinks[tool] || 'https://github.com/itzluthfi'} target="_blank" rel="noopener noreferrer" key={tool}>
                      {tool}
                    </a>
                  ))}
                </div>
                <div className="project-actions">
                  <Link to={`/proyek/${proyek.slug}`}>
                    Detail <i className="ri-arrow-right-line" />
                  </Link>
                  <a href={proyek.linkGithub} target="_blank" rel="noopener noreferrer" aria-label="GitHub itzluthfi">
                    <i className="ri-github-fill" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mb-12 text-center">
          <p className="eyebrow justify-center">Tool stack</p>
          <h2 className="section-title mx-auto max-w-3xl">Tools yang sering saya pakai untuk build, debug, dan deploy.</h2>
        </div>

        <div className="tool-wall">
          {listTools.map(tool => (
            <a className="tool-tile" href={tool.link} target="_blank" rel="noopener noreferrer" key={tool.id} data-aos="zoom-in" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt={tool.nama} loading="lazy" />
              <div>
                <h3>{tool.nama}</h3>
                <p>{tool.ket}</p>
              </div>
              <i className="ri-arrow-right-up-line tool-arrow" />
            </a>
          ))}
        </div>
      </section>

      <section id="kontak" className="contact-section my-24">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Kontak</p>
            <h2 className="section-title max-w-3xl">Punya sistem yang perlu dirapikan atau UI yang perlu dibuat lebih hidup?</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Kirim pesan singkat. Saya bisa bantu dari analisis kebutuhan, setup environment, deployment, monitoring, sampai frontend portfolio atau dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:luthfishidqi@example.com" className="secondary-action">
                <i className="ri-mail-send-line" />
                Email
              </a>
              <a href="https://wa.me/6289507370805" target="_blank" rel="noopener noreferrer" className="secondary-action">
                <i className="ri-whatsapp-line" />
                62895 0737 0805
              </a>
              <a href="https://github.com/itzluthfi" target="_blank" rel="noopener noreferrer" className="secondary-action">
                <i className="ri-github-fill" />
                GitHub
              </a>
            </div>
          </div>

          <form action="https://formspree.io/f/xaqdkykj" method="POST" className="contact-form" autoComplete="off">
            <label>
              Nama
              <input type="text" name="nama" placeholder="Nama lengkap" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="email@domain.com" required />
            </label>
            <label>
              Pesan
              <textarea name="pesan" rows="5" placeholder="Ceritakan kebutuhan project..." required />
            </label>
            <button type="submit">
              Kirim Pesan <i className="ri-send-plane-2-line" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
