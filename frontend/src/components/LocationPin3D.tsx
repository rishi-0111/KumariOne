'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Pin() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 1.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Pin Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#6C4CF1" emissive="#6C4CF1" emissiveIntensity={0.5} />
      </mesh>
      {/* Pin Body */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.4, 1.2, 32]} />
        <meshStandardMaterial color="#6C4CF1" />
      </mesh>
    </group>
  );
}

export default function LocationPin3D() {
  return (
    <div className="w-32 h-32 pointer-events-none">
      <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <Pin />
      </Canvas>
    </div>
  );
}
