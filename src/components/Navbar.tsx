"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
    >
      <div className={`flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-full border ${
        scrolled 
          ? 'bg-black/70 backdrop-blur-2xl border-cyan-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.15)]' 
          : 'bg-white/[0.04] backdrop-blur-md border-white/10'
      }`}>
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00f0ff]" />
          <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            CV
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-xs font-medium text-gray-300 hover:text-cyan-300 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#contact" className="text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300">
            Contact
          </Link>
        </div>

        <button className="md:hidden text-gray-300 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-4 h-4 text-cyan-400" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-4 flex flex-col gap-2 md:hidden shadow-[0_20px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(0,240,255,0.2)] mt-2"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-300 hover:text-cyan-300 transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
                {link.name}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 rounded-lg hover:scale-[1.02] transition-all mt-2 text-center">
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
