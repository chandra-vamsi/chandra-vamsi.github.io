"use client";

import { motion } from 'framer-motion';

export function About() {
  const narrative = [
    { text: "3+ Years Experience", highlight: true, badge: "Tenure" },
    { text: "Production AI Systems", highlight: true, badge: "Focus" },
    { text: "Python", highlight: false, badge: "Core" },
    { text: "Generative AI", highlight: true, badge: "Expertise" },
    { text: "Machine Learning", highlight: false, badge: "Domain" },
    { text: "RAG & Vector DBs", highlight: true, badge: "Architecture" },
    { text: "LLMs & Fine-Tuning", highlight: true, badge: "AI Core" },
    { text: "LangChain", highlight: false, badge: "Framework" },
    { text: "REST APIs & Serving", highlight: false, badge: "Backend" },
    { text: "Azure & Docker", highlight: false, badge: "DevOps" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="relative py-40 md:py-56 flex items-center justify-center overflow-hidden">
      {/* Ambient 3D Cyber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-[radial-gradient(circle,rgba(0,240,255,0.06)_0%,rgba(157,78,221,0.04)_40%,transparent_70%)] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {narrative.map((word, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{
                scale: 1.08,
                y: -8,
                rotateZ: (idx % 2 === 0 ? 1 : -1) * 2,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`group relative px-7 py-5 md:px-10 md:py-6 rounded-3xl border transition-all duration-300 cursor-default backdrop-blur-xl ${
                word.highlight
                  ? "bg-white/[0.06] border-cyan-400/30 shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(0,240,255,0.35)] hover:bg-white/[0.1]"
                  : "bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.05] hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)]"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                  {word.badge}
                </span>
                <span
                  className={`text-2xl md:text-5xl font-extrabold tracking-tight leading-none ${
                    word.highlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {word.text}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
