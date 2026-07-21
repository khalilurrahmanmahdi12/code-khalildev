import {
  Globe,
  Building2,
  LaptopMinimal,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Page",
    description:
      "Website modern untuk promosi produk, jasa, event, maupun personal branding.",
  },
  {
    icon: Building2,
    title: "Company Profile",
    description:
      "Website profesional untuk meningkatkan kredibilitas bisnis maupun instansi.",
  },
  {
    icon: LaptopMinimal,
    title: "Sistem / Web App",
    description:
      "Aplikasi web custom seperti kasir, inventori, CRM, sekolah, dashboard, dan lainnya.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Layanan Kami
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Solusi Website
            <span className="block text-blue-600">
              Sesuai Kebutuhan Anda
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Pilih layanan yang paling sesuai dengan kebutuhan bisnis,
            perusahaan maupun instansi Anda.
          </p>
        </div>

        {/* Card */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-blue-600 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                  <Icon
                    size={26}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Button */}
                <a
                  href="#pricing"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                >
                  Lihat Paket

                  <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}