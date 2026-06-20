import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

/**
 * Renders a lightweight laptop model. If the external GLTF fails to load,
 * a simple box approximates the shape so the hero stays visually complete.
 */
export default function Laptop({ url = "/models/laptop.glb" }) {
  const { scene, nodes, onLoad } = useGLTF(url);
  const meshRef = useRef();

  // Attach a subtle rotation animation
  React.useEffect(() => {
    if (meshRef.current) {
      const animate = () => {
        meshRef.current.rotation.y += 0.0008;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  // Fallback geometry if GLTF fails
  if (!scene) {
    return (
      <mesh ref={meshRef} position={[0, -0.5, 0]}>
        <boxGeometry args={[1, 0.6, 0.1]} />
        <meshBasicMaterial color="#0ff" />
      </mesh>
    );
  }

  // Apply custom material if desired
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material = {
        ...child.material,
        color: "#0ff",
        metalness: 0.2,
        roughness: 0.6,
      };
    }
  });

  return (
    <primitive object={scene} ref={meshRef} scale={0.8} position={[0, -0.5, 0]} />
  );
}