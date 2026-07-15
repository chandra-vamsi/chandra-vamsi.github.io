"use client";

import { motion } from 'framer-motion';

export function Achievements() {
  const stats = [
    { label: "Projects Built", value: "20+" },
    { label: "Repositories", value: "35+" },
    { label: "Years Experience", value: "3+" },
    { label: "Technologies", value: "15+" },
  ];

  return (
    <section className="relative py-20 border-y border-white/10 my-20">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10" />
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              {stat.value}
            </div>
            <div className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
