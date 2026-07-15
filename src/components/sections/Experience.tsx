"use client";

import { motion } from 'framer-motion';

export function Experience() {
  return (
    <section id="experience" className="relative py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">Experience</h2>
          <p className="text-gray-500 text-xl font-light mt-4 md:mt-0 max-w-sm">
            Building robust pipelines and intelligent models at scale.
          </p>
        </motion.div>

        <div className="group border-t border-white/5 relative">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between py-16 md:py-32"
          >
            <div className="md:w-1/3 mb-12 md:mb-0">
              <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">June 2023 — Present</span>
              <h3 className="text-4xl md:text-6xl font-bold mt-4 text-white tracking-tight">Envibe Software</h3>
              <p className="text-2xl text-gray-500 mt-2 font-light">AI Engineer</p>
            </div>
            
            <div className="md:w-1/2 flex flex-col gap-8">
              <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed">
                Architecting and deploying end-to-end ML pipelines, optimizing data processing workflows, and building production-ready generative AI systems.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300 text-lg">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" /> Gen AI Models
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" /> Vector DBs
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" /> Model Deployment
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" /> Data Pipelines
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
