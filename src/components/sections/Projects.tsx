"use client";

import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Card3D } from '@/components/ui/Card3D';

export function Projects() {
  const projects = [
    {
      title: "LangChain RAG Assistant",
      subtitle: "Internal Documentation QA Bot",
      description: "A robust support tool that processes over 500,000 document chunks using advanced embeddings to provide context-aware answers without hallucinating.",
      metrics: [
        { label: "Latency", value: "< 1s" },
        { label: "Reliability", value: "High" },
        { label: "Data Indexed", value: "500K+ Chunks" }
      ],
      tech: ["Python", "LangChain", "ChromaDB", "Llama-3", "Groq API"],
      challenges: "The model sometimes hallucinated answers if the vector database returned bad matches, and naive text chunking severed important semantic context.",
      solutions: "Implemented recursive character chunking to keep sentences intact and iterated heavily on prompt engineering to strictly avoid hallucinations.",
      link: "https://github.com/chandra-vamsi",
      caseStudy: "/case-studies/rag",
      image: "/rag-visual.png"
    },
    {
      title: "Crypto Analytics AI",
      subtitle: "Cryptocurrency Price Predictor",
      description: "An end-to-end forecasting pipeline that ingests live Binance order book data into PostgreSQL to predict short-term price movements.",
      metrics: [
        { label: "Model", value: "LSTM Net" },
        { label: "Storage", value: "PostgreSQL" },
        { label: "Window", value: "15 mins" }
      ],
      tech: ["TensorFlow", "Pandas", "PostgreSQL", "Docker", "Binance API"],
      challenges: "Crypto markets are incredibly volatile, and evaluating baseline models (like ARIMA and Random Forests) showed they couldn't capture the temporal dependencies.",
      solutions: "Containerized the pipeline with Docker, engineered features like RSI, and ultimately deployed a deep LSTM network to capture short-term patterns.",
      link: "https://github.com/chandra-vamsi",
      caseStudy: "/case-studies/crypto",
      image: "/crypto-visual.png"
    }
  ];

  return (
    <section id="projects" className="relative border-t border-white/5">
      {projects.map((project, idx) => (
        <div key={idx} className="relative min-h-screen flex items-center py-32 border-b border-white/5 last:border-b-0 overflow-hidden">
          {/* 3D Glowing Ambient Spheres */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[80%] bg-[radial-gradient(circle,rgba(0,240,255,0.06)_0%,transparent_70%)] rounded-l-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[radial-gradient(circle,rgba(157,78,221,0.05)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 mb-4 text-cyan-400 font-semibold uppercase tracking-widest text-xs">
                <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Featured 3D AI Architecture</span>
              </div>
              <h2 className="text-5xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[0.9] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">{project.title}</h2>
              <p className="text-2xl md:text-4xl text-cyan-300/80 tracking-tight font-light mb-16">{project.subtitle}</p>

              <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                
                <div className="md:col-span-5 flex flex-col gap-12">
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6">Overview</h3>
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-200 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto pt-8">
                    <Link href={project.link} target="_blank" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 group">
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" /> View Source
                    </Link>
                    <Link href={project.caseStudy} className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/15 text-white font-medium rounded-full hover:bg-white/10 hover:border-cyan-400/40 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                      <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" /> Case Study
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-7 flex flex-col gap-8">
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="px-6 py-10 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col items-center text-center justify-center hover:bg-white/[0.06] hover:border-cyan-400/50 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,240,255,0.15)] transition-all duration-300">
                        <span className="text-3xl md:text-5xl font-light text-white mb-3 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">{metric.value}</span>
                        <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <Card3D depth={25} borderGlow={true}>
                    <div className="w-full h-64 md:h-80 relative rounded-[2.5rem] overflow-hidden border border-white/10 group">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    </div>
                  </Card3D>

                  <Card3D depth={15} borderGlow={true}>
                    <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col justify-center hover:border-cyan-400/40 transition-colors">
                      <div className="mb-10">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase mb-4">The Challenge</h3>
                        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">{project.challenges}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase mb-4">The Solution</h3>
                        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">{project.solutions}</p>
                      </div>
                    </div>
                  </Card3D>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
