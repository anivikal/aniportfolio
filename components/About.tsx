"use client";

import { motion } from "framer-motion";

export default function About() {
  const milestones = [
    {
      period: "Present",
      role: "Dual Degree Scholar",
      institution: "Chandigarh University & IIT Madras",
      description: "Rigorous concurrent academic path. Pursuing a BE in Computer Science alongside a BS in Data Science & Programming. Bridging the gap between software engineering and complex data algorithms.",
      icon: "🎓"
    },
    {
      period: "April 2025",
      role: "Academic Achievers Award",
      institution: "Chandigarh University",
      description: "Honored for outstanding academic excellence and maintaining top-tier performance in the Computer Science engineering cohort.",
      icon: "🏅"
    },
    {
      period: "2024",
      role: "Smart India Hackathon (SIH) Winner",
      institution: "National Innovation Initiative",
      description: "Secured the winning position by building scalable, high-impact architecture. This milestone solidified my drive to engineer real-world, AI-driven solutions.",
      icon: "🏆"
    },
    {
      period: "Fellowships",
      role: "Global Leadership & Strategy",
      institution: "McKinsey & Company | Aspire Institute",
      description: "Selected as an Aspire Leaders Fellow and completed the McKinsey Forward Fellowship, developing a strong foundation in strategic thinking and leadership beyond code.",
      icon: "🌍"
    },
    {
      period: "Training",
      role: "Advanced AI & Hardware",
      institution: "Samsung Innovation Campus & Intel",
      description: "Deepened technical expertise through specialized AI/ML training with Samsung and completed a hands-on summer traineeship via Intel Corporation's Digital Readiness Program.",
      icon: "💻"
    }
  ];

  return (
    <section id="about" className="py-32 w-full max-w-4xl mx-auto px-6 border-t border-white/5 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.6 }} 
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">The Journey</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A trajectory defined by continuous learning, competitive problem-solving, and a commitment to pushing technological boundaries.
        </p>
      </motion.div>

      {/* The Timeline Container */}
      <div className="relative border-l border-gray-800 ml-4 md:ml-0 md:border-none">
        
        {/* Central glowing line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/50 via-cyan-400/50 to-transparent -translate-x-1/2"></div>

        {milestones.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16 group">
              
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-[-20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-[#0a0a0a] border-2 border-gray-700 group-hover:border-purple-400 rounded-full flex justify-center items-center text-sm z-10 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                {item.icon}
              </motion.div>

              {/* Left Side Content */}
              <div className={`w-full md:w-5/12 pl-8 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12 md:text-left'} mt-4 md:mt-0`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, type: "spring", damping: 12 }}
                  className="bg-[#111] border border-gray-800 p-6 rounded-2xl hover:border-white/20 transition-colors relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <span className="text-cyan-400 font-mono text-sm font-semibold tracking-wider mb-2 block">
                    {item.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <h4 className="text-sm font-medium text-purple-400 mb-4">
                    {item.institution}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Right Side Empty Space for Desktop Alignment */}
              <div className={`hidden md:block md:w-5/12 ${isEven ? 'md:order-2' : ''}`}></div>

            </div>
          );
        })}
      </div>
    </section>
  );
}