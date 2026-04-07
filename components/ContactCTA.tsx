"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import ParallaxSection from "@/components/ParallaxSection";
import { BUSINESS } from "@/lib/config";

// ─── Industrial background ────────────────────────────────────────────────────

function IndustrialBg() {
  return (
    <div className="absolute inset-0 bg-gray-950">
      {/* Diagonal hatching — steel / metal texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hatch"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="12" stroke="#f97316" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hatch)" />
      </svg>

      {/* Large hex grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hex"
            x="0"
            y="0"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="28,2 54,16 54,84 28,98 2,84 2,16"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      {/* Orange glow spots */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/8 blur-[100px] pointer-events-none" />
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactCTA() {
  return (
    <ParallaxSection
      id="iletisim"
      aria-labelledby="contact-heading"
      background={<IndustrialBg />}
      depth={100}
      className="py-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px 0px" }}
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-block bg-orange-600/20 text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
          >
            Ücretsiz Değerleme
          </motion.span>

          <motion.h2
            id="contact-heading"
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
          >
            Hurdanızı Satmaya Hazır mısınız?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
          >
            Hemen arayın ya da WhatsApp&apos;tan fotoğraf gönderin — ekibimiz
            anında fiyat versin. Antalya içi{" "}
            <strong className="text-white">ücretsiz araç</strong> gönderiyoruz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-3 bg-orange-700 hover:bg-orange-800 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-xl shadow-orange-800/20 hover:-translate-y-0.5"
              aria-label={`Aramak için tıkla: ${BUSINESS.phone}`}
            >
              <PhoneIcon />
              {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-xl shadow-green-800/20 hover:-translate-y-0.5"
              aria-label="WhatsApp ile mesaj gönder"
            >
              <WhatsAppIcon />
              WhatsApp&apos;tan Yaz
            </a>
          </motion.div>

          {/* Process steps */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left"
          >
            {STEPS.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="flex gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
              >
                <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-orange-700 text-white font-bold text-sm">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    step: "1",
    title: "Bize Ulaşın",
    desc: "Telefon veya WhatsApp ile hurdanızı bize bildirin.",
  },
  {
    step: "2",
    title: "Ücretsiz Geliyoruz",
    desc: "Ekibimiz aynı gün adresinize ücretsiz geliyor.",
  },
  {
    step: "3",
    title: "Nakit Ödeme",
    desc: "Tartım sonrası anında nakit ödeme yapıyoruz.",
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.847 1.568 5.418L2 22l4.704-1.525A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm.001 18a7.97 7.97 0 01-4.072-1.111l-.292-.173-3.024.98.935-2.95-.19-.304A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
    </svg>
  );
}

