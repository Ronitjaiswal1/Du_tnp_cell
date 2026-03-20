"use client";

import { Component, Suspense, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Box3, Color, Group, Mesh, MeshPhysicalMaterial, MeshStandardMaterial, Vector3 } from "three";
import { HeroBackgroundSlider } from "./hero-background-slider";
import { heroBackgroundSlides } from "@/lib/site-data";

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

function classifyAndStyleMaterial(meshName: string, material: MeshStandardMaterial | MeshPhysicalMaterial) {
  const name = meshName.toLowerCase();
  const matName = (material.name || "").toLowerCase();
  const token = `${name} ${matName}`;

  const isGlass = /glass|window|pane|glazing/.test(token) || material.transparent || material.opacity < 1;
  const isMetal = /metal|steel|railing|louver|fin|stair|frame/.test(token);
  const isTree = /tree|leaf|plant|bush|foliage|palm/.test(token);
  const isGrass = /grass|lawn/.test(token);
  const isGround = /floor|ground|road|path|paver|concrete|pillar|column/.test(token);

  if (isGlass) {
    material.color = new Color("#b8cbe0");
    material.transparent = true;
    material.opacity = 0.2;
    material.roughness = 0.05;
    material.metalness = 0.85;
    if (material instanceof MeshPhysicalMaterial) {
      material.transmission = 0.7;
      material.ior = 1.45;
    }
    material.needsUpdate = true;
    return;
  }

  if (isMetal) {
    material.color = new Color("#c2c9d1");
    material.roughness = 0.22;
    material.metalness = 0.82;
    material.needsUpdate = true;
    return;
  }

  if (isTree) {
    material.color = new Color("#5e8b43");
    material.roughness = 0.86;
    material.metalness = 0;
    material.needsUpdate = true;
    return;
  }

  if (isGrass) {
    material.color = new Color("#6d9b47");
    material.roughness = 0.9;
    material.metalness = 0;
    material.needsUpdate = true;
    return;
  }

  if (isGround) {
    material.color = new Color("#d8dde2");
    material.roughness = 0.9;
    material.metalness = 0.05;
    material.needsUpdate = true;
    return;
  }

  material.color = new Color("#a9757a");
  material.roughness = 0.84;
  material.metalness = 0.03;
  material.needsUpdate = true;
}

function ReferenceFacade({ modelPath, pointerX, pointerY }: { modelPath: string; pointerX: number; pointerY: number }) {
  const rootRef = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  const fitted = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.traverse((obj) => {
      if (!(obj instanceof Mesh)) {
        return;
      }

      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        if (m instanceof MeshStandardMaterial || m instanceof MeshPhysicalMaterial) {
          classifyAndStyleMaterial(obj.name, m);
        }
      }

      obj.castShadow = true;
      obj.receiveShadow = true;
    });

    const bounds = new Box3().setFromObject(cloned);
    const size = new Vector3();
    const center = new Vector3();
    bounds.getSize(size);
    bounds.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = 4.8 / maxDim;

    return {
      object: cloned,
      scale,
      position: new Vector3(-center.x * scale, -center.y * scale - 0.9, -center.z * scale),
    };
  }, [scene]);

  useFrame(() => {
    if (!rootRef.current) {
      return;
    }

    const targetY = pointerX * 0.08;
    const targetX = -pointerY * 0.035;
    rootRef.current.rotation.y += (targetY - rootRef.current.rotation.y) * 0.08;
    rootRef.current.rotation.x += (targetX - rootRef.current.rotation.x) * 0.08;
  });

  return (
    <group ref={rootRef}>
      <primitive object={fitted.object} scale={fitted.scale} position={[fitted.position.x, fitted.position.y, fitted.position.z]} />
    </group>
  );
}

function StableScene({ modelPath, pointerX, pointerY }: { modelPath: string; pointerX: number; pointerY: number }) {
  return (
    <Canvas shadows camera={{ position: [0, 0.5, 10.5], fov: 24 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#cdddf0"]} />
      <fog attach="fog" args={["#cdddf0", 18, 34]} />

      <ambientLight color="#FDFCF0" intensity={0.22} />
      <directionalLight
        color="#FFFAF0"
        intensity={2.4}
        position={[10, 9, 8]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <hemisphereLight args={[new Color("#d9e8fa"), new Color("#dae0cb"), 0.45]} />

      <Suspense fallback={null}>
        <Environment preset="park" />
        <ReferenceFacade modelPath={modelPath} pointerX={pointerX} pointerY={pointerY} />
      </Suspense>

      <EffectComposer>
        <DepthOfField focusDistance={0.016} focalLength={0.02} bokehScale={0.65} height={480} />
      </EffectComposer>

      <OrbitControls
        enableZoom
        enablePan
        enableDamping
        dampingFactor={0.08}
        autoRotate={false}
        minDistance={6.2}
        maxDistance={16}
        minPolarAngle={0.95}
        maxPolarAngle={1.75}
      />
    </Canvas>
  );
}

function SceneFallback() {
  return (
    <div className="h-104 w-full rounded-3xl border border-maroon/20 bg-[linear-gradient(135deg,#89a9d2_0%,#b8c9df_52%,#d4e0ef_100%)] p-6 text-white shadow-2xl">
      <div className="h-full w-full rounded-2xl border border-white/25 bg-black/10 p-6 backdrop-blur-sm">
        <p className="font-serif text-2xl">3D Model Preview</p>
        <p className="mt-3 max-w-sm text-sm text-white/90">
          WebGL is unavailable on this device. Open on a GPU-enabled browser to view the exact model render.
        </p>
      </div>
    </div>
  );
}

export function DigitalTwinHero() {
  const [pointer, setPointer] = useState(new Vector3(0, 0, 0));
  const [modelMode, setModelMode] = useState<"stable" | "web" | "lod" | "failed">("stable");
  const showReferenceImage = true;
  const [supports3D] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const canvas = document.createElement("canvas");
    const webgl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return Boolean(webgl) && !reducedMotion;
  });

  const modelPath =
    modelMode === "stable"
      ? "/models/fot-building-stable.glb"
      : modelMode === "web"
        ? "/models/fot-building-web.glb"
        : "/models/fot-building-lod1.glb";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      <HeroBackgroundSlider slides={heroBackgroundSlides} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,253,253,0.35),rgba(255,255,255,0.62),rgba(243,244,246,0.88))]" />
      <div className="absolute inset-0 bg-linear-to-b from-white/25 via-white/50 to-[#f3f4f6]/70" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-5xl text-maroon leading-tight">
            Training and Placement Cell
          </h2>
          <h1 className="font-serif text-6xl md:text-8xl text-maroon leading-tight">
            Architecting <br />
            <span className="text-gold italic">the Future.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
            Home to the Pioneers of Faculty of Technology, University of Delhi. Redefining engineering excellence since inception.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start pt-4">
            <a
              className="px-8 py-4 glass text-maroon border border-maroon/20 hover:bg-maroon hover:text-white transition-all duration-300 rounded-lg font-bold text-center"
              href="#departments"
            >
              Explore Programs
            </a>
            <a
              className="px-8 py-4 bg-maroon text-white rounded-lg font-bold shadow-xl hover:bg-black transition-all text-center"
              href="/academics/facilities#facilities-section"
            >
              Virtual Tour
            </a>
          </div>
        </div>

        <div
          className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
            setPointer(new Vector3(x, y, 0));
          }}
        >
          <div className="relative h-104 w-full max-w-2xl overflow-hidden rounded-3xl border-4 border-gold/20 shadow-2xl animate-float">
            {showReferenceImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/FOT.png"
                alt="Faculty of Technology building reference"
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            ) : (
              <>
                {supports3D && modelMode !== "failed" ? (
                  <ModelErrorBoundary
                    key={modelPath}
                    onError={() => {
                      setModelMode((current) => {
                        if (current === "stable") {
                          return "web";
                        }
                        if (current === "web") {
                          return "lod";
                        }
                        return "failed";
                      });
                    }}
                  >
                    <StableScene modelPath={modelPath} pointerX={pointer.x} pointerY={pointer.y} />
                  </ModelErrorBoundary>
                ) : (
                  <SceneFallback />
                )}
              </>
            )}
          </div>
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-maroon/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

useGLTF.preload("/models/fot-building-stable.glb");
useGLTF.preload("/models/fot-building-web.glb");
useGLTF.preload("/models/fot-building-lod1.glb");


