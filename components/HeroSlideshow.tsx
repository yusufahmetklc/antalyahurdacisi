"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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

export default function HeroSlideshow() {
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

  function goTo(index: number) {
    setCurrent(index);
    restartTimer();
  }

  return (
    <>
      {/* Background slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden="true"
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dot indicators — z-20 to sit above the overlay (z-10) */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"
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
    </>
  );
}
