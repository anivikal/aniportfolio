"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          <div className="w-[200px] h-[2px] bg-gray-800 rounded-full overflow-hidden mb-6">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
              className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-400"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="text-cyan-400 font-mono text-xs font-bold tracking-[0.3em] uppercase"
          >
            Initializing System
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}