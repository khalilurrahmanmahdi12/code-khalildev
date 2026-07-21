import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Floating Background */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 opacity-60 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100 opacity-60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-14 md:flex md:min-h-screen md:items-center md:px-6 md:pt-32 md:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 md:text-sm"
            >
              🚀 Website Profesional untuk Bisnis Anda
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl"
            >
              Bangun Website

              <span className="block text-blue-600">
                Modern & Profesional
              </span>

              untuk Bisnis Anda
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg"
            >
              Kami membantu UMKM, perusahaan, instansi, maupun personal brand
              memiliki website yang cepat, modern, responsif, dan dipercaya
              pelanggan.
            </motion.p>

            {/* Checklist */}

            <div className="mt-8 space-y-3">
              {[
                "Desain modern & responsif",
                "SEO Friendly",
                "Gratis konsultasi sebelum mulai",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.6 + index * 0.15,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-blue-600"
                  />

                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                <MessageCircle size={20} />
                Konsultasi Gratis
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
              >
                Lihat Paket

                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            {/* Statistik */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 md:mt-14"
            >
              {[
                ["30+", "Website"],
                ["100%", "Responsive"],
                ["24/7", "Support"],
              ].map((item) => (
                <motion.div
                  key={item[0]}
                  whileHover={{
                    y: -5,
                  }}
                >
                  <h3 className="text-2xl font-bold text-blue-600 md:text-3xl">
                    {item[0]}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 md:text-sm">
                    {item[1]}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="relative hidden lg:block"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

              <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-5">

                {[
                  {
                    title: "Landing Page",
                    text: "Website promosi modern dengan desain premium.",
                    active: false,
                  },
                  {
                    title: "Company Profile",
                    text: "Tingkatkan kredibilitas bisnis Anda.",
                    active: true,
                  },
                  {
                    title: "Sistem Web Custom",
                    text: "Dibangun sesuai kebutuhan bisnis Anda.",
                    active: false,
                  },
                ].map((card) => (
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    key={card.title}
                    className={`rounded-xl p-5 transition ${
                      card.active
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100"
                    }`}
                  >
                    <h4
                      className={`font-bold ${
                        card.active
                          ? ""
                          : "text-slate-900"
                      }`}
                    >
                      {card.title}
                    </h4>

                    <p
                      className={`mt-2 text-sm ${
                        card.active
                          ? "text-blue-100"
                          : "text-slate-500"
                      }`}
                    >
                      {card.text}
                    </p>
                  </motion.div>
                ))}

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}