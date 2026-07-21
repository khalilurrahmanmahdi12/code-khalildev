import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  { name: "Beranda", href: "#home" },
  { name: "Layanan", href: "#services" },
  { name: "Keunggulan", href: "#why-choose" },
  { name: "Harga", href: "#pricing" },
  { name: "Alur", href: "#workflow" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/30 bg-white/70 py-2 shadow-lg backdrop-blur-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-6">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-tight text-slate-900"
        >
          Code <span className="text-blue-600">KhalilDev</span>
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menus.map((menu, index) => (
            <motion.a
              key={menu.name}
              href={menu.href}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.4,
              }}
              className="group relative text-sm font-medium text-slate-700 transition"
            >
              {menu.name}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop Button */}
        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 lg:flex"
        >
          Konsultasi Gratis
        </motion.a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="lg:hidden"
          >
            <div className="mx-4 mt-4 rounded-2xl border border-slate-200 bg-white shadow-xl backdrop-blur-xl">
              <div className="flex flex-col p-5">
                {menus.map((menu) => (
                  <a
                    key={menu.name}
                    href={menu.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {menu.name}
                  </a>
                ))}

                <motion.a
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Konsultasi Gratis
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}