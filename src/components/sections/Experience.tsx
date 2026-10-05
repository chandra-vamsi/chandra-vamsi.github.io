"use client";

import { motion } from 'framer-motion';
import { Card3D } from '@/components/ui/Card3D';
import { Sparkles } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* Ambient Cyber Background */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(0,240,255,0.05)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <div>
            <div className="flex items-center gap-2 mb-4 text-cyan-400 font-semibold uppercase tracking-widest text-xs">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>3D Career Continuum</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Experience</h2>
          </div>
          <p className="text-gray-400 text-xl font-light mt-4 md:mt-0 max-w-sm">
            Building robust pipelines and intelligent models at scale.
          </p>
        </motion.div>

        <Card3D depth={20} borderGlow={true}>
          <div className="p-8 md:p-16 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative">
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row justify-between py-6 md:py-12"
            >
              <div className="md:w-1/3 mb-12 md:mb-0">
                <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-[0.2em] mb-4">September 2024 — Present</span>
                <h3 className="text-4xl md:text-6xl font-extrabold mt-2 text-white tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">Envibe Software</h3>
                <p className="text-2xl text-cyan-400 mt-2 font-medium">AI Engineer</p>
              </div>
              
              <div className="md:w-1/2 flex flex-col gap-8">
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                  Architecting and deploying end-to-end ML pipelines, optimizing data processing workflows, and building production-ready generative AI systems.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200 text-base md:text-lg">
                  <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/50 hover:bg-white/[0.06] hover:translate-x-1 transition-all duration-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]" /> Gen AI Models
                  </li>
                  <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/50 hover:bg-white/[0.06] hover:translate-x-1 transition-all duration-300">
                    <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#9d4edd]" /> Vector DBs
                  </li>
                  <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/50 hover:bg-white/[0.06] hover:translate-x-1 transition-all duration-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]" /> Model Deployment
                  </li>
                  <li className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/50 hover:bg-white/[0.06] hover:translate-x-1 transition-all duration-300">
                    <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#9d4edd]" /> Data Pipelines
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Card3D>
      </div>
    </section>
  );
}
