import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Code <span className="text-blue-500">KhalilDev</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Jasa pembuatan website modern, responsif, cepat, dan profesional
              untuk UMKM, perusahaan, instansi, sekolah, maupun kebutuhan
              personal.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-pink-600"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-sky-600"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Menu
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#home" className="transition hover:text-white">
                  Beranda
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-white">
                  Layanan
                </a>
              </li>

              <li>
                <a href="#pricing" className="transition hover:text-white">
                  Paket Harga
                </a>
              </li>

              <li>
                <a href="#workflow" className="transition hover:text-white">
                  Cara Kerja
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Layanan
            </h3>

            <ul className="mt-6 space-y-4">
              <li>Landing Page</li>
              <li>Company Profile</li>
              <li>Sistem / Web App</li>
              <li>Website Custom</li>
              <li>Maintenance Website</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Hubungi Kami
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-blue-500"
                />
                <span>+62 812-3456-7890</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-blue-500"
                />
                <span>hello@khalildev.web.id</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  size={20}
                  className="text-blue-500"
                />
                <span>Indonesia</span>
              </div>
            </div>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Konsultasi Gratis
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Code KhalilDev. All rights reserved.
          </p>

          <p>
            Dibuat dengan React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}