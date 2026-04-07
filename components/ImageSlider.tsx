"use client";

import { useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/gallery/hurda-1.png", alt: "Hurda sahası – demir, bakır ve alüminyum hurda yığını" },
  { src: "/gallery/hurda-2.png", alt: "Hurda toplama – klima ve beyaz eşya hurdaları" },
  { src: "/gallery/hurda-3.png", alt: "Hurda alım operasyonu – mobilya ve elektronik hurda" },
  { src: "/gallery/hurda-4.png", alt: "Hurda sahası genel görünüm" },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? SLIDES.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === SLIDES.length - 1 ? 0 : i + 1));

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] group">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 10 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width:1024px) 100vw, 44vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent z-20 pointer-events-none" />

      {/* Prev arrow */}
      <button
        onClick={prev}
        aria-label="Önceki görsel"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Sonraki görsel"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Görsel ${i + 1}`}
            className="w-2 h-2 rounded-full transition-all"
            style={{ background: i === current ? "white" : "rgba(255,255,255,0.5)" }}
          />
        ))}
      </div>

      {/* Metallic corner accent */}
      <div className="absolute bottom-0 left-0 w-20 h-1 z-20" style={{ background: "linear-gradient(to right, #9CA3AF, #D1D5DB, #E5E7EB)" }} aria-hidden="true" />
    </div>
  );
}
