"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, FileText, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Hero3DScene } from '@/components/ui/Hero3DScene';

export function Hero() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500); // 3.5 seconds intro
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Three.js Interactive Neural Globe & Particle Scene */}
      <Hero3DScene />

      {/* Ambient Depth Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(0,240,255,0.08)_0%,rgba(157,78,221,0.05)_40%,transparent_70%)] rounded-full blur-[90px]" />
      </div>

      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.08, y: -20, filter: "blur(12px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-center px-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_25px_rgba(0,240,255,0.2)]"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>3D Neural Intelligence Portal</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.2] text-white">
              Building Intelligent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-white drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                AI Systems
              </span><br className="hidden md:block" />
              for Real Problems.
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-center px-6 flex flex-col items-center w-full max-w-5xl mx-auto"
          >
            {/* 3D Glowing Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-cyan-400/30 backdrop-blur-xl text-cyan-300 text-xs md:text-sm font-semibold tracking-widest uppercase mb-8 shadow-[0_0_35px_rgba(0,240,255,0.25)] hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Next-Gen AI Systems Engineer • 3D Neural Architecture</span>
            </motion.div>

            {/* Main Name with 3D Depth Hover */}
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 mb-8 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:scale-[1.02] transition-transform duration-500 cursor-default">
              Chandra Vamsi
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-14 text-base md:text-2xl font-light text-gray-300 tracking-wide">
              <span className="hover:text-cyan-400 transition-colors">AI Engineer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_10px_#00f0ff]" />
              <span className="hover:text-cyan-400 transition-colors">Python Developer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 shadow-[0_0_10px_#9d4edd]" />
              <span className="hover:text-purple-400 transition-colors">Generative AI & LLMs</span>
            </div>

            {/* 3D Magnetic Interactive CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link 
                href="#projects" 
                className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all duration-300"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link 
                href="https://github.com/chandra-vamsi" 
                target="_blank" 
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 border border-white/15 text-white font-medium rounded-full hover:bg-white/10 hover:border-cyan-400/40 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all duration-300"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </Link>

              <Link 
                href="/resume.pdf" 
                target="_blank" 
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 border border-white/15 text-white font-medium rounded-full hover:bg-white/10 hover:border-purple-400/40 hover:scale-105 hover:shadow-[0_0_25px_rgba(157,78,221,0.2)] transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Resume</span>
              </Link>

              <Link 
                href="#contact" 
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 border border-white/15 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-gray-300" />
                <span>Contact</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
