"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, useInView, animate } from "framer-motion";
import { stagger, statReveal } from "@/lib/motion";

const STATS: Array<{
  end: number | null;
  suffix: string;
  thousands?: boolean;
  label: string;
}> = [
  { end: 15,   suffix: "+",   label: "Yıllık Tecrübe" },
  { end: 5000, suffix: "+",   thousands: true, label: "Tamamlanan İş" },
  { end: null, suffix: "7/24", label: "Ulaşılabilirlik" },
  { end: 100,  suffix: "%",   label: "Nakit Ödeme" },
];

function Counter({
  end,
  suffix,
  thousands,
}: {
  end: number;
  suffix: string;
  thousands?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, end, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(v) {
        const rounded = Math.round(v);
        setDisplay(
          thousands
            ? rounded.toLocaleString("tr-TR")
            : rounded.toString()
        );
      },
    });
    return () => controls.stop();
  }, [isInView, end, thousands]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="border-b border-gray-200"
        style={{ background: "linear-gradient(90deg, #0F2A44 0%, #1E3A5F 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.ul
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10"
            role="list"
            aria-label="Rakamlarla Antalya Hurdacı"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px 0px" }}
          >
            {STATS.map((stat) => (
              <motion.li
                key={stat.label}
                variants={statReveal}
                className="flex flex-col items-center py-6 px-4 text-center"
              >
                <span className="text-3xl font-extrabold text-[#F97316]">
                  {stat.end !== null ? (
                    <Counter
                      end={stat.end}
                      suffix={stat.suffix}
                      thousands={stat.thousands}
                    />
                  ) : (
                    stat.suffix
                  )}
                </span>
                <span className="mt-1 text-xs font-medium text-[#D1D5DB] uppercase tracking-wide">
                  {stat.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </MotionConfig>
  );
}
