"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookMarked, Activity, GitCommit } from 'lucide-react';
import Link from 'next/link';

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
    <section className="relative py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Open Source</h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl">
            Real-time GitHub activity and open-source contributions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Main Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 p-10 md:p-16 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Github className="w-96 h-96" />
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-8 mb-16">
              <div>
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                  <BookMarked className="w-4 h-4" /> Repositories
                </div>
                <div className="text-6xl md:text-8xl font-light text-white tracking-tighter">
                  {loading ? "-" : stats.repos}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                  <Star className="w-4 h-4" /> Total Stars
                </div>
                <div className="text-6xl md:text-8xl font-light text-white tracking-tighter">
                  {loading ? "-" : stats.stars}
                </div>
              </div>
            </div>

            <Link 
              href="https://github.com/chandra-vamsi" 
              target="_blank"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors self-start"
            >
              <Github className="w-5 h-5" /> Follow chandra-vamsi
            </Link>
          </motion.div>

          {/* Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                <GitFork className="w-4 h-4" /> Forks
              </div>
              <div className="text-5xl font-light text-white tracking-tighter">
                {loading ? "-" : stats.forks}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center overflow-hidden relative"
            >
              {/* Fake contribution graph decoration */}
              <div className="absolute inset-0 opacity-10 flex flex-wrap gap-1 p-4 pointer-events-none">
                {[...Array(60)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-sm ${ (i % 3 === 0 || i % 7 === 0 || i % 11 === 0) ? 'bg-white' : 'bg-white/20'}`} />
                ))}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                  <Activity className="w-4 h-4" /> Activity
                </div>
                <div className="text-xl font-medium text-white mb-2">High Committer</div>
                <p className="text-sm text-gray-500 font-light">Consistent contributions to open source AI repositories.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
