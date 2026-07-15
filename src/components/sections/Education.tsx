"use client";

import { motion } from 'framer-motion';

export function Education() {
  return (
    <section id="education" className="relative py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">Education</h2>
            <div className="relative pl-10 border-l border-white/10">
              <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">2019 — 2023</span>
              <h3 className="text-2xl md:text-4xl font-bold mt-4 text-white tracking-tight leading-tight">B.Tech in Computer Science & Engineering</h3>
              <p className="text-xl text-gray-500 mt-4 font-light">Sri Venkateswara College of Engineering, Tirupati</p>
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">Certifications</h2>
            <div className="relative pl-10 border-l border-white/10">
              <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">Microsoft</span>
              <h3 className="text-2xl md:text-4xl font-bold mt-4 text-white tracking-tight leading-tight">Data Scientist Associate (DP-100)</h3>
              <p className="text-xl text-gray-500 mt-4 font-light">Certified expert in building and deploying ML models on Azure.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
