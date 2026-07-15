"use client";

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CryptoCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vw] max-h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2)_0%,transparent_70%)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-16">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
              Crypto Analytics AI <br />
              <span className="text-gray-400">Predicting short-term price trends</span>
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-400 uppercase tracking-widest">
              <span>TensorFlow</span>
              <span>•</span>
              <span>Pandas</span>
              <span>•</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="space-y-16 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">The Goal</h2>
              <p>
                I've always been interested in time-series forecasting, so I decided to build a model that attempts to predict short-term cryptocurrency price movements (like Bitcoin and Ethereum) over a 15-minute window. It was mostly a learning exercise to get more comfortable with TensorFlow and handling sequential data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">How I Built It</h2>
              <p className="mb-6">
                I wrote a Python script to fetch historical price data and order book snapshots from public crypto exchange APIs. After cleaning the data with Pandas and scaling it, I built an LSTM (Long Short-Term Memory) neural network in TensorFlow. 
              </p>
              <p>
                LSTMs are great for this kind of data because they can "remember" patterns from previous time steps. I trained the model on a few months of historical minute-by-minute data to predict whether the price would go up or down in the next 15 minutes.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">LSTM</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Model Architecture</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">Python</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Data Pipeline</div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Challenges & Learnings</h2>
              <p className="mb-6">
                The hardest part was definitely the data noise. Crypto markets are extremely volatile, and my initial models were basically just predicting the previous minute's price instead of actually forecasting. 
              </p>
              <p>
                To improve it, I learned how to engineer better features—like adding moving averages and RSI (Relative Strength Index) to the dataset before passing it into the neural network. This helped the model pick up on slightly better signals instead of just guessing randomly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Outcome</h2>
              <p>
                While the model isn't going to make me a millionaire (it gets it right a bit better than a coin flip), building it taught me a huge amount about data preprocessing, time-series analysis, and designing deep learning models in TensorFlow.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
