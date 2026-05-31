import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    document.addEventListener("mousemove", onMove);

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const refresh = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    refresh();
    const timer = setInterval(refresh, 2000);

    return () => {
      document.removeEventListener("mousemove", onMove);
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border border-[#000000]"
        style={{ top: 0, left: 0 }}
        animate={{
          x: pos.x - (hovered ? 22 : 15),
          y: pos.y - (hovered ? 22 : 15),
          width: hovered ? 44 : 30,
          height: hovered ? 44 : 30,
          opacity: visible ? 0.85 : 0,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-[#000000]"
        style={{ top: 0, left: 0, width: 5, height: 5 }}
        animate={{
          x: pos.x - 2.5,
          y: pos.y - 2.5,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 45 }}
      />
    </>
  );
}
