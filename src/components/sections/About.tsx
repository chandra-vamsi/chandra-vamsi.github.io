"use client";

import { motion } from 'framer-motion';

export function About() {
  const narrative = [
    { text: "3+ Years Experience", highlight: true },
    { text: "Production AI Systems", highlight: true },
    { text: "Python", highlight: false },
    { text: "Generative AI", highlight: false },
    { text: "Machine Learning", highlight: false },
    { text: "RAG", highlight: true },
    { text: "LLMs", highlight: true },
    { text: "LangChain", highlight: false },
    { text: "REST APIs", highlight: false },
    { text: "Azure", highlight: false },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="relative py-40 md:py-64 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16"
        >
          {narrative.map((word, idx) => (
            <motion.span
              key={idx}
              variants={item}
              className={`text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter leading-none ${
                word.highlight ? "text-white" : "text-gray-600"
              }`}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
