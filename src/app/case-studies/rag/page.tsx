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
                The goal of this project was to build a Retrieval-Augmented Generation (RAG) assistant that could read through a small library of around 500 internal PDFs and technical manuals, and answer natural language questions about them. I wanted to see if I could build something that would save time searching through folders of documents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">How I Built It</h2>
              <p className="mb-6">
                I started by using LangChain to parse the PDFs and chunk the text. I chose ChromaDB as the vector database because it was easy to set up locally and worked great for my dataset size. 
              </p>
              <p>
                When a user asks a question, the app converts the query into a vector embedding, searches ChromaDB for the top 5 most relevant document chunks, and passes those chunks into the OpenAI API alongside the original prompt to generate an answer.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">~500</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Documents Processed</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <div className="text-4xl text-white font-light mb-2">Reliable</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Citations & Answers</div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Challenges & Learnings</h2>
              <p className="mb-6">
                One of the biggest issues I ran into was that the LLM would occasionally hallucinate answers if the vector database returned bad matches. To fix this, I tweaked the prompt engineering to strictly tell the model: "If the answer is not in the provided context, say you don't know."
              </p>
              <p>
                I also realized that naive chunking (just splitting by 1000 characters) broke paragraphs in half, which hurt the search quality. I ended up implementing a RecursiveCharacterTextSplitter in LangChain to keep sentences and paragraphs intact, which noticeably improved the results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Outcome</h2>
              <p>
                The final application works well as an internal tool. It takes about a second to return an answer, and the answers are fairly accurate as long as the data exists in the PDFs. It was a great learning experience in connecting vector databases with LLMs!
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
