"use client";

import { motion, MotionConfig } from "framer-motion";
import { fadeUp, stagger, cardReveal, statReveal } from "@/lib/motion";

const reasons = [
  {
    title: "Hızlı Hizmet",
    description:
      "Aynı gün içinde yanınızda oluyoruz. Antalya genelinde hızlı alım ve taşıma hizmeti sunuyoruz.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "En İyi Fiyatlar",
    description:
      "Güncel piyasa verilerine göre her gün fiyatlarımızı güncelliyoruz. Rakiplerden daha iyi fiyat garantisi veriyoruz.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Güvenilir Ekip",
    description:
      "10 yılı aşkın tecrübemiz ile Antalya'nın en güvenilir hurda firması olarak hizmet veriyoruz. Anında nakit ödeme.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Yıllık Tecrübe" },
  { value: "5.000+", label: "Memnun Müşteri" },
  { value: "Anında", label: "Nakit Ödeme" },
  { value: "7/24", label: "Ulaşılabilir" },
];

export default function WhyChooseUs() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="neden-biz"
        className="py-20 bg-[#F3F4F6]"
        aria-labelledby="why-us-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="text-center mb-14"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px 0px" }}
          >
            <motion.span
              variants={fadeUp}
              className="text-[#6B7280] font-semibold text-sm uppercase tracking-widest"
            >
              Neden Bizi Seçmelisiniz?
            </motion.span>
            <motion.h2
              id="why-us-heading"
              variants={fadeUp}
              className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#111827]"
            >
              Antalya&apos;nın Güvenilir Hurdacısı
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[#6B7280] max-w-xl mx-auto text-lg"
            >
              Müşterilerimizin memnuniyeti bizim önceliğimizdir. İşte bizi
              farklı kılan özellikler.
            </motion.p>
          </motion.div>

          {/* Reasons */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px 0px" }}
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={cardReveal}
                className="rounded-2xl p-8 shadow-sm border border-[#D1D5DB] flex flex-col items-start"
                style={{ background: "linear-gradient(135deg, #f3f4f6, #e5e7eb, #d1d5db, #e5e7eb)" }}
              >
                <div className="flex items-center justify-center w-14 h-14 bg-[#0F2A44] text-white rounded-2xl mb-5">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="rounded-3xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white"
            style={{ background: "linear-gradient(135deg, #0F2A44 0%, #1E3A5F 100%)" }}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px 0px" }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={statReveal}>
                <p className="text-3xl sm:text-4xl font-extrabold">{stat.value}</p>
                <p className="text-[#D1D5DB] mt-1 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
