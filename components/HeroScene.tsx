"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

// ─── Camera dolly — slow parallax drift ──────────────────────────────────────

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.07) * 1.4;
    camera.position.y = Math.cos(t * 0.05) * 0.7;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// ─── Two orbiting lights ──────────────────────────────────────────────────────

function LightRig() {
  const orange = useRef<THREE.PointLight>(null!);
  const amber = useRef<THREE.PointLight>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Brand-orange key: wide XZ orbit
    orange.current.position.set(
      Math.sin(t * 0.45) * 8,
      Math.cos(t * 0.3) * 3.5,
      Math.cos(t * 0.45) * 6 + 2
    );
    // Amber fill: counter-orbit
    amber.current.position.set(
      Math.sin(t * 0.35 + Math.PI) * 6,
      Math.sin(t * 0.22) * 4,
      Math.cos(t * 0.35 + Math.PI) * 5
    );
  });

  return (
    <>
      <pointLight ref={orange} intensity={28} color="#ea580c" distance={26} decay={2} />
      <pointLight ref={amber} intensity={10} color="#fbbf24" distance={18} decay={2} />
    </>
  );
}

// ─── Central "magnet core" — crushed-metal torus knot ────────────────────────

function MagnetCore() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    mesh.current.rotation.y = t * 0.22;
    mesh.current.rotation.x = t * 0.09;
    // Subtle breathing scale
    const s = 1 + Math.sin(t * 1.1) * 0.03;
    mesh.current.scale.setScalar(s);
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1.0, 0.3, 140, 16, 2, 3]} />
      <meshStandardMaterial
        color="#1f2937"
        metalness={0.99}
        roughness={0.06}
        envMapIntensity={1}
      />
    </mesh>
  );
}

// ─── Orbiting scrap piece ─────────────────────────────────────────────────────

type Geo = "box" | "cylinder" | "icosahedron" | "octahedron" | "cone" | "torus";

interface PieceConfig {
  r: number;          // orbit radius
  speed: number;      // orbit angular speed (rad/s), negative = reverse
  tilt: number;       // orbit plane inclination (rad)
  phase: number;      // starting angle offset
  rot: [number, number, number]; // tumble speed multipliers
  color: string;
  geo: Geo;
  scale: number;
}

function ScrapPiece({ r, speed, tilt, phase, rot, color, geo, scale }: PieceConfig) {
  const group = useRef<THREE.Group>(null!);
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const angle = t * speed + phase;

    // Tilted orbit: rotate orbit plane around X axis by `tilt`
    const xFlat = Math.cos(angle) * r;
    const zFlat = Math.sin(angle) * r;
    group.current.position.set(
      xFlat,
      zFlat * Math.sin(tilt),
      zFlat * Math.cos(tilt)
    );

    // Tumbling spin
    mesh.current.rotation.x += rot[0] * 0.012;
    mesh.current.rotation.y += rot[1] * 0.012;
    mesh.current.rotation.z += rot[2] * 0.012;
  });

  return (
    <group ref={group}>
      <mesh ref={mesh} scale={scale}>
        {geo === "box"          && <boxGeometry args={[1, 0.14, 0.75]} />}
        {geo === "cylinder"     && <cylinderGeometry args={[0.1, 0.1, 1.3, 8]} />}
        {geo === "icosahedron"  && <icosahedronGeometry args={[0.5, 1]} />}
        {geo === "octahedron"   && <octahedronGeometry args={[0.55, 0]} />}
        {geo === "cone"         && <coneGeometry args={[0.28, 1.0, 6]} />}
        {geo === "torus"        && <torusGeometry args={[0.38, 0.11, 8, 28]} />}
        <meshStandardMaterial color={color} metalness={0.96} roughness={0.09} />
      </mesh>
    </group>
  );
}

// 12 hurda parçası — 3 yörüngede, farklı şekil ve renkler
const PIECES: PieceConfig[] = [
  // ── İç yörünge (r ≈ 2.2–2.7) ───────────────────────────────────────────────
  { r: 2.2, speed:  1.15, tilt:  0.35, phase: 0.0,        rot: [3, 5, 2], color: "#6b7280", geo: "icosahedron", scale: 0.50 },
  { r: 2.5, speed: -0.90, tilt: -0.55, phase: Math.PI,    rot: [2, 4, 6], color: "#9ca3af", geo: "box",         scale: 0.55 },
  { r: 2.7, speed:  1.00, tilt:  0.85, phase: 2.1,        rot: [5, 2, 3], color: "#4b5563", geo: "cylinder",    scale: 0.60 },

  // ── Orta yörünge (r ≈ 3.5–4.1) ──────────────────────────────────────────────
  { r: 3.5, speed:  0.65, tilt:  0.20, phase: 0.5,        rot: [2, 6, 1], color: "#d1d5db", geo: "octahedron",  scale: 0.60 },
  { r: 3.8, speed: -0.75, tilt:  1.15, phase: 3.5,        rot: [4, 2, 5], color: "#6b7280", geo: "cone",        scale: 0.55 },
  { r: 3.6, speed:  0.88, tilt: -0.72, phase: 1.2,        rot: [1, 3, 4], color: "#b45309", geo: "torus",       scale: 0.60 }, // copper coil
  { r: 4.1, speed: -0.58, tilt:  0.42, phase: 4.2,        rot: [3, 5, 2], color: "#4b5563", geo: "icosahedron", scale: 0.50 },

  // ── Dış yörünge (r ≈ 5.0–6.0) ───────────────────────────────────────────────
  { r: 5.0, speed:  0.40, tilt:  0.60, phase: 0.9,        rot: [2, 3, 5], color: "#374151", geo: "box",         scale: 0.70 },
  { r: 5.3, speed: -0.44, tilt: -0.95, phase: 2.7,        rot: [4, 1, 3], color: "#e5e7eb", geo: "cylinder",    scale: 0.55 },
  { r: 5.6, speed:  0.36, tilt:  1.35, phase: 5.0,        rot: [6, 4, 2], color: "#6b7280", geo: "octahedron",  scale: 0.65 },
  { r: 4.9, speed: -0.52, tilt: -0.30, phase: 3.8,        rot: [3, 6, 1], color: "#78350f", geo: "torus",       scale: 0.50 }, // dark copper
  { r: 5.9, speed:  0.30, tilt:  0.95, phase: 1.6,        rot: [5, 2, 4], color: "#9ca3af", geo: "icosahedron", scale: 0.55 },
];

// ─── Scene ────────────────────────────────────────────────────────────────────

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 12], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.04} />
      <directionalLight position={[3, 6, 4]} intensity={0.5} color="#ffffff" />
      <LightRig />
      <CameraRig />

      {/* Core */}
      <MagnetCore />

      {/* Orbiting scrap pieces */}
      {PIECES.map((p, i) => (
        <ScrapPiece key={i} {...p} />
      ))}

      {/* Metal spark dust — brand orange flecks */}
      <Sparkles
        count={80}
        scale={16}
        size={2}
        speed={0.25}
        opacity={0.55}
        color="#f97316"
      />
      {/* White metal dust — neutral flecks */}
      <Sparkles
        count={40}
        scale={12}
        size={1.2}
        speed={0.15}
        opacity={0.3}
        color="#f3f4f6"
      />
    </Canvas>
  );
}
