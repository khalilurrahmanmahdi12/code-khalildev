import {
  ClipboardList,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Konsultasi",
    description:
      "Diskusikan kebutuhan website agar kami dapat memberikan solusi yang tepat.",
  },
  {
    icon: PencilRuler,
    number: "02",
    title: "Desain",
    description:
      "Membuat desain modern, responsif, dan mudah digunakan sesuai kebutuhan.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description:
      "Website dikembangkan menggunakan teknologi modern dengan performa optimal.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "Website dipublikasikan setelah selesai dan siap digunakan oleh pengguna.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-slate-50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Cara Kerja
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Proses Pembuatan
            <span className="block text-blue-600">
              Website Anda
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Alur kerja yang sederhana, transparan, dan terstruktur sehingga
            proyek dapat berjalan dengan lancar dari awal hingga selesai.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Garis Timeline Desktop */}
          <div className="absolute left-0 top-8 hidden h-0.5 w-full bg-slate-200 lg:block" />

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-600 hover:shadow-lg md:rounded-3xl md:p-6"
                >
                  {/* Number */}
                  <div className="absolute right-4 top-4 text-4xl font-black text-slate-200 md:right-5 md:top-5 md:text-5xl">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-600 md:h-14 md:w-14 md:rounded-2xl">
                    <Icon
                      size={22}
                      className="text-blue-600 transition group-hover:text-white md:h-7 md:w-7"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-4 text-base font-bold text-slate-900 md:mt-6 md:text-xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 md:mt-3 md:text-base md:leading-7">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}