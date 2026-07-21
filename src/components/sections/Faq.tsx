import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Durasi pengerjaan bergantung pada kompleksitas proyek. Landing Page umumnya 3–7 hari, Company Profile 7–14 hari, sedangkan Web App menyesuaikan fitur yang dibutuhkan.",
  },
  {
    question: "Apakah website bisa dibuka di HP?",
    answer:
      "Ya. Semua website yang kami buat sudah responsive sehingga tampil optimal di desktop, tablet, maupun smartphone.",
  },
  {
    question: "Apakah saya mendapatkan source code website?",
    answer:
      "Source code dapat disertakan sesuai paket atau kesepakatan proyek. Untuk website custom dan web app, source code dapat diberikan setelah proyek selesai dan pembayaran telah diselesaikan.",
  },
  {
    question: "Apakah bisa request desain sendiri?",
    answer:
      "Tentu. Anda dapat mengirim referensi desain atau berdiskusi dengan kami agar tampilan website sesuai dengan identitas bisnis Anda.",
  },
 {
  question: "Apakah sudah termasuk domain dan hosting?",
  answer:
    "Ya, setiap paket website sudah termasuk domain selama 1 tahun. Hosting juga kami sediakan dan akan disesuaikan dengan kebutuhan website Anda, sehingga performa, keamanan, dan stabilitas website tetap optimal.",
},
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dilakukan dengan sistem DP di awal pengerjaan, kemudian pelunasan setelah website selesai dan siap dipublikasikan.",
  },
];

export default function Faq() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Pertanyaan yang
            <span className="block text-blue-600">
              Sering Ditanyakan
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Berikut beberapa pertanyaan yang sering ditanyakan sebelum memulai
            proyek website.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:border-blue-600"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-5 py-5 text-left md:px-6"
              >
                <span className="pr-4 text-base font-semibold text-slate-900 md:text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`flex-shrink-0 transition duration-300 ${
                    active === index
                      ? "rotate-180 text-blue-600"
                      : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 leading-7 text-slate-600 md:px-6 md:pb-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}