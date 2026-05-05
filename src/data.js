import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/virtualbox.png";
import Tools3 from "/assets/tools/vmware.png";
import Tools4 from "/assets/tools/ubuntu.png";
import Tools5 from "/assets/tools/kalilinux.png";
import Tools6 from "/assets/tools/iptables.png";
import Tools7 from "/assets/tools/mysql.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/sql.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/windows.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
    link: "https://code.visualstudio.com/",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Oracle Virtualbox",
    ket: "Virtual machine",
    dad: "200",
    link: "https://www.virtualbox.org/",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "VMware Workstation Pro",
    ket: "Virtual machine",
    dad: "300",
    link: "https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Ubuntu Server",
    ket: "Operating System",
    dad: "400",
    link: "https://ubuntu.com/server",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Kali Linux",
    ket: "Operating System",
    dad: "500",
    link: "https://www.kali.org/",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Iptables",
    ket: "Firewall",
    dad: "600",
    link: "https://netfilter.org/projects/iptables/",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "MySQL",
    ket: "Database Management System",
    dad: "700",
    link: "https://www.mysql.com/",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
    link: "https://github.com/",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "SQL",
    ket: "Database Query Language",
    dad: "900",
    link: "https://www.iso.org/standard/76583.html",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
    link: "https://www.canva.com/",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Windows",
    ket: "Operating System",
    dad: "1100",
    link: "https://www.microsoft.com/windows",
  },
];

export const toolLinks = {
  "Google Cloud Platform": "https://cloud.google.com/",
  "IAM Role": "https://cloud.google.com/iam",
  "VM Instances": "https://cloud.google.com/compute",
  "App Engine": "https://cloud.google.com/appengine",
  "Google Cloud Console": "https://console.cloud.google.com/",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  Javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  AOS: "https://michalsnik.github.io/aos/",
  Bootstrap: "https://getbootstrap.com/",
  PHP: "https://www.php.net/",
  Laravel: "https://laravel.com/",
  cPanel: "https://cpanel.net/",
  Virtualbox: "https://www.virtualbox.org/",
  "VMware Workstation Pro": "https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion",
  "Ubuntu Server": "https://ubuntu.com/server",
  "Kali Linux": "https://www.kali.org/",
  Iptables: "https://netfilter.org/projects/iptables/",
  MySQL: "https://www.mysql.com/",
  Nmap: "https://nmap.org/",
  "SSH Server": "https://www.openssh.com/",
  "Telegram Bot API": "https://core.telegram.org/bots/api",
  "SMTP Server": "https://datatracker.ietf.org/doc/html/rfc5321",
  Zabbix: "https://www.zabbix.com/",
};

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
// import Proyek4 from "/assets/proyek/proyek4.webp";
// import Proyek5 from "/assets/proyek/proyek5.webp";
// import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Smart Chatbot to Assist Student in Learning ",
    desk: "Cloud Computing - Bangkit Academy by Google, Goto, and Traveloka",
    tools: ["Google Cloud Platform", "IAM Role", "VM Instances", "App Engine", "Google Cloud Console"],
    dad: "200",
    slug: "smart-chatbot",
    linkGithub: "https://github.com/itzluthfi",
    deskripsiLengkap: "Capstone Project merupakan tugas akhir dari program Bangkit Academy. Berkolaborasi dalam tim yang terdiri dari enam anggota, saya berperan dalam manajemen infrastruktur pada Google Cloud Platform (GCP). Fokus mengembangkan Smart Chatbot menggunakan infrastruktur Google Cloud Platform, untuk membantu siswa dalam proses pembelajaran memanfaatkan layanan cloud yang skalabel dan efisien. Bertanggung jawab dalam mengonfigurasi VM Instances sebagai infrastruktur server utama, pengelolaan IAM Role untuk manajemen akses tim, serta melakukan deployment aplikasi menggunakan App Engine. Memastikan aplikasi chatbot tersebut terintegrasi dengan baik pada Google Cloud Console dan dapat diakses secara publik. Keseluruhan proses sistem ini telah saya dokumentasikan secara komprehensif dalam laporan akhir proyek."
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "IndoTeknisi",
    desk: "FrontEnd Developer - Rumah Startup Indonesia",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Bootstrap","PHP", "Laravel", "cPanel"],
    dad: "300",
    slug: "indoteknisi",
    linkGithub: "https://github.com/itzluthfi",
    deskripsiLengkap: "Selama 6 bulan masa magang di Rumah Startup Indonesia, saya berkontribusi secara langsung dalam pengembangan platform IndoTeknisi. Tanggung jawab utama saya mengembangkan UI/UX website IndoTeknisi yang responsif menggunakan Bootstrap dan AOS Animation, serta berkolaborasi bersama tim untuk mengintegrasikan sistem backend PHP untuk operasional. Integrasi ini mencakup pengembangan fitur dinamis seperti filter harga, kategori pekerjaan teknisi, hingga portal pembelajaran mandiri. Selain pengembangan fitur, saya juga mengelola infrastruktur hosting melalui cPanel guna memastikan website berjalan stabil dan dapat diakses dengan lancar oleh publik."
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Implementasi IPtables Sebagai IDPS Untuk Keamanan Server Dengan Notifikasi Bot Telegram Dan Email ",
    desk: "Project Skripsi",
    tools: ["Virtualbox", "VMware Workstation Pro", "Ubuntu Server", "Kali Linux", "Iptables", "MySQL", "Nmap","SSH Server", "Telegram Bot API", "SMTP Server", "Zabbix"],
    dad: "400",
    slug: "implementasi-iptables",
    linkGithub: "https://github.com/itzluthfi",
    deskripsiLengkap: "Proyek skripsi ini berfokus pada perancangan sistem keamanan jaringan menggunakan Iptables pada Ubuntu Server. Sistem ini juga menggunakan Kali Linux sebagai kebutuhan simulasi serangan. IPtables bertindak sebagai Intrusion Detection and Prevention System (IDPS) yang secara otomatis mendeteksi sekaligus memblokir serangan. Apabila terdeteksi aktivitas mencurigakan, log IPtables akan langsung mengirimkan notifikasi secara real-time melalui bot Telegram dan Email. Selain itu, stabilitas infrastruktur dijaga secara proaktif melalui pemantauan metrik performa vital seperti CPU, RAM, dan bandwidth menggunakan platform Zabbix."
  },
  // {
  //   id: 4,
  //   gambar: Proyek4,
  //   nama: "Website Course",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
  //   dad: "500",
  // },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: "Web Portfolio",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];
