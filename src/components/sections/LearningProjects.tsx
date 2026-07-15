"use client";

import { motion } from 'framer-motion';

export function LearningProjects() {
  const projects = [
    { title: "Plant Disease Classification", badge: "Academic", description: "Convolutional Neural Network for identifying agricultural diseases from leaf images." },
    { title: "Brain Tumor Detection", badge: "Research", description: "Deep learning pipeline using MRI scans for early stage tumor segmentation." },
    { title: "YOLO Fire Detection", badge: "Prototype", description: "Real-time object detection model fine-tuned for identifying smoke and fire hazards." },
    { title: "Spam & Phishing Detection", badge: "Experimental", description: "NLP-based classification system using transformer models for email security." }
  ];

  return (
    <section id="learning" className="relative py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Research & Learning</h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl">
            Exploratory models, academic research, and early-stage prototypes. Not for production use.
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
              whileHover={{ y: -10, rotate: idx % 2 === 0 ? 2 : -2 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                  {project.badge}
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
