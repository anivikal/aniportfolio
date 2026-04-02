"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const projects = [
  {
    title: "Predictive Modeling (SIH 2024 Winner)",
    description: "Developed a robust predictive pipeline using Ensemble Learning (Random Forest) to forecast quality KPIs, achieving 98% accuracy by leveraging SMOTE for imbalanced data.",
    tech: ["Random Forest", "SMOTE", "Python"],
    github: "YOUR_GITHUB_LINK_HERE",
    live: "YOUR_VERCEL_LINK_HERE" 
  },
  {
    title: "Anomaly Detection for Critical Infrastructure",
    description: "Engineered a behavioral analysis model using CNNs to detect anomalies across 300,000+ records, distinguishing natural events from cyber-physical attacks.",
    tech: ["Deep Learning", "CNNs", "SQL"],
    github: "YOUR_GITHUB_LINK_HERE",
    live: "YOUR_VERCEL_LINK_HERE"
  },
  {
    title: "Simple Cline Model Orchestrator",
    description: "An automated project scaffolding tool and model orchestrator that directly generates and compiles ready-to-use project zip files to streamline development workflows.",
    tech: ["Automation", "System Design", "Architecture"],
    github: "https://github.com/anivikal/Simple_cline_with_model_orch",
    live: "YOUR_VERCEL_LINK_HERE" 
  },
  {
    title: "Hacksmart BatterySmart",
    description: "An intelligent battery management and optimization platform integrating hardware metrics with software analytics for enhanced lifecycle tracking.",
    tech: ["Predictive Modeling", "IoT", "Analytics"],
    github: "https://github.com/anivikal/Hacksmart_batterysmart",
    live: "YOUR_VERCEL_LINK_HERE"
  },
  {
    title: "Player Retention A/B Testing Engine",
    description: "Analyzed behavioral data of 90,189 users using Hypothesis Testing (Bootstrap) to measure churn and evaluate the statistical impact of level-gating on retention.",
    tech: ["Pandas", "SciPy", "Product Analytics"],
    github: "YOUR_GITHUB_LINK_HERE",
    live: "YOUR_VERCEL_LINK_HERE"
  },
  {
    title: "Data Assistant & HAI Analysis",
    description: "An intelligent data workflow assistant and advanced analysis system focused on extracting deep behavioral patterns and automating analytical insights from raw datasets.",
    tech: ["AI/ML", "Python", "EDA"],
    github: "YOUR_GITHUB_LINK_HERE", 
    live: "YOUR_VERCEL_LINK_HERE"
  }
];

// The specialized Spotlight Card Component with Links
function SpotlightCard({ project, index }: { project: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 overflow-hidden transition-colors hover:border-white/20 flex flex-col h-full"
    >
      {/* The Dynamic Mouse Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-white tracking-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-8 leading-relaxed text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech: string, i: number) => (
            <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10 backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links (GitHub & Live Vercel) */}
      <div className="relative z-10 flex gap-4 mt-auto border-t border-white/10 pt-6">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            {/* GitHub SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Code
          </a>
        )}
        {project.live && (
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {/* Vercel Triangle SVG Icon */}
            <svg viewBox="0 0 76 65" fill="currentColor" width="14" height="14"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/></svg>
            Deploy
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-32 w-full max-w-6xl mx-auto px-6 border-t border-white/5 relative z-10">
      
      {/* Section Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">Engineering & Analysis</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg leading-relaxed">
          A showcase of my technical architecture. From securing 1st rank at the Smart India Hackathon to engineering deep learning models and automating CI/CD pipelines, here is where complex data meets scalable deployment.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <SpotlightCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}