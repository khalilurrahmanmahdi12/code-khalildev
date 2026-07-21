import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export default function Cta() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="grid items-center gap-10 p-6 md:p-10 lg:grid-cols-2 lg:p-14">
            {/* Left */}
            <div>
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                🚀 Mulai Sekarang
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Siap Memiliki
                <span className="block text-blue-600">
                  Website Profesional?
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                Bangun website modern, cepat, dan responsif untuk meningkatkan
                kepercayaan pelanggan terhadap bisnis Anda.
              </p>

              <div className="mt-7 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-blue-600"
                  />
                  <span>Gratis konsultasi</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-blue-600"
                  />
                  <span>Support setelah website selesai</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Konsultasi Gratis
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Ceritakan kebutuhan website Anda. Kami siap membantu memilih
                solusi terbaik sesuai kebutuhan dan anggaran.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  <MessageCircle size={20} />
                  Chat WhatsApp
                </a>

                <a
                  href="#pricing"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-4 font-semibold text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
                >
                  Lihat Paket
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                <p className="text-sm font-medium text-slate-700">
                  💬 Respon cepat • Konsultasi gratis • Tanpa biaya awal
                </p>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </section>
  );
}