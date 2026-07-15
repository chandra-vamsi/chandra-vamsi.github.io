"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, FileText, Mail } from 'lucide-react';
import Link from 'next/link';

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
      {/* Background Neural Network / Flowing Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_60%)] rounded-full blur-[80px]" />
         
         {/* Animated flowing particles representing AI nodes */}
         {[...Array(12)].map((_, i) => (
           <motion.div
             key={`particle-${i}`}
             className="absolute w-1 h-1 bg-white/20 rounded-full"
             initial={{ 
               x: Math.random() * window.innerWidth, 
               y: Math.random() * window.innerHeight,
               opacity: 0
             }}
             animate={{ 
               y: [null, Math.random() * -300 - 100],
               opacity: [0, 1, 0]
             }}
             transition={{
               duration: Math.random() * 8 + 8,
               repeat: Infinity,
               ease: "linear",
               delay: Math.random() * 5
             }}
           />
         ))}
      </div>

      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.2] text-white">
              Building Intelligent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">AI Systems</span><br className="hidden md:block" />
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
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter leading-[0.9] text-white mb-8">
              Chandra Vamsi
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-12 text-base md:text-2xl font-light text-gray-400 tracking-wide">
              <span>AI Engineer</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Python Developer</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Generative AI</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="https://github.com/chandra-vamsi" target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </Link>
              <Link href="/resume.pdf" target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                <FileText className="w-4 h-4" />
                Resume
              </Link>
              <Link href="#contact" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
