"use client";

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vw] max-h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4)_0%,transparent_70%)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-16">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
              Scaling Enterprise RAG: <br />
              <span className="text-gray-400">Sub-second Latency for 2M+ Documents</span>
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-400 uppercase tracking-widest">
              <span>AI Engineering</span>
              <span>•</span>
              <span>Retrieval-Augmented Generation</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>

          <div className="space-y-16 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">The Challenge</h2>
              <p>
                An enterprise client needed to implement an intelligent search and QA assistant over their vast repository of unstructured data—comprising over 2 million PDFs, technical manuals, and historical records. The existing prototype suffered from hallucination rates above 15% and query latencies exceeding 4 seconds, rendering it unusable for real-time customer support operations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Architecture & Approach</h2>
              <p className="mb-6">
                To solve this, we moved away from a naive single-stage retrieval pipeline. We implemented a hybrid search architecture combining dense vector embeddings (using a fine-tuned embedding model) with sparse keyword search (BM25) to ensure high recall for both semantic queries and exact keyword matches (like part numbers).
              </p>
              <p>
                The retrieval pipeline was orchestrated using a custom LangChain graph. We introduced a re-ranking layer (Cross-Encoder) to order the hybrid results and a strict prompt-engineering schema that enforced citations, reducing hallucinations to near zero.
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">94%</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Accuracy</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">&lt; 800ms</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">P90 Latency</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">2M+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Documents</div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Infrastructure Optimization</h2>
              <p>
                By migrating the vector store to a distributed ChromaDB cluster and leveraging aggressive caching via Redis for semantic similarity hits, we reduced the P90 retrieval latency from 4.2 seconds down to ~780ms. The LLM generation step was optimized by streaming tokens directly to the frontend, vastly improving perceived performance for the end user.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">The Outcome</h2>
              <p>
                The system was successfully deployed to the customer support team, reducing mean-time-to-resolution (MTTR) by 40% and freeing up tier-1 agents to handle complex escalations. The architecture now serves as the foundational AI layer for all internal knowledge retrieval across the organization.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
