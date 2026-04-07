"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionConfig,
} from "framer-motion";

interface ParallaxSectionProps {
  /** How many px the background shifts over the full scroll range. Higher = more depth. */
  depth?: number;
  /** The background layer rendered behind the content. Must position itself to fill. */
  background: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}

/**
 * Reusable parallax wrapper.
 *
 * The background (`background` prop) translates on the Y axis at `depth` px
 * while the `children` remain fixed — creating a slow-scroll depth effect.
 *
 * Uses `useScroll({ target })` so the effect is scoped to the section's own
 * scroll progress: works correctly regardless of where the section sits on
 * the page, and avoids a global `window.scrollY` listener.
 */
export default function ParallaxSection({
  depth = 80,
  background,
  children,
  className = "",
  id,
  "aria-labelledby": labelledby,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // start: when top of section hits bottom of viewport
    // end:   when bottom of section hits top of viewport
    offset: ["start end", "end start"],
  });

  // Raw transform: map 0→1 scroll progress to -depth/2 → +depth/2 px
  const rawY = useTransform(scrollYProgress, [0, 1], [-depth / 2, depth / 2]);

  // Spring smoothing — removes any frame-to-frame jank
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.4 });

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={ref}
        id={id}
        className={["relative overflow-hidden", className].join(" ")}
        aria-labelledby={labelledby}
      >
        {/* Background layer — moves at parallax speed */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 will-change-transform"
          // Over-size slightly so the shifted bg never shows gaps
          style={{ y, top: -depth / 2, bottom: -depth / 2 }}
        >
          {background}
        </motion.div>

        {/* Content layer — normal scroll speed */}
        <div className="relative z-10">{children}</div>
      </section>
    </MotionConfig>
  );
}
