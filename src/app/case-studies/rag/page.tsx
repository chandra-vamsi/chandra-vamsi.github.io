"use client";

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RAGCaseStudy() {
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
              LangChain RAG Assistant <br />
              <span className="text-gray-400">Making sense of internal documentation</span>
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-400 uppercase tracking-widest">
              <span>Python</span>
              <span>•</span>
              <span>LangChain</span>
              <span>•</span>
              <span>ChromaDB</span>
            </div>
          </div>

          <div className="space-y-16 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">The Goal</h2>
              <p>
                The goal of this project was to build a robust Retrieval-Augmented Generation (RAG) pipeline capable of querying an extensive internal knowledge base. I needed a system that could parse and ingest over 500,000 text chunks from assorted technical manuals and PDFs, providing fast, context-aware answers to user queries without hallucinating.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">How I Built It</h2>
              <p className="mb-6">
                I built the ingestion pipeline using LangChain to parse and recursively chunk the documents. For the vector representations, I used advanced open-source Hugging Face embeddings to capture nuanced semantic meaning, storing the resulting high-dimensional vectors in a local ChromaDB instance for fast retrieval.
              </p>
              <p>
                A major part of the development involved experimenting with various open-source LLMs to find the right balance of speed and accuracy. After benchmarking several models locally, I settled on utilizing a Llama 70B-class model served via the blazing-fast Groq API. This provided the necessary reasoning capabilities while keeping response latencies remarkably low.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">500K+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Vector Chunks Indexed</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">Llama + Groq</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Inference Stack</div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Challenges & Learnings</h2>
              <p className="mb-6">
                One significant challenge was managing the context window and preventing the LLM from hallucinating when the vector search returned tangentially related chunks. I had to heavily iterate on prompt engineering to enforce strict adherence to the provided context, instructing the model to explicitly state when it lacked sufficient information.
              </p>
              <p>
                Additionally, standardizing the chunking strategy was crucial. Switching to a RecursiveCharacterTextSplitter with careful overlap settings ensured that semantic context wasn't arbitrarily severed across paragraph boundaries, noticeably improving the recall quality from ChromaDB.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Outcome</h2>
              <p>
                The resulting RAG pipeline operates efficiently as an internal QA tool. By offloading inference to the Groq API and utilizing highly optimized Hugging Face embeddings locally, the system delivers highly accurate citations in under a second, serving as a powerful and scalable blueprint for enterprise document retrieval.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
