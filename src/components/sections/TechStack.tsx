"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function TechStack() {
  const [mounted, setMounted] = useState(false);
  const [hoveredOrb, setHoveredOrb] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const technologies = [
    { name: "Python", project: "Core Language (All Projects)", color: "cyan" },
    { name: "LangChain", project: "RAG FAQ Assistant", color: "purple" },
    { name: "OpenAI", project: "Generative AI Services", color: "cyan" },
    { name: "Gemini", project: "LLM Orchestration", color: "purple" },
    { name: "Docker", project: "ML Pipeline Containerization", color: "cyan" },
    { name: "Git", project: "Version Control", color: "white" },
    { name: "Azure", project: "Model Deployment & Hosting", color: "cyan" },
    { name: "TensorFlow", project: "Crypto Analytics Forecasting", color: "purple" },
    { name: "PyTorch", project: "Academic Research Models", color: "cyan" },
    { name: "Scikit-learn", project: "Data Processing Pipelines", color: "white" },
    { name: "SQL & Vector DBs", project: "Data Engineering & Retrieval", color: "purple" },
    { name: "FastAPI", project: "Backend Model Serving", color: "cyan" },
    { name: "REST APIs", project: "Microservices Architecture", color: "white" },
  ];

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <section id="stack" className="relative min-h-[80vh] md:min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      {/* 3D Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-[radial-gradient(circle,rgba(0,240,255,0.07)_0%,rgba(157,78,221,0.05)_40%,transparent_70%)] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-20 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_20px_rgba(157,78,221,0.2)]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>3D Interactive Neural Constellation</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-white">AI Engine Stack</span>
        </h2>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-wrap items-center justify-center gap-4 md:gap-7 p-6 z-10">
        {technologies.map((tech, idx) => {
          return (
            <motion.div
              key={idx}
              className="relative group cursor-pointer"
              initial={{ 
                x: (Math.random() - 0.5) * 120, 
                y: (Math.random() - 0.5) * 120,
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
              transition={{ duration: 1, delay: idx * 0.04, type: "spring", bounce: 0.4 }}
              onMouseEnter={() => setHoveredOrb(tech.name)}
              onMouseLeave={() => setHoveredOrb(null)}
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateZ: [0, idx % 2 === 0 ? 2 : -2, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                className={`flex items-center justify-center px-6 py-4 md:px-8 md:py-6 rounded-full border backdrop-blur-xl transition-all duration-500 ${
                  hoveredOrb === tech.name 
                    ? "bg-black/90 text-white border-cyan-400 scale-125 shadow-[0_0_40px_rgba(0,240,255,0.6)] z-50 -translate-y-3"
                    : hoveredOrb 
                      ? "bg-white/5 text-gray-600 border-white/5 scale-90 opacity-25 blur-[2px]"
                      : "bg-white/[0.04] text-gray-200 border-white/15 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]"
                }`}
              >
                <span className="font-extrabold text-sm md:text-xl tracking-tight whitespace-nowrap">{tech.name}</span>
                
                {/* 3D Holographic Tooltip */}
                {hoveredOrb === tech.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 bg-black/95 text-white border border-cyan-400/50 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-2xl whitespace-nowrap pointer-events-none shadow-[0_0_30px_rgba(0,240,255,0.4)] z-50"
                  >
                    <span className="text-cyan-300 font-bold">{tech.project}</span>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r border-b border-cyan-400/50 rotate-45" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Background ambient text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[10rem] md:text-[20rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 whitespace-nowrap">
          STACK
        </h2>
      </div>
    </section>
  );
}
