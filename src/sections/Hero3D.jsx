import React, { Suspense } from "react";
import { ThreeCanvas } from "../components/ThreeCanvas";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import Laptop from "../components/Laptop";
import Particles from "../components/Particles";
import { FlipWords as FlipWordsComponent } from "../components/FlipWords";

/**
 * Hero Text Overlay – reuses FlipWords animation.
 */
const HeroText = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="flex flex-col items-center gap-6 text-center"
  >
    <motion.h1
      className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Hi, I'm Haaniya
    </motion.h1>
    <motion.p
      className="text-2xl md:text-4xl text-white/70 font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      AI Engineer & Full‑Stack Developer
    </motion.p>

    <div className="mt-4">
      <FlipWordsComponent words={["Building Intelligent Systems", "Crafting Digital Experiences", "Founding Startups"]} className="text-3xl md:text-5xl font-bold text-cyan-400" />
    </div>

    <motion.div
      className="mt-8 flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <a href="#projects" className="px-6 py-3 rounded-full bg-cyan-500/80 hover:bg-cyan-400 transition text-white font-semibold">
        View Projects
      </a>
      <a href="#contact" className="px-6 py-3 rounded-full border border-cyan-500/60 hover:bg-cyan-500/20 text-cyan-400 transition font-semibold">
        Contact Me
      </a>
    </motion.div>
  </motion.div>
);

/**
 * Main Hero3D Section.
 */
const Hero3D = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <ThreeCanvas>
      <Particles />
      <Suspense fallback={null}>
        <Laptop url="/models/laptop.glb" />
      </Suspense>
      <Html transform={false} prepend className="absolute inset-0 flex items-center justify-center text-center z-10 pointer-events-none">
        <HeroText />
      </Html>
    </ThreeCanvas>
  </section>
);

export default Hero3D;