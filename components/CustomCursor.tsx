"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Bypasses React State for 60fps buttery smooth performance
  const cursorX = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 700 });
  
  const cursorY = useMotionValue(-100);
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 700 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!(target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-[100] mix-blend-difference flex justify-center items-center max-md:hidden backdrop-blur-sm"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(34, 211, 238, 0.15)" : "transparent",
        borderColor: isHovering ? "transparent" : "rgba(34, 211, 238, 0.8)",
      }}
      transition={{ duration: 0.15 }}
    >
      <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-50" />
    </motion.div>
  );
}