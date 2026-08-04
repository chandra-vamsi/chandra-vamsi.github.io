"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-t border-white/5 bg-black">
      {/* 3D Interactive Aurora / Cyber Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-[radial-gradient(circle,rgba(0,240,255,0.15)_0%,rgba(157,78,221,0.1)_40%,transparent_70%)] rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>3D Collaboration Portal</span>
          </div>

          <h2 className="text-[15vw] sm:text-[9rem] lg:text-[11rem] font-extrabold tracking-tighter leading-[0.85] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-black/30 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
            LET'S <br/> BUILD.
          </h2>
          
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-white mb-16">
            Something Intelligent.
          </h3>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="mailto:chandravamsi.t@gmail.com" 
              className="inline-flex items-center gap-3 px-11 py-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xl font-bold rounded-full hover:scale-105 hover:shadow-[0_0_45px_rgba(0,240,255,0.7)] transition-all duration-300 group"
            >
              <span>Email Me</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="tel:+917780140364" 
              className="group relative overflow-hidden inline-flex items-center justify-center px-11 py-6 bg-white/5 border border-white/15 text-white text-xl font-bold rounded-full hover:bg-white/10 hover:border-purple-400/50 hover:scale-105 hover:shadow-[0_0_35px_rgba(157,78,221,0.3)] transition-all duration-300 w-60 h-[76px]"
            >
              <div className="absolute inset-0 flex items-center justify-center gap-3 transition-transform duration-500 group-hover:-translate-y-[150%]">
                <span>Phone</span>
                <ArrowRight className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-[150%] transition-transform duration-500 group-hover:translate-y-0 text-lg md:text-xl font-extrabold text-cyan-300">
                +91 7780140364
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
