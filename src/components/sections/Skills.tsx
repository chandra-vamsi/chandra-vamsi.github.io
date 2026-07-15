"use client";

import { motion } from 'framer-motion';

export function Skills() {
  const categories = [
    { title: "Programming", skills: "Python • SQL • Flask • Streamlit" },
    { title: "AI & ML", skills: "Machine Learning • Deep Learning • Gen AI • LangChain • Prompt Engineering • RAG • NLP" },
    { title: "Data", skills: "ChromaDB • Vector Databases • Embeddings • Pandas • NumPy • Power BI • PostgreSQL" },
    { title: "Cloud & DevOps", skills: "Azure • REST APIs • Git • GitHub • Docker" },
  ];

  return (
    <section id="skills" className="relative py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Capabilities</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between min-h-[200px]"
            >
              <h3 className="text-xl font-medium text-white mb-8">{category.title}</h3>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed tracking-wide">
                {category.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
