"use client";

import { Component, Suspense, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import type { Group, Object3D } from "three";
import { links } from "@/lib/site-data";

type DigitalTwinHeroProps = {
  theme: "light" | "dark";
};

type ModelErrorBoundaryProps = {
  onError: () => void;
  children: ReactNode;
};

type ModelErrorBoundaryState = {
  hasError: boolean;
};

class ModelErrorBoundary extends Component<ModelErrorBoundaryProps, ModelErrorBoundaryState> {
  constructor(props: ModelErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ModelErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

function GLBBuilding({ modelPath, pointerX, pointerY }: { modelPath: string; pointerX: number; pointerY: number }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (!group.current) {
      return;
    }

    const targetY = pointerX * 0.22;
    const targetX = -pointerY * 0.12;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.07;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.07;
  });

  return (
    <group ref={group}>
      <primitive object={scene as Object3D} scale={0.12} position={[0, -1.1, 0]} />
    </group>
  );
}

function SceneFallback() {
  return (
    <div className="hero-fallback relative h-[26rem] w-full overflow-hidden rounded-3xl border border-white/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,212,122,0.35),transparent_48%),radial-gradient(circle_at_80%_65%,rgba(122,18,18,0.4),transparent_40%)]" />
      <div className="parallax-layer" aria-hidden="true" />
      <div className="absolute inset-x-6 bottom-6 rounded-xl bg-black/35 p-4 text-sm text-white backdrop-blur-md">
        Mobile fallback mode is active for stable rendering.
      </div>
    </div>
  );
}

export function DigitalTwinHero({ theme }: DigitalTwinHeroProps) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [modelMode, setModelMode] = useState<"fast" | "stable" | "failed">("fast");
  const [supports3D] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const isLowEndMobile = window.matchMedia("(max-width: 768px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !isLowEndMobile && !reducedMotion;
  });

  const keyLight = theme === "dark" ? "#f6b042" : "#7a1212";
  const rimLight = theme === "dark" ? "#ffe083" : "#c95353";
  const modelPath = modelMode === "stable" ? "/models/fot-building-stable.glb" : "/models/fot-building-web.glb";

  const handleModelError = () => {
    setModelMode((current) => {
      if (current === "fast") {
        return "stable";
      }
      return "failed";
    });
  };

  return (
    <section className="section-shell pt-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="space-y-6"
        >
          <p className="eyebrow">Faculty of Technology • University of Delhi</p>
          <h1 className="title-xl">
            Elite Tech Identity for the inaugural batch recruiters trust from day one.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
            A 3D-first recruiter experience engineered for HR leaders and technical decision-makers,
            combining institutional credibility, industry-fit curriculum evidence, and direct hiring action.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="btn-primary" href={links.samarth} target="_blank" rel="noreferrer">
              Register on Samarth
            </a>
            <a className="btn-secondary" href="#brochure">
              View Placement Brochure
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
            setPointer({ x, y });
          }}
        >
          {supports3D && modelMode !== "failed" ? (
            <div className="h-[26rem] overflow-hidden rounded-3xl border border-white/20 bg-[var(--hero-panel)]">
              <Suspense fallback={<SceneFallback />}>
                <ModelErrorBoundary key={modelPath} onError={handleModelError}>
                  <Canvas shadows camera={{ position: [0, 1.8, 6], fov: 42 }}>
                    <ambientLight intensity={0.55} />
                    <directionalLight position={[2, 5, 2]} intensity={1.3} color={keyLight} castShadow />
                    <pointLight position={[-3, 3, 2]} intensity={1.1} color={rimLight} />
                    <Environment preset="sunset" />
                    <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.25}>
                      <GLBBuilding modelPath={modelPath} pointerX={pointer.x} pointerY={pointer.y} />
                    </Float>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} maxPolarAngle={1.65} minPolarAngle={1.2} />
                  </Canvas>
                </ModelErrorBoundary>
              </Suspense>
              {modelMode === "stable" ? (
                <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/35 bg-black/30 px-3 py-1 text-xs text-white">
                  Stable mode
                </div>
              ) : null}
            </div>
          ) : (
            <SceneFallback />
          )}
        </motion.div>
      </div>
    </section>
  );
}

useGLTF.preload("/models/fot-building-web.glb");
useGLTF.preload("/models/fot-building-stable.glb");

