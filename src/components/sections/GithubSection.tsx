"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookMarked, Activity, GitCommit, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Card3D } from '@/components/ui/Card3D';

export function GithubSection() {
  const [stats, setStats] = useState({ repos: 0, stars: 0, forks: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const res = await fetch('https://api.github.com/users/chandra-vamsi');
        const data = await res.json();
        
        let totalStars = 0;
        let totalForks = 0;
        
        if (data.public_repos > 0) {
          const reposRes = await fetch('https://api.github.com/users/chandra-vamsi/repos?per_page=100');
          const reposData = await reposRes.json();
          totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
          totalForks = reposData.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);
        }
        
        setStats({
          repos: data.public_repos || 0,
          stars: totalStars,
          forks: totalForks
        });
      } catch (error) {
        console.error("Error fetching GitHub stats", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGithubStats();
  }, []);

  return (
    <section className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* 3D Cyber Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(0,240,255,0.05)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4 text-cyan-400 font-semibold uppercase tracking-widest text-xs">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>3D Open-Source Matrix</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Open Source</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Real-time GitHub activity and open-source contributions across AI & ML ecosystems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Main Stats Card */}
          <div className="md:col-span-8">
            <Card3D depth={20} borderGlow={true} className="h-full">
              <div className="p-10 md:p-16 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col justify-between h-full">
                <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
                  <Github className="w-96 h-96 text-cyan-400" />
                </div>
                
                <div className="relative z-10 grid grid-cols-2 gap-8 mb-16">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                      <BookMarked className="w-4 h-4" /> Repositories
                    </div>
                    <div className="text-6xl md:text-8xl font-light text-white tracking-tighter drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                      {loading ? "-" : stats.repos}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                      <Star className="w-4 h-4" /> Total Stars
                    </div>
                    <div className="text-6xl md:text-8xl font-light text-white tracking-tighter drop-shadow-[0_0_15px_rgba(157,78,221,0.3)]">
                      {loading ? "-" : stats.stars}
                    </div>
                  </div>
                </div>

                <Link 
                  href="https://github.com/chandra-vamsi" 
                  target="_blank"
                  className="relative z-10 inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-bold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 self-start"
                >
                  <Github className="w-5 h-5" /> Follow chandra-vamsi
                </Link>
              </div>
            </Card3D>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Card3D depth={15} borderGlow={true} className="flex-1">
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col justify-center h-full">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <GitFork className="w-4 h-4" /> Forks
                </div>
                <div className="text-5xl font-light text-white tracking-tighter">
                  {loading ? "-" : stats.forks}
                </div>
              </div>
            </Card3D>
            
            <Card3D depth={15} borderGlow={true} className="flex-1">
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col justify-center overflow-hidden relative h-full">
                {/* 3D cyber contribution graph decoration */}
                <div className="absolute inset-0 opacity-20 flex flex-wrap gap-1.5 p-4 pointer-events-none">
                  {[...Array(60)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-sm ${ (i % 3 === 0 || i % 7 === 0) ? 'bg-cyan-400 shadow-[0_0_8px_#00f0ff]' : 'bg-white/10'}`} />
                  ))}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <Activity className="w-4 h-4 animate-pulse" /> Activity
                  </div>
                  <div className="text-xl font-bold text-white mb-2">High Committer</div>
                  <p className="text-sm text-gray-300 font-light">Consistent contributions to open-source AI & LLM repositories.</p>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
