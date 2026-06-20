import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';

/**
 * Base Three.js canvas wrapper with lighting, post‑processing and optional stats.
 * Props:
 *   children – React nodes to render inside the canvas
 *   environment – Toggle post‑processing (default true)
 */
export const ThreeCanvas = ({ children, environment = true }) => (
  <Canvas
    shadows
    camera={{ position: [0, 2, 5], fov: 60 }}
    style={{ height: '100%', width: '100%', pointerEvents: 'none' }}
    gl={{ preserveDrawingBuffer: true, antialias: true, powerPreference: 'high-performance' }}
  >
    {/* Lights */}
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
    <hemisphereLight intensity={0.6} groundColor={0x000033} skyColor={0x00aaff} />

    {/* Optional post‑processing removed for compatibility */}
    {environment && <></> /* placeholder */}

    {children}

    {/* Development helper – remove in production */}
    <Stats />
  </Canvas>
);