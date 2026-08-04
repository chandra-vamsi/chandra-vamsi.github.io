"use client";

import { motion } from 'framer-motion';
import { Card3D } from '@/components/ui/Card3D';
import { Sparkles } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* 3D Cyber Ambient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(0,240,255,0.05)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          
          {/* Education */}
          <div className="h-full">
            <Card3D depth={18} borderGlow={true} className="h-full">
              <div className="p-10 md:p-14 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-6 text-cyan-400 font-semibold uppercase tracking-widest text-xs">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span>Academic Foundation</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Education</h2>
                  <div className="relative pl-8 border-l-2 border-cyan-400/50">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#00f0ff]" />
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-[0.2em] mb-4">2019 — 2023</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">B.Tech in Computer Science & Engineering</h3>
                    <p className="text-lg text-gray-300 mt-3 font-light">Sri Venkateswara College of Engineering, Tirupati</p>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
          
          {/* Certifications */}
          <div className="h-full">
            <Card3D depth={18} borderGlow={true} className="h-full">
              <div className="p-10 md:p-14 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-6 text-purple-400 font-semibold uppercase tracking-widest text-xs">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span>Industry Recognition</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Certifications</h2>
                  <div className="relative pl-8 border-l-2 border-purple-400/50">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_#9d4edd]" />
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-[0.2em] mb-4">Microsoft</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">Data Scientist Associate (DP-100)</h3>
                    <p className="text-lg text-gray-300 mt-3 font-light">Certified expert in building and deploying ML models & AI architectures on Azure.</p>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

        </div>
      </div>
    </section>
  );
}
