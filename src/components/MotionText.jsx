import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * MotionText animates its children text character‑by‑character.
 * Each character fades in and moves upward slightly when the component
 * scrolls into view. The animation runs once per mount.
 *
 * Props:
 * - `text`: string – the full text to animate
 * - `className`?: string – optional class name applied to the wrapper
 * - `delay`?: number – base delay between characters (seconds)
 * - `duration`?: number – duration of each character animation (seconds)
 */
const MotionText = ({ text, className = "", delay = 0.05, duration = 0.4 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * delay, duration }
      }));
    }
  }, [inView, controls, delay, duration]);

  // Split text into characters preserving spaces
  const chars = Array.from(text);

  return (
    <span ref={ref} className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          custom={i}
          style={{ display: "inline-block" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
};

export default MotionText;
