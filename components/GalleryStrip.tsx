"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Unsplash — free license (https://unsplash.com/license)
const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1722695694560-f452b0919d3a?w=900&q=80&auto=format&fit=crop",
    alt: "Hurda sahasında ekskavatör hurda demir yığını üzerinde çalışıyor",
    label: "Hurda Sahası",
    span: "row-span-2",   // tall left hero
  },
  {
    src: "https://images.unsplash.com/photo-1763771421047-7363eeece6f7?w=700&q=80&auto=format&fit=crop",
    alt: "Sarmal demir inşaat demiri demetleri yakın plan",
    label: "Demir Hurda",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1518994255497-c5f17690567f?w=700&q=80&auto=format&fit=crop",
    alt: "Gri bakır kablo teli yığını",
    label: "Bakır Hurda",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1722695510527-cc033e43be1b?w=700&q=80&auto=format&fit=crop",
    alt: "Preslenerek sıkıştırılmış hurda demir yığını",
    label: "Preslenmiş Demir",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1723365316514-8509dea457f2?w=700&q=80&auto=format&fit=crop",
    alt: "Çeşitli eski metal motor hurda parçaları yığını",
    label: "Parça Hurda",
    span: "",
  },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function GalleryStrip() {
  return (
    <section
      aria-label="Hurda sahası fotoğrafları"
      className="py-16 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase whitespace-nowrap">
            Sahadan Kareler
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Mosaic grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "200px 200px",
          }}
        >
          {/* Hero — spans both rows on the left */}
          <motion.div
            className="relative row-span-2 rounded-2xl overflow-hidden group cursor-pointer"
            custom={0}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px 0px" }}
          >
            <Image
              src={PHOTOS[0].src}
              alt={PHOTOS[0].alt}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-semibold tracking-wide">
              {PHOTOS[0].label}
            </span>
          </motion.div>

          {/* 4 smaller cells */}
          {PHOTOS.slice(1).map((photo, i) => (
            <motion.div
              key={photo.alt}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              custom={i + 1}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px 0px" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width:768px) 50vw, 22vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold tracking-wide">
                {photo.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Fotoğraflar:{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600 transition-colors"
          >
            Unsplash
          </a>{" "}
          (ücretsiz lisans)
        </p>
      </div>
    </section>
  );
}
