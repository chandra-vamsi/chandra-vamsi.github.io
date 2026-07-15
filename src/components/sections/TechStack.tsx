"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function TechStack() {
  const [mounted, setMounted] = useState(false);
  const [hoveredOrb, setHoveredOrb] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const technologies = [
    { name: "Python", project: "Core Language (All Projects)" },
    { name: "LangChain", project: "RAG FAQ Assistant" },
    { name: "OpenAI", project: "Generative AI Services" },
    { name: "Gemini", project: "LLM Orchestration" },
    { name: "Docker", project: "ML Pipeline Containerization" },
    { name: "Git", project: "Version Control" },
    { name: "Azure", project: "Model Deployment & Hosting" },
    { name: "TensorFlow", project: "Crypto Analytics Forecasting" },
    { name: "PyTorch", project: "Academic Research Models" },
    { name: "Scikit-learn", project: "Data Processing Pipelines" },
    { name: "SQL", project: "Data Engineering" },
    { name: "FastAPI", project: "Backend Model Serving" },
    { name: "REST APIs", project: "Microservices Architecture" },
  ];

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <section id="stack" className="relative min-h-[70vh] md:min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-wrap items-center justify-center gap-4 md:gap-6 p-6 z-10">
        {technologies.map((tech, idx) => {
          return (
            <motion.div
              key={idx}
              className="relative group cursor-pointer"
              initial={{ 
                x: (Math.random() - 0.5) * 100, 
                y: (Math.random() - 0.5) * 100,
                opacity: 0,
                scale: 0.5
              }}
              whileInView={{ 
                x: 0, 
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.05, type: "spring", bounce: 0.4 }}
              onMouseEnter={() => setHoveredOrb(tech.name)}
              onMouseLeave={() => setHoveredOrb(null)}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                className={`flex items-center justify-center px-6 py-4 md:px-8 md:py-6 rounded-full border backdrop-blur-xl transition-all duration-500 ${
                  hoveredOrb === tech.name 
                    ? "bg-white text-black border-white scale-110 shadow-[0_0_30px_rgba(255,255,255,0.4)] z-50"
                    : hoveredOrb 
                      ? "bg-white/5 text-gray-600 border-white/5 scale-95 opacity-30 blur-[2px]"
                      : "bg-white/[0.03] text-gray-300 border-white/10 hover:bg-white/10"
                }`}
              >
                <span className="font-medium text-sm md:text-xl tracking-tight whitespace-nowrap">{tech.name}</span>
                
                {/* Tooltip */}
                {hoveredOrb === tech.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-black border border-white/20 text-xs md:text-sm font-semibold px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl z-50"
                  >
                    {tech.project}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Background ambient text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <h2 className="text-[10rem] md:text-[20rem] font-bold tracking-tighter text-white whitespace-nowrap">
          STACK
        </h2>
      </div>
    </section>
  );
}
