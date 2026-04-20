"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import { BUSINESS } from "@/lib/config";

export default function WhiteGoodsHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"
      aria-labelledby="white-goods-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px 0px" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 border border-slate-400/40 bg-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Ücretsiz Alım
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="white-goods-heading"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white mb-7"
          >
            Beyaz Eşya &{" "}
            <span className="block text-orange-500 mt-2">Klima Hurda Alımı</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="w-14 h-0.5 bg-orange-500/60 mb-7"
            aria-hidden="true"
          />

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-blue-100/80 leading-relaxed max-w-2xl mb-10"
          >
            Çalışır ya da arızalı tüm beyaz eşyalarınızı ve klima sistemlerinizi
            Antalya genelinde yerinden alıyoruz.{" "}
            <strong className="text-white">Anında tartım, nakit ödeme.</strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-all shadow-lg shadow-orange-600/30 hover:-translate-y-1"
              aria-label={`Aramak için tıkla: ${BUSINESS.phone}`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Hemen Ara
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition-all shadow-lg shadow-green-600/30 hover:-translate-y-1"
              aria-label="WhatsApp ile mesaj gönder"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.74 5.398 2.147 7.747L2.885 22l8.17-2.539c2.268 1.236 4.823 1.887 7.52 1.887 5.399 0 9.747-4.355 9.747-9.753 0-2.607-.738-5.04-2.147-7.136 1.409-2.096 2.147-4.528 2.147-7.136 0-5.398-4.348-9.753-9.747-9.753-.003 0-.003 0-.003 0z" />
              </svg>
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
