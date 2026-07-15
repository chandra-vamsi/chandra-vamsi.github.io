"use client";

import { motion } from 'framer-motion';

export function EducationCertifications() {
  return (
    <section id="education" className="relative py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-12">Education</h2>
            <div className="relative pl-8 border-l border-white/10">
              <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white" />
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">2017 — 2021</span>
              <h3 className="text-xl font-bold mt-2 text-white">B.Tech in Computer Science & Engineering</h3>
              <p className="text-gray-400 mt-2 font-light">Malla Reddy Engineering College (MREC)</p>
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-12">Certifications</h2>
            <div className="relative pl-8 border-l border-white/10">
              <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white" />
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Microsoft</span>
              <h3 className="text-xl font-bold mt-2 text-white">Data Scientist Associate (DP-100)</h3>
              <p className="text-gray-400 mt-2 font-light">Certified expert in building and deploying ML models on Azure.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
