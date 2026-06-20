import React, { useRef, useMemo } from "react";
import * as THREE from "three";

/**
 * Simple particle system – creates a cloud of glowing points.
 * Props:
 *   count – number of particles (default 5000)
 *   size – point size (default 0.03)
 *   color – hex string (default "#0ff")
 */
export default function Particles({ count = 5000, size = 0.03, color = "#0ff" }) {
  const pointsRef = useRef();

  // Pre‑compute random positions once
  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      data[i] = (Math.random() - 0.5) * 20; // spread in a 20‑unit cube
    }
    return data;
  }, [count]);

  // Slowly rotate the particle cloud for a dynamic feel
  React.useEffect(() => {
    if (pointsRef.current) {
      const animate = () => {
        pointsRef.current.rotation.z += 0.0002;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes.position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}