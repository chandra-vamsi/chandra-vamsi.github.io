"use client";

import { motion } from 'framer-motion';
import { Card3D } from '@/components/ui/Card3D';
import { Sparkles } from 'lucide-react';

export function LearningProjects() {
  const projects = [
    { title: "Plant Disease Classification", badge: "Academic", description: "Convolutional Neural Network for identifying agricultural diseases from leaf images.", color: "cyan" },
    { title: "Brain Tumor Detection", badge: "Research", description: "Deep learning pipeline using MRI scans for early stage tumor segmentation.", color: "purple" },
    { title: "YOLO Fire Detection", badge: "Prototype", description: "Real-time object detection model fine-tuned for identifying smoke and fire hazards.", color: "cyan" },
    { title: "Spam & Phishing Detection", badge: "Experimental", description: "NLP-based classification system using transformer models for email security.", color: "purple" }
  ];

  return (
    <section id="learning" className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* 3D Cyber Gradients */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(157,78,221,0.06)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 text-center md:text-left"
        >
          <div className="flex items-center gap-2 mb-4 text-purple-400 font-semibold uppercase tracking-widest text-xs">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: "8s" }} />
            <span>3D Research Prototypes</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Research & Learning</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Exploratory models, academic research, and early-stage prototypes. Built with experimental 3D neural architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              className="h-full"
            >
              <Card3D depth={20} borderGlow={true} className="h-full">
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.06] transition-all cursor-pointer flex flex-col h-full justify-between">
                  <div>
                    <span className={`inline-block px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border ${
                      project.color === 'cyan'
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'bg-purple-500/10 border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(157,78,221,0.2)]'
                    }`}>
                      {project.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                    <p className="text-gray-300 font-light leading-relaxed">{project.description}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-cyan-400/80">
                    <span>Explore Model</span>
                    <span>→</span>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
