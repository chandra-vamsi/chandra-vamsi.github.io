"use client";

import { motion } from "framer-motion";

export function TechMarquee() {
  const marqueeItems = [
    "Python", "LangChain", "TensorFlow", "Pandas", "PostgreSQL", 
    "Docker", "Next.js", "React", "TypeScript", "FastAPI",
    "OpenAI API", "Groq API", "Git", "Linux"
  ];

  // Double the items so it loops seamlessly
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative w-full py-8 md:py-12 border-y border-white/10 bg-white/[0.02] overflow-hidden flex items-center">
      {/* Left/Right gradients to fade out the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust this for scrolling speed
        }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 md:mx-12">
            <span className="text-xl md:text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              {item}
            </span>
            <span className="ml-12 md:ml-24 w-2 h-2 rounded-full bg-white/20" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
