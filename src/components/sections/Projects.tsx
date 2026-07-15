"use client";

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  const projects = [
    {
      title: "LangChain RAG Assistant",
      subtitle: "Internal Documentation QA Bot",
      description: "A helpful support tool that reads through a collection of internal PDFs and manuals to provide quick, context-aware answers to user questions.",
      metrics: [
        { label: "Latency", value: "~1s" },
        { label: "Reliability", value: "High" },
        { label: "Data Indexed", value: "500+ Docs" }
      ],
      tech: ["Python", "LangChain", "ChromaDB", "OpenAI API"],
      challenges: "The model sometimes hallucinated answers if the vector database returned bad matches, and naive text chunking broke paragraphs in half.",
      solutions: "Implemented recursive character chunking to keep sentences intact and tweaked the prompt to strictly avoid hallucinations when context is missing.",
      link: "https://github.com/chandra-vamsi",
      caseStudy: "/case-studies/rag"
    },
    {
      title: "Crypto Analytics AI",
      subtitle: "Cryptocurrency Price Predictor",
      description: "A time-series forecasting script that analyzes recent cryptocurrency price trends and order book data to guess short-term price movements.",
      metrics: [
        { label: "Model", value: "LSTM Net" },
        { label: "Dataset", value: "Local CSVs" },
        { label: "Window", value: "15 mins" }
      ],
      tech: ["TensorFlow", "Pandas", "Scikit-learn", "REST APIs"],
      challenges: "Crypto markets are incredibly noisy, so my initial models were basically just predicting the previous minute's price instead of forecasting.",
      solutions: "Added moving averages and RSI (Relative Strength Index) features to the dataset before passing it into the neural network to find better signals.",
      link: "https://github.com/chandra-vamsi",
      caseStudy: "/case-studies/crypto"
    }
  ];

  return (
    <section id="projects" className="relative border-t border-white/5">
      {projects.map((project, idx) => (
        <div key={idx} className="relative min-h-screen flex items-center py-32 border-b border-white/5 last:border-b-0 overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[80%] bg-white/[0.02] rounded-l-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-5xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-6">{project.title}</h2>
              <p className="text-2xl md:text-4xl text-gray-500 tracking-tight font-light mb-16">{project.subtitle}</p>

              <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                
                <div className="md:col-span-5 flex flex-col gap-12">
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6">Overview</h3>
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto pt-8">
                    <Link href={project.link} target="_blank" className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors group">
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" /> View Source
                    </Link>
                    <Link href={project.caseStudy} className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors group">
                      <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" /> Case Study
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-7 flex flex-col gap-8">
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="px-6 py-10 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center justify-center hover:bg-white/[0.04] transition-colors">
                        <span className="text-3xl md:text-5xl font-light text-white mb-3">{metric.value}</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 h-full flex flex-col justify-center hover:border-white/10 transition-colors">
                    <div className="mb-10">
                      <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">The Challenge</h3>
                      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">{project.challenges}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">The Solution</h3>
                      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">{project.solutions}</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
