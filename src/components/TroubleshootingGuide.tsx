"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  Terminal,
  KeyRound,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";

interface EdgeCase {
  id: number;
  title: string;
  category: "CLI Safety" | "Database Resilience" | "AI Engine" | "Terminal UX";
  problem: string;
  solution: string;
}

export default function TroubleshootingGuide() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const edgeCases: EdgeCase[] = [
    {
      id: 1,
      title: "Option Parsing Safety (Commander Flags)",
      category: "CLI Safety",
      problem: "Commander.js options with complex defaults previously passed unexpected object constructors when options like --server-url were omitted.",
      solution: "Configured clean option flags with explicit fallback resolution in src/lib/server-url.js, ensuring safe defaults whether running in production or locally.",
    },
    {
      id: 2,
      title: "Offline & Client-Only DB Resilience",
      category: "Database Resilience",
      problem: "End users running the CLI globally do not have a local DATABASE_URL environment variable, which could cause Prisma Client connection failures.",
      solution: "Implemented an active proxy layer in src/lib/db.js that gracefully bypasses local database initialization for end users while preserving remote cloud persistence.",
    },
    {
      id: 3,
      title: "Multi-Model Fallback on Groq Rate Limits (429)",
      category: "AI Engine",
      problem: "High token generation loads or quota spikes on openai/gpt-oss-120b could cause stream interruptions.",
      solution: "Engineered an automatic fallback handler in AIService that detects 429 rate limit errors and seamlessly replays the prompt through openai/gpt-oss-20b without losing user context.",
    },
    {
      id: 4,
      title: "ANSI Table Formatting & Text Wrapping",
      category: "Terminal UX",
      problem: "Standard ASCII grid tables wrapped awkwardly on narrow terminal windows, splitting words and breaking layouts.",
      solution: "Created convertTablesToLists() in src/cli/ui/markdown.js to automatically convert Markdown tables into responsive bullet lists (• **Key**: Value).",
    },
  ];

  const categories = ["All", "CLI Safety", "Database Resilience", "AI Engine", "Terminal UX"];

  const filteredCases = selectedCategory === "All"
    ? edgeCases
    : edgeCases.filter((c) => c.category === selectedCategory);

  return (
    <section id="edge-cases" className="py-24 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#ff5f5f]/30 text-[#ff8080] text-xs font-mono">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Engineering Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Troubleshooting & Solved Edge Cases
          </h2>
          <p className="text-[#94a3b8] text-base">
            Hardened for zero-crash execution across any machine and network condition.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#e8b339] text-black font-bold shadow glow-amber"
                  : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredCases.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl border border-[#1e273b] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#0e1424] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-[#161f30] text-[11px] font-mono text-[#e8b339] flex items-center justify-center font-bold">
                      {item.id}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">{item.title}</h3>
                      <span className="text-[10px] font-mono text-[#808a9d]">{item.category}</span>
                    </div>
                  </div>

                  <div className="text-[#808a9d]">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 pt-0 border-t border-[#182133] bg-[#090d16] space-y-4 text-xs sm:text-sm">
                    {/* Problem */}
                    <div className="space-y-1">
                      <div className="text-[#ff5f5f] font-mono font-semibold text-xs flex items-center gap-1.5">
                        <span>⚠ Problem & Root Cause:</span>
                      </div>
                      <p className="text-[#94a3b8] leading-relaxed pl-4 border-l border-[#ff5f5f]/40">
                        {item.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-1">
                      <div className="text-[#5fd787] font-mono font-semibold text-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Production Solution:</span>
                      </div>
                      <p className="text-[#e2e8f0] leading-relaxed pl-4 border-l border-[#5fd787]/40">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
