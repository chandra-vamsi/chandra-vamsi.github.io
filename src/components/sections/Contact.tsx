"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-t border-white/5 bg-black">
      {/* Background Aurora / Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_60%)] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h2 className="text-[15vw] sm:text-[10rem] lg:text-[12rem] font-bold tracking-tighter leading-[0.85] mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-black/20">
            LET'S <br/> BUILD.
          </h2>
          
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-16">
            Something Intelligent.
          </h3>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="mailto:chandravamsi.t@gmail.com" className="inline-flex items-center gap-3 px-10 py-6 bg-white text-black text-xl font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Email Me
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="tel:+917780140364" className="inline-flex items-center gap-3 px-10 py-6 bg-white/5 border border-white/10 text-white text-xl font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              +91 7780140364
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform text-white/50" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
