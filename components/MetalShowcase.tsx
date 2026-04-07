"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { BUSINESS } from "@/lib/config";

interface Metal {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  hint: string;
}

const METALS: Metal[] = [
  {
    id: "demir",
    label: "Demir",
    title: "Demir & Çelik Hurda",
    description:
      "Hurda demir, profil çelik, I-demir, nervürlü demir ve her türlü siyah metal hurdayı güncel piyasa fiyatıyla satın alıyoruz. İş yeri ve inşaat sahalarından ücretsiz taşıma hizmeti sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1722695510527-cc033e43be1b?w=900&q=80",
    imageAlt: "Hurda demir ve çelik yığını",
    hint: "Profil, nervürlü, sac, I-profil",
  },
  {
    id: "bakir",
    label: "Bakır",
    title: "Bakır Hurda",
    description:
      "Mix bakır, kırmızı bakır, talaş bakır ve bakır kablo hurdalarını en yüksek piyasa fiyatıyla değerlendiriyoruz. Anlık fiyat bilgisi ve nakit ödeme için hemen arayın.",
    image:
      "https://images.unsplash.com/photo-1518994255497-c5f17690567f?w=900&q=80",
    imageAlt: "Bakır kablo hurda ruloları",
    hint: "Mix, kırmızı, talaş, kablo",
  },
  {
    id: "aluminyum",
    label: "Alüminyum",
    title: "Alüminyum Hurda",
    description:
      "Alüminyum profil, sac, döküm, kapı-pencere sistemleri ve endüstriyel alüminyum hurdalarını rekabetçi fiyatlarla alıyoruz. Kilogram bazında adil tartım garantisi.",
    image:
      "https://images.unsplash.com/photo-1723365316514-8509dea457f2?w=900&q=80",
    imageAlt: "Alüminyum hurda parçaları",
    hint: "Profil, sac, döküm, kap-kaç",
  },
  {
    id: "sari",
    label: "Sarı",
    title: "Sarı & Pirinç Hurda",
    description:
      "Her türlü pirinç, bronz ve sarı metal hurdası alınır. Musluk, vana, motor parçaları ve endüstriyel pirinç hurdaları için güncel fiyat teklifi alın.",
    image:
      "https://images.unsplash.com/photo-1763771421047-7363eeece6f7?w=900&q=80",
    imageAlt: "Sarı pirinç ve bronz hurda",
    hint: "Pirinç, bronz, vana, motor",
  },
  {
    id: "krom",
    label: "Krom",
    title: "Krom & Paslanmaz Çelik",
    description:
      "Paslanmaz çelik mutfak ekipmanları, endüstriyel krom parçalar ve her türlü paslanmaz hurda malzemeyi ağırlık bazında satın alıyoruz.",
    image:
      "https://images.unsplash.com/photo-1722695694560-f452b0919d3a?w=900&q=80",
    imageAlt: "Paslanmaz çelik ve krom hurda",
    hint: "304, 316, endüstriyel",
  },
  {
    id: "kablo",
    label: "Kablo",
    title: "Hurda Kablo",
    description:
      "NYY, NYAF, alüminyum kablo ve her türlü elektrik kablosunu hurda olarak alıyoruz. Soyulmuş veya soyulmamış, kalın veya ince ayrımı yapmadan değerlendiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    imageAlt: "Hurda elektrik kabloları",
    hint: "NYY, NYAF, alüminyum, bakır",
  },
];

export default function MetalShowcase() {
  const [activeId, setActiveId] = useState<string>(METALS[0].id);
  const [fading, setFading] = useState(false);

  const active = METALS.find((m) => m.id === activeId)!;

  const handleSelect = useCallback(
    (id: string) => {
      if (id === activeId) return;
      setFading(true);
      setTimeout(() => {
        setActiveId(id);
        setFading(false);
      }, 160);
    },
    [activeId]
  );

  return (
    <section
      id="metal-turleri"
      aria-labelledby="metal-showcase-heading"
      className="bg-gray-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-10 lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-700 mb-2">
            Ne Alıyoruz?
          </p>
          <h2
            id="metal-showcase-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Hurda Metal Türleri
          </h2>
          <p className="mt-3 max-w-2xl text-base text-gray-500 leading-relaxed">
            Her türlü hurda metali güncel fiyatlarla satın alıyoruz. Detayları
            görmek için bir metal türü seçin.
          </p>
        </header>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 lg:items-stretch">
          {/* ── LEFT: Featured panel ── */}
          <div
            className={`flex-1 relative overflow-hidden rounded-2xl bg-gray-900 min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] transition-opacity duration-[160ms] ease-in-out ${
              fading ? "opacity-0" : "opacity-100"
            }`}
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Photo */}
            <Image
              key={active.id}
              src={active.image}
              alt={active.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority={active.id === METALS[0].id}
            />

            {/* Gradient overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/25 to-transparent"
            />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <span className="inline-block mb-3 rounded-full bg-orange-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {active.label} Hurda
              </span>

              <h3 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                {active.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-gray-300 max-w-lg">
                {active.description}
              </p>

              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Fiyat Al
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Metal list ── */}
          <nav
            aria-label="Metal türleri"
            className="w-full lg:w-72 xl:w-80 flex flex-col gap-1.5"
          >
            {METALS.map((metal, index) => {
              const isActive = metal.id === activeId;
              return (
                <button
                  key={metal.id}
                  type="button"
                  onClick={() => handleSelect(metal.id)}
                  aria-pressed={isActive}
                  className={`group flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-left transition-all duration-150 border ${
                    isActive
                      ? "border-orange-200 bg-white shadow-sm ring-1 ring-orange-100"
                      : "border-transparent bg-white/60 hover:bg-white hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  {/* Index badge */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-150 ${
                      isActive
                        ? "bg-orange-700 text-white"
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Labels */}
                  <span className="flex flex-col min-w-0 flex-1">
                    <span
                      className={`text-sm font-semibold leading-tight transition-colors duration-150 ${
                        isActive ? "text-orange-700" : "text-gray-800"
                      }`}
                    >
                      {metal.label}
                    </span>
                    <span className="mt-0.5 truncate text-xs text-gray-400">
                      {metal.hint}
                    </span>
                  </span>

                  {/* Chevron */}
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 transition-all duration-150 ${
                      isActive
                        ? "text-orange-600 translate-x-0 opacity-100"
                        : "text-gray-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
