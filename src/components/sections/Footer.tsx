"use client";

import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-black relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">
          &copy; {new Date().getFullYear()} Chandra Vamsi Telugu.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full hover:bg-white/5 text-gray-500 hover:text-white transition-colors group flex items-center justify-center"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
