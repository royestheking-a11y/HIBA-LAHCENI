import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9998]"
      style={{
        height: "1px",
        background: "#000000",
        scaleX,
        transformOrigin: "left",
      }}
    />
  );
}
