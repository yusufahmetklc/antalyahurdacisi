"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionConfig,
} from "framer-motion";
import type { Variants } from "framer-motion";

// ─── Constants ────────────────────────────────────────────────────────────────

/** Maximum tilt angle in degrees */
const MAX_TILT = 14;

const SPRING = { stiffness: 280, damping: 26, mass: 0.5 };
const DEPTH_SPRING = { stiffness: 200, damping: 24, mass: 0.5 };

// ─── Props ────────────────────────────────────────────────────────────────────

interface TiltCardProps {
  children: ReactNode;
  /** Badge text positioned top-right */
  tag?: string | null;
  /** Framer Motion variants forwarded to the underlying motion.article  */
  variants?: Variants;
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TiltCard({
  children,
  tag,
  variants,
  className = "",
}: TiltCardProps) {
  const ref = useRef<HTMLElement>(null);

  // Raw motion values (set instantly on each mousemove)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  /** 0 = resting, 1 = maximum tilt — drives shadow intensity */
  const rawDepth = useMotionValue(0);

  // Smooth spring-interpolated values
  const rotateX = useSpring(rawX, SPRING);
  const rotateY = useSpring(rawY, SPRING);
  const depth = useSpring(rawDepth, DEPTH_SPRING);

  // Shadow interpolated from depth — springs back with the tilt
  const boxShadow = useTransform(
    depth,
    [0, 1],
    [
      "0px 4px 16px rgba(0,0,0,0.06)",
      "0px 32px 52px rgba(0,0,0,0.22), 0px 8px 16px rgba(249,115,22,0.10)",
    ]
  );

  // Glare highlight position — computed at top level, not inside JSX
  const glare = useTransform(
    [rotateX, rotateY] as const,
    ([rx, ry]: number[]) => {
      const px = 50 + ry * 3;
      const py = 50 - rx * 3;
      return `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.18) 0%, transparent 65%)`;
    }
  );

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    // Normalized: -0.5 … +0.5
    const nx = (e.clientX - left) / width - 0.5;
    const ny = (e.clientY - top) / height - 0.5;
    rawX.set(-ny * MAX_TILT * 2);
    rawY.set(nx * MAX_TILT * 2);
    // Diagonal corners produce ~0.71, clamp to 1
    rawDepth.set(Math.min(Math.sqrt(nx * nx + ny * ny) * 1.42, 1));
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
    rawDepth.set(0);
  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.article
        ref={ref}
        variants={variants}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 900,
          boxShadow,
        }}
        className={[
          "group relative bg-white border border-gray-100 rounded-2xl p-6",
          "will-change-transform cursor-default",
          className,
        ].join(" ")}
      >
        {/* Glare overlay — follows tilt direction */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
          style={{ background: glare }}
        />

        {tag && (
          <span className="absolute top-4 right-4 z-10 bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
            {tag}
          </span>
        )}

        {children}
      </motion.article>
    </MotionConfig>
  );
}
