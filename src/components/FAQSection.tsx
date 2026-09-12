"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "Beginner" | "Setup" | "AI & Tools";
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "Beginner",
      question: "What is Lumina CLI in simple terms?",
      answer:
        "Lumina is an AI-powered coding companion that lives directly in your computer's terminal. Instead of copying and pasting code between a web browser and your editor, you can chat with AI, search docs, run Python/JS code snippets, and even scaffold full multi-file web applications directly from your command line.",
    },
    {
      category: "Beginner",
      question: "Do I need to install anything to try it out?",
      answer:
        "No installation is required! As long as you have Node.js (v18+) installed on your PC or Mac, you can simply open your terminal and run: `npx @piyushkumariiitj/lumina-cli@latest wakeup`. It will launch immediately.",
    },
    {
      category: "Setup",
      question: "How does the 'lumina login' GitHub authorization work?",
      answer:
        "Lumina uses RFC 8628 Device Authorization (similar to GitHub CLI or Netflix TV login). When you type `lumina login`, the terminal displays an 8-character code (like ABCD-1234) and opens your browser. You sign in with GitHub, click 'Approve Device', and your terminal automatically logs in without you ever needing to type passwords into the terminal.",
    },
    {
      category: "AI & Tools",
      question: "Do I need to provide or enter an API key?",
      answer:
        "No! Lumina comes with built-in AI inference right out of the box. You never have to create, copy, or enter any API keys manually — simply log in with GitHub via `lumina login` and start coding with instant Groq LPU sub-second reasoning.",
    },
    {
      category: "AI & Tools",
      question: "Where does Autonomous Agent Mode save my generated projects?",
      answer:
        "When you ask Lumina's Autonomous Agent to build an application (e.g. 'Build a React dashboard with Tailwind'), Lumina creates a folder in your current working directory and writes all complete source code files directly to your hard drive, followed by copy-pasteable commands to run it.",
    },
    {
      category: "Beginner",
      question: "How does Lumina remember my past conversations?",
      answer:
        "Lumina connects to a Neon PostgreSQL database via Prisma ORM. Your conversation history, titles, and messages are securely stored so you can pick up right where you left off the next time you open your terminal.",
    },
    {
      category: "Setup",
      question: "How do I exit or clear the screen during an AI session?",
      answer:
        "Inside any active Lumina chat session, type `/clear` to wipe the terminal view while preserving conversation memory, or type `exit` (or `quit`) to return to your standard terminal prompt.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#090d16] relative border-t border-[#161d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#e8b339]/30 text-[#e8b339] text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Beginner Friendly Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#94a3b8] text-base">
            Everything a beginner needs to know to get started with Lumina CLI smoothly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[#1e273b] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#0e1424] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#161f30] text-[#e8b339] border border-[#e8b339]/30">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="text-[#808a9d]">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#e8b339]" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 pt-0 border-t border-[#182133] bg-[#090d16] text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Beginner Tip Callout Box */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#141b2b] to-[#121824] border border-[#e8b339]/30 flex flex-col sm:flex-row items-center justify-between gap-4 glow-amber">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#e8b339]/20 border border-[#e8b339]/40 flex items-center justify-center text-[#e8b339] shrink-0 font-bold font-mono">
              ✦
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ready for your first run?</h4>
              <p className="text-xs text-[#94a3b8]">
                Open any terminal window and run <code className="text-[#e8b339] bg-[#080b12] px-1.5 py-0.5 rounded">npx @piyushkumariiitj/lumina-cli@latest wakeup</code>
              </p>
            </div>
          </div>

          <a
            href="#terminal"
            className="px-4 py-2 rounded-xl bg-[#e8b339] text-black font-bold text-xs hover:brightness-110 shrink-0 transition-all cursor-pointer"
          >
            Try Terminal Sandbox
          </a>
        </div>
      </div>
    </section>
  );
}
