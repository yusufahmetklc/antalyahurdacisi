"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ─── Orbiting brand-orange key light ─────────────────────────────────────────

function OrbitLight() {
  const ref = useRef<THREE.PointLight>(null!);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    ref.current.position.set(
      Math.sin(t * 0.45) * 7,
      Math.cos(t * 0.3) * 3,
      6
    );
  });
  return <pointLight ref={ref} intensity={80} color="#f97316" distance={25} decay={2} />;
}

// ─── Demir Hurda — iron torus knot ───────────────────────────────────────────

function IronKnot() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    mesh.current.rotation.y += dt * 0.38;
    mesh.current.rotation.x += dt * 0.16;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.5}>
      <mesh ref={mesh} position={[-3.4, 0, 0]}>
        <torusKnotGeometry args={[0.7, 0.26, 128, 16, 2, 3]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.95} roughness={0.2} />
      </mesh>
    </Float>
  );
}

// ─── Bakır Hurda — copper torus ───────────────────────────────────────────────

function CopperCoil() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    mesh.current.rotation.x += dt * 0.28;
    mesh.current.rotation.y += dt * 0.48;
  });
  return (
    <Float speed={0.95} rotationIntensity={0.4} floatIntensity={0.85}>
      <mesh ref={mesh} position={[-1.1, 0, 0]}>
        <torusGeometry args={[0.72, 0.3, 24, 64]} />
        <meshStandardMaterial color="#c2610a" metalness={0.9} roughness={0.18} />
      </mesh>
    </Float>
  );
}

// ─── Alüminyum Hurda — silver octahedron ─────────────────────────────────────

function AlumSlab() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    mesh.current.rotation.y -= dt * 0.35;
    mesh.current.rotation.z += dt * 0.12;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.9}>
      <mesh ref={mesh} position={[1.1, 0, 0]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.1} />
      </mesh>
    </Float>
  );
}

// ─── Yerinden Alım — concentric gear rings ───────────────────────────────────

function Gear() {
  const group = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    group.current.rotation.z -= dt * 0.3;
    group.current.rotation.x += dt * 0.1;
  });
  const rings: [number, number][] = [[0.72, 0.22], [0.44, 0.18], [0.18, 0.14]];
  return (
    <Float speed={1.0} rotationIntensity={0.45} floatIntensity={0.75}>
      <group ref={group} position={[3.4, 0, 0]}>
        {rings.map(([r, tube], i) => (
          <mesh key={i} rotation={[Math.PI / 2, (i * Math.PI) / 4, 0]}>
            <torusGeometry args={[r, tube, 20, 80]} />
            <meshStandardMaterial color="#9ca3af" metalness={0.95} roughness={0.15} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// ─── Scene ────────────────────────────────────────────────────────────────────

export default function ServicesScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 36 }}
      // alpha:false + explicit background so the canvas is never white
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#080c12"), 1);
      }}
      performance={{ min: 0.5 }}
    >
      {/* Strong ambient — guarantees visibility */}
      <ambientLight intensity={1.6} />
      {/* Front directional lights */}
      <directionalLight position={[0, 5, 8]} intensity={3} color="#ffffff" />
      <directionalLight position={[-5, 2, 5]} intensity={1.5} color="#ffeedd" />
      <directionalLight position={[5, 2, 5]} intensity={1.5} color="#ffeedd" />
      {/* Dynamic orange orbit */}
      <OrbitLight />

      <IronKnot />
      <CopperCoil />
      <AlumSlab />
      <Gear />
    </Canvas>
  );
}
