"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const name = "Anirudh Vikal".split("");

  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center px-6 relative overflow-hidden pt-20">
      
      {/* Background Blobs */}
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 8, repeat: Infinity }} 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-700/20 blur-[100px] rounded-full -z-10" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0] }} 
        transition={{ duration: 10, repeat: Infinity, delay: 1 }} 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" 
      />

      {/* Foreground Content */}
      <div className="text-center max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 flex justify-center flex-wrap gap-x-3">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Hi, I'm
          </motion.span>
          <span className="flex">
            {name.map((letter, index) => (
              <motion.span 
                key={index} 
                initial={{ opacity: 0, y: 50, rotateX: -90 }} 
                animate={{ opacity: 1, y: 0, rotateX: 0 }} 
                transition={{ duration: 0.8, delay: 0.3 + index * 0.05, type: "spring" }} 
                className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 ${letter === " " ? "w-4" : ""}`}
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>.</motion.span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 1 }} 
          className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-light"
        >
          Software Engineer & Data Scientist | Building intelligent systems, scalable architecture, and AI-driven solutions.
        </motion.p>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
          <motion.a 
            href="#work" 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)" }} 
            whileTap={{ scale: 0.95 }} 
            className="px-8 py-3 bg-white text-black font-medium rounded-full transition-all cursor-pointer inline-block"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}