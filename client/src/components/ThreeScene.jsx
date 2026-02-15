import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import PropTypes from 'prop-types';

// Low-poly programmatic planet (serves as a "custom" model without external assets)
function LowPolyPlanet({ color = ['#7c3aed', '#06b6d4'], radius = 1.1, scaleFactor = 1 }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    // continuous auto-rotate
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5;
      // subtle hover tilt (lerp for smoothness)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, hovered ? -0.12 : 0, 0.08);
      const hoverScale = hovered ? 1.05 : 1;
      // keep modelScale independent by applying scaleFactor on the parent group and hover scaling on the mesh
      ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, hoverScale, 0.06);
      ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, hoverScale, 0.06);
      ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, hoverScale, 0.06);
    }
  });

  return (
    <group scale={[scaleFactor, scaleFactor, scaleFactor]}>
      {/* low-poly core */}
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
      >
        {/* low-poly look via Icosahedron + flat shading */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color[0]}
          roughness={0.45}
          metalness={0.18}
          flatShading={true}
        />

        {/* subtle emissive veins */}
        <mesh
          geometry={new THREE.IcosahedronGeometry(1.01, 1)}
          // use a very thin emissive overlay by rendering another mesh with additive blending
        >
          <meshStandardMaterial
            color={color[1]}
            emissive={color[1]}
            emissiveIntensity={0.08}
            transparent={true}
            opacity={0.4}
            roughness={1}
          />
        </mesh>

        {/* floating name label */}
        <Html center position={[0, -1.4, 0]}>
          <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: 12, textAlign: 'center' }}></div>
        </Html>
      </mesh>

      {/* atmosphere / glow */}
      <mesh scale={[1.12, 1.12, 1.12]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color={color[1]}
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* faint decorative ring */}
      <mesh rotation={[Math.PI / 2.9, 0, 0]} position={[0, -0.22, 0]}>
        <torusGeometry args={[1.45, 0.04, 4, 80]} />
        <meshStandardMaterial color={color[1]} metalness={0.6} roughness={0.3} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

LowPolyPlanet.propTypes = {
  color: PropTypes.array,
  radius: PropTypes.number,
};

export const ThreeScene = ({ className = '', modelScale = 1 }) => {
  return (
    <div className={className} style={{ width: '100px', height: '100px' }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-5, -2, -5]} intensity={0.15} />

        <Suspense fallback={null}>
          <LowPolyPlanet scaleFactor={modelScale} />
        </Suspense>

        {/* subtle postprocessing bloom (user requested: subtle) */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.5} intensity={0.25} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

ThreeScene.propTypes = {
  className: PropTypes.string,
  modelScale: PropTypes.number,
};
