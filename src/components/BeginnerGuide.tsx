"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Terminal,
  KeyRound,
  Rocket,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Code2,
  BookOpen,
  Laptop,
  Smile,
  Copy,
  Check,
  ShieldCheck,
  Cloud,
} from "lucide-react";

export default function BeginnerGuide() {
  const [copied, setCopied] = useState(false);

  const copyQuickStart = () => {
    navigator.clipboard.writeText("npm install -g @piyushkumariiitj/lumina-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      stepNumber: "1",
      title: "Install Globally via npm",
      badge: "One Command",
      description: "Open your terminal on macOS, Linux, or Windows and install Lumina CLI globally:",
      code: "npm install -g @piyushkumariiitj/lumina-cli",
      tip: "Or run instantly without installing: npx @piyushkumariiitj/lumina-cli wakeup",
    },
    {
      stepNumber: "2",
      title: "Sign In with GitHub (RFC 8628)",
      badge: "1-Click Approval",
      description: "Run 'lumina login'. It displays a code and opens your browser for one-click GitHub authorization.",
      code: "$ lumina login\nCode: ABCD-1234 ➜ Approved! ✔",
      tip: "Secure browser-based approval — no passwords stored in your console!",
    },
    {
      stepNumber: "3",
      title: "Launch Interactive Companion",
      badge: "Instant AI",
      description: "Run 'lumina wakeup' to open the interactive capability selector (Chat, Tools, or Agent).",
      code: "$ lumina wakeup\n? Select: 💬 Chat | ⚡ Tools | 🤖 Agent",
      tip: "Start asking questions, inspecting code, or scaffolding multi-file apps.",
    },
  ];

  const jargonCards = [
    {
      term: "Zero Client-Side Secrets",
      simpleExplanation:
        "You do not need to configure databases, API keys, or server ports. Lumina CLI connects securely to production cloud infrastructure right out of the box.",
    },
    {
      term: "RFC 8628 Device Flow",
      simpleExplanation:
        "The standard protocol used by tools like GitHub CLI and Netflix. The terminal shows a one-time code and lets you approve it in your normal browser window.",
    },
    {
      term: "Autonomous Full-Stack Agent",
      simpleExplanation:
        "Instead of just printing code on screen, Agent Mode designs the architecture, creates the folder hierarchy, and writes actual source files directly onto your disk.",
    },
    {
      term: "Local Tool Sandboxing",
      simpleExplanation:
        "When Lumina inspects Git status, reads project files, or tests Python/JS snippets, it runs them safely on your local machine with strict sandboxing.",
    },
  ];

  return (
    <section id="quickstart" className="py-20 bg-[#080c15] relative border-b border-[#161d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#162a20] border border-[#5fd787]/40 text-[#5fd787] text-xs font-mono font-semibold glow-emerald">
            <Smile className="w-3.5 h-3.5" />
            <span>End-User Quick Start</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Up & Running in <span className="text-gradient-amber">3 Simple Steps</span>
          </h2>
          <p className="text-[#94a3b8] text-base leading-relaxed">
            Everything you need to know to get Lumina CLI working on your machine in under 60 seconds.
          </p>
        </div>

        {/* 3 Step Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-[#1e273b] hover:border-[#e8b339]/50 flex flex-col justify-between relative group transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#e8b339] text-black font-extrabold font-mono flex items-center justify-center text-base shadow-md">
                    {s.stepNumber}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#151c2c] text-[#e8b339] border border-[#e8b339]/30">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {s.description}
                </p>

                {/* Micro Code Box */}
                <div className="p-3 rounded-xl bg-[#090d16] border border-[#1b2336] font-mono text-xs text-[#cbd5e1] overflow-x-auto whitespace-pre">
                  {s.code}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#182133] flex items-center gap-2 text-[11px] text-[#5fd787]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{s.tip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Old Way vs The Lumina Way Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {/* The Old Way */}
          <div className="p-6 rounded-2xl bg-[#141014] border border-[#ff5f5f]/30 space-y-4">
            <div className="flex items-center gap-2 text-[#ff5f5f] font-bold text-sm">
              <span className="text-base">❌</span>
              <span>The Old, Disconnected Way</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[#94a3b8]">
              <li className="flex items-start gap-2">
                <span className="text-[#ff5f5f]">•</span>
                <span>Copying and pasting code between browser windows and text editors continuously</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5f5f]">•</span>
                <span>Manually creating folders and copy-pasting 10 separate files</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5f5f]">•</span>
                <span>AI hallucinating outdated APIs without live documentation inspection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5f5f]">•</span>
                <span>Losing conversational memory the moment you close your browser tab</span>
              </li>
            </ul>
          </div>

          {/* The Lumina Way */}
          <div className="p-6 rounded-2xl bg-[#0d1818] border border-[#5fd787]/40 space-y-4 glow-emerald">
            <div className="flex items-center gap-2 text-[#5fd787] font-bold text-sm">
              <span className="text-base">✅</span>
              <span>The Lumina CLI Way</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[#e2e8f0]">
              <li className="flex items-start gap-2">
                <span className="text-[#5fd787]">✔</span>
                <span>Lives right in your terminal alongside your active project workspace</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5fd787]">✔</span>
                <span>Autonomous Agent scaffolds entire multi-file project directories to disk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5fd787]">✔</span>
                <span>Live Google search and code execution verify solutions in real time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5fd787]">✔</span>
                <span>Neon PostgreSQL database persists multi-turn history seamlessly</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Plain English Terminology Guide */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-bold text-white">Lumina Architecture in Simple Terms</h3>
            <p className="text-xs text-[#808a9d]">Key concepts made clear for both beginners and experienced engineers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jargonCards.map((j, idx) => (
              <div key={idx} className="glass-card p-5 rounded-xl border border-[#1b2336] space-y-2">
                <h4 className="text-sm font-bold text-[#e8b339]">{j.term}</h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">{j.simpleExplanation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Launch Action Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={copyQuickStart}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e8b339] to-[#f59e0b] text-[#07090e] font-extrabold text-sm hover:brightness-110 glow-amber transition-all cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>npm install -g @piyushkumariiitj/lumina-cli</span>
            {copied ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4 text-black" />}
          </button>
        </div>
      </div>
    </section>
  );
}
