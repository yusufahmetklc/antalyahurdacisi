"use client";

import { motion, MotionConfig, animate, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import TiltCard from "@/components/TiltCard";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: "Demir Hurda",
    description:
      "Her türlü demir ve çelik hurda malzemenizi güncel piyasa fiyatlarıyla satın alıyoruz.",
    tag: "En Popüler",
    features: ["Anında tartım", "Nakit ödeme"],
    paths: [
      "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
    ],
  },
  {
    title: "Bakır Hurda",
    description:
      "Bakır kablo, boru, profil ve sac gibi tüm bakır hurdalarınızı en yüksek fiyatla değerlendiriyoruz.",
    tag: "Yüksek Fiyat",
    features: ["Kablo & boru", "En yüksek fiyat"],
    paths: [
      "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    ],
  },
  {
    title: "Alüminyum Hurda",
    description:
      "Alüminyum profil, kasa, kapı, pencere ve sac hurdalarınızı eksiksiz satın alıyoruz.",
    tag: null,
    features: ["Profil & sac", "Tartım garantisi"],
    paths: [
      "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
    ],
  },
  {
    title: "Yerinden Hurda Alımı",
    description:
      "Siz taşımayın, biz geliyoruz! Antalya içi ücretsiz yerinden alım hizmeti.",
    tag: "Ücretsiz",
    features: ["Ücretsiz araç", "Aynı gün alım"],
    paths: [
      "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
    ],
  },
];

/** Stats displayed between the heading and the cards grid */
const STATS: { to: number; suffix: string; label: string }[] = [
  { to: 12, suffix: "+", label: "Yıl Deneyim" },
  { to: 500, suffix: "t+", label: "Aylık Alım" },
  { to: 2000, suffix: "+", label: "Mutlu Müşteri" },
  { to: 7, suffix: "/24", label: "Hizmet Desteği" },
];

// ─── Animation variants ────────────────────────────────────────────────────────

const WORD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const WORD_CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const EYEBROW: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const CARD_FLIP: Variants = {
  hidden: { opacity: 0, y: 52, rotateX: 18, scale: 0.93 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.65, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] },
  }),
};

const FEATURE_CONTAINER: Variants = {
  hidden: {},
  visible: (i: number) => ({
    transition: { staggerChildren: 0.08, delayChildren: 0.4 + i * 0.11 },
  }),
};

const FEATURE_ITEM: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * Animates a number from 0 → `to` using framer-motion's `animate()` when the
 * element enters the viewport.
 */
function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => ctrl.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>{"0" + suffix}</span>;
}

/** Animated stats strip: four key numbers with staggered entrance */
function StatsStrip() {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-16 border border-gray-100 rounded-2xl overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09 } },
      }}
    >
      {STATS.map((stat) => (
        <motion.div
          key={stat.label}
          className="relative flex flex-col items-center justify-center py-7 px-4 bg-white text-center overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Subtle background dot */}
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          >
            <span className="text-[6rem] font-black text-orange-50 leading-none">
              {stat.to}
            </span>
          </span>

          <span className="relative text-3xl sm:text-4xl font-black text-orange-500 tabular-nums leading-none mb-1">
            <AnimatedCounter to={stat.to} suffix={stat.suffix} />
          </span>
          <span className="relative text-xs text-gray-400 uppercase tracking-wider font-semibold">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

/** Heading split by words — each word animates in with blur + slide */
function SplitHeading({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={[
        "inline-flex flex-wrap justify-center gap-x-[0.35em]",
        className,
      ].join(" ")}
      variants={WORD_CONTAINER}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px 0px" }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={WORD_VARIANTS} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/** SVG icon with animated pathLength draw on enter */
function AnimatedIcon({ paths, delay }: { paths: string[]; delay: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={d}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{
            pathLength: { duration: 0.75, delay, ease: "easeInOut" },
            opacity: { duration: 0.01, delay },
          }}
        />
      ))}
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Services() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="hizmetler"
        className="py-20 bg-white overflow-hidden"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-12">
            <motion.span
              className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4"
              variants={EYEBROW}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px 0px" }}
            >
              <motion.span
                className="block w-6 h-px bg-orange-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                aria-hidden="true"
              />
              Ne Alıyoruz?
              <motion.span
                className="block w-6 h-px bg-orange-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "right" }}
                aria-hidden="true"
              />
            </motion.span>

            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
            >
              <SplitHeading text="Hurda Alım Hizmetlerimiz" />
            </h2>

            <motion.p
              className="text-gray-500 max-w-xl mx-auto text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Her türlü hurda metalinizi güvenle satın alıyor, anında ödeme
              yapıyoruz.
            </motion.p>
          </div>

          {/* Animated stats strip */}
          <StatsStrip />

          {/* Cards grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{ perspective: 1200 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px 0px" }}
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                variants={CARD_FLIP}
                custom={i}
                style={{ transformOrigin: "bottom center" }}
              >
                <TiltCard tag={service.tag} className="h-full overflow-hidden">

                  {/* Entrance shimmer sweep — orange-tinted light beam */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-y-0 -left-full w-full pointer-events-none z-20"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "200%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + i * 0.11,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 25%, rgba(249,115,22,0.11) 50%, transparent 75%)",
                    }}
                  />

                  {/* Icon box */}
                  <div className="w-14 h-14 bg-orange-50 group-hover:bg-orange-600 text-orange-600 group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <AnimatedIcon paths={service.paths} delay={0.35 + i * 0.11} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Feature bullets */}
                  <motion.ul
                    className="mt-auto space-y-1.5"
                    variants={FEATURE_CONTAINER}
                    custom={i}
                  >
                    {service.features.map((f) => (
                      <motion.li
                        key={f}
                        variants={FEATURE_ITEM}
                        className="flex items-center gap-2 text-xs font-medium text-gray-500"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"
                          aria-hidden="true"
                        />
                        {f}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Bottom orange sweep line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.5 + i * 0.11,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: "left", width: "100%" }}
                    aria-hidden="true"
                  />
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
