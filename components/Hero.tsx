"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BUSINESS } from "@/lib/config";

const SLIDES = [
  {
    src: "/gallery/hurda-1.webp",
    alt: "Antalya Hurdacı — hurda metal toplama operasyonu",
  },
  {
    src: "/gallery/hurda-2.webp",
    alt: "Profesyonel ekipmanlarla klima ve elektronik hurda alımı",
  },
  {
    src: "/gallery/hurda-3.webp",
    alt: "Büyük kapasiteli hurda metal toplama ve işleme sahası",
  },
  {
    src: "/gallery/hurda-4.webp",
    alt: "İnşaat sahası demir ve boru hurda alımı",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function restartTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 3000);
  }

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goNext() {
    setCurrent((c) => (c + 1) % SLIDES.length);
    restartTimer();
  }

  function goPrev() {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
    restartTimer();
  }

  function goTo(index: number) {
    setCurrent(index);
    restartTimer();
  }

  return (
    <section
      className="relative overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[720px]"
      aria-labelledby="hero-heading"
    >
      {/* ── Background slideshow ───────────────────────────────────── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden="true"
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={i === 0}
            loading={i === 0 ? undefined : "lazy"}
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(135deg, rgba(15,42,68,0.82) 0%, rgba(30,58,95,0.70) 60%, rgba(15,42,68,0.60) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* ── Text ───────────────────────────────────────────────── */}
          <div className="flex-1 py-10 lg:py-20 max-w-2xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 border border-slate-400/40 bg-white/10 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                7/24 Ulaşılabilir
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold leading-[1.08] tracking-tight text-white"
            >
              Antalya Hurdacı
              <span className="block text-[#F97316] mt-1">
                Hurda Alım Satım
              </span>
            </h1>

            {/* Divider */}
            <div className="mt-7 mb-7 w-14 h-0.5 bg-slate-400/50" aria-hidden="true" />

            {/* Description */}
            <p className="text-base text-blue-100/80 leading-relaxed max-w-md">
              Demir, bakır, alüminyum ve her türlü hurda metalinizi en yüksek
              piyasa fiyatıyla satın alıyoruz. Antalya genelinde ücretsiz
              yerinden alım, anında nakit ödeme.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                aria-label={`Hemen ara: ${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-colors duration-150 shadow-lg shadow-orange-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44]"
              >
                <PhoneIcon />
                Hemen Ara
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile mesaj gönder"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>

            {/* Trust pills */}
            <ul
              className="mt-10 flex flex-wrap gap-3"
              role="list"
              aria-label="Hizmet avantajları"
            >
              {[
                "Ücretsiz Yerinden Alım",
                "Güncel Piyasa Fiyatı",
                "Anında Nakit Ödeme",
              ].map((text) => (
                <li
                  key={text}
                  className="flex items-center gap-1.5 text-xs text-slate-300 border border-slate-400/30 rounded-full px-3 py-1"
                >
                  <span className="text-slate-400 text-[10px]" aria-hidden="true">✓</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Dot indicators ─────────────────────────────────────────── */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
          role="tablist"
          aria-label="Slayt göstergesi"
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Görsel ${i + 1}`}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{
                width: i === current ? "24px" : "6px",
                height: "6px",
                background: i === current ? "#F97316" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.574 3.847 1.568 5.418L2 22l4.704-1.525A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm.001 18a7.97 7.97 0 01-4.072-1.111l-.292-.173-3.024.98.935-2.95-.19-.304A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
    </svg>
  );
}


