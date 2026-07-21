import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Landing Page",
    price: "Mulai Rp499K",
    description: "Cocok untuk UMKM, promosi produk, event, atau personal branding.",
    features: [
      "1 Halaman Website",
      "Responsive Design",
      "Integrasi WhatsApp",
      "Optimasi Kecepatan",
      "Gratis Revisi 2x",
    ],
    popular: false,
  },
  {
    name: "Company Profile",
    price: "Mulai Rp999K",
    description: "Website profesional untuk perusahaan, instansi, maupun organisasi.",
    features: [
      "Hingga 5 Halaman",
      "Responsive Semua Device",
      "SEO Friendly",
      "Google Maps",
      "Gratis Revisi 3x",
    ],
    popular: true,
  },
  {
    name: "Sistem / Web App",
    price: "Mulai Rp1.499K",
    description: "Pengembangan aplikasi web custom sesuai kebutuhan bisnis Anda.",
    features: [
      "Dashboard Admin",
      "Login Multi User",
      "Database MySQL",
      "API Integration",
      "Support Setelah Selesai",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Paket Harga
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Pilih Paket
            <span className="block text-blue-600">
              Sesuai Kebutuhan
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Harga transparan tanpa biaya tersembunyi. Pilih paket yang paling
            sesuai dengan kebutuhan Anda.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 transition duration-300 ${
                item.popular
                  ? "border-blue-600 shadow-xl"
                  : "border-slate-200 hover:border-blue-600 hover:shadow-lg"
              }`}
            >
              {item.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  ⭐ Paling Populer
                </span>
              )}

              <h3 className="text-2xl font-bold text-slate-900">
                {item.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

              <div className="mt-6">
                <h4 className="text-4xl font-extrabold text-blue-600">
                  {item.price}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Sekali bayar
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-blue-100 p-1">
                      <Check
                        size={14}
                        className="text-blue-600"
                      />
                    </div>

                    <span className="text-slate-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 flex justify-center rounded-xl px-6 py-3 font-semibold transition ${
                  item.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-slate-300 text-slate-800 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>

        {/* Custom Project */}
<div className="mt-12">
  <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-8 text-center">

    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
      Butuh Solusi Khusus?
    </span>

    <h3 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
      Website atau Sistem Belum Ada di Paket?
    </h3>

    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
      Kami juga melayani pembuatan website dan aplikasi web custom sesuai
      kebutuhan bisnis, sekolah, instansi, maupun perusahaan Anda.
    </p>

    <div className="mt-8">
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Diskusikan Proyek Custom
      </a>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}