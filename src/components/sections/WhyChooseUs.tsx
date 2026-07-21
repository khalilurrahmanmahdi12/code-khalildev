import {
  ShieldCheck,
  Rocket,
  Smartphone,
  Search,
  Clock3,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Proses Cepat",
    description:
      "Website dikerjakan secara terstruktur dengan waktu pengerjaan yang efisien.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description:
      "Tampilan optimal di desktop, tablet, maupun smartphone.",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    description:
      "Struktur website siap membantu meningkatkan visibilitas di mesin pencari.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan",
    description:
      "Website dibangun mengikuti standar pengembangan yang aman dan stabil.",
  },
  {
    icon: Clock3,
    title: "Maintenance",
    description:
      "Mendapatkan bantuan revisi serta pendampingan setelah website selesai.",
  },
  {
    icon: Headphones,
    title: "Konsultasi",
    description:
      "Diskusikan kebutuhan website Anda terlebih dahulu tanpa biaya.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="whychoose"
      className="bg-slate-50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Mengapa Memilih Kami?
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Kenapa Memilih
            <span className="block text-blue-600">
              Code KhalilDev?
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Kami tidak hanya membuat website yang menarik, tetapi juga
            memastikan performa, keamanan, dan pengalaman pengguna tetap
            menjadi prioritas.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:border-blue-600 hover:shadow-lg md:rounded-3xl md:p-6"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-600 md:h-14 md:w-14 md:rounded-2xl">
                  <Icon
                    size={22}
                    className="text-blue-600 transition group-hover:text-white md:h-7 md:w-7"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-bold text-slate-900 md:mt-6 md:text-xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 md:mt-3 md:text-base md:leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}