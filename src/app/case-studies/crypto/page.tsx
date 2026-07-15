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
                I've always been interested in time-series forecasting, so I set out to build a robust pipeline that could predict short-term cryptocurrency price movements over a 15-minute window. I wanted a production-like setup that handled live data ingestion, storage, and model inference seamlessly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">How I Built It</h2>
              <p className="mb-6">
                I built a data ingestion service using Python that makes direct REST and WebSocket calls to the Binance API to fetch real-time order book snapshots and historical k-line data. To ensure data persistence and reliable querying, the ingested data was cleaned with Pandas and stored directly into a PostgreSQL database.
              </p>
              <p>
                To keep the architecture clean and portable, the entire stack—including the database, data fetcher, and inference engine—was containerized using Docker. For the modeling phase, I benchmarked several machine learning algorithms including Random Forests, ARIMA, and Gradient Boosting before finding that a deep LSTM (Long Short-Term Memory) neural network in TensorFlow performed the best on this sequential data.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">Docker + Postgres</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Data Pipeline Stack</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">LSTM Network</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Winning Algorithm</div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Challenges & Learnings</h2>
              <p className="mb-6">
                The hardest part was definitely the data noise. Crypto markets are extremely volatile, and my initial baseline models were basically just predicting the previous minute's price instead of actually forecasting. Evaluating different algorithms proved that simple linear models couldn't capture the temporal dependencies.
              </p>
              <p>
                To improve the LSTM's performance, I learned how to engineer better features—like adding moving averages and RSI (Relative Strength Index) to the dataset before passing it into the neural network. This helped the model pick up on slightly better signals instead of just guessing randomly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Outcome</h2>
              <p>
                While the model isn't going to make me a millionaire, building this end-to-end pipeline was an incredible learning experience. I gained practical skills in orchestrating microservices with Docker, managing time-series data in PostgreSQL, integrating with the Binance API, and designing deep learning models in TensorFlow.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
