"use client";

import React, { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  ArrowRight,
  Play,
  FolderGit2,
} from "lucide-react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const command = "npm install -g @piyushkumariiitj/lumina-cli";

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Minimal Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111624] border border-[#1e2638] text-xs font-mono text-[#cbd5e1]">
          <span className="text-[#e8b339]">✦</span>
          <span>Lumina CLI v1.0.4</span>
          <span className="text-[#64748b]">•</span>
          <span className="text-[#5fd787]">Groq LPU Engine</span>
        </div>

        {/* Minimal High-Impact Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            The autonomous AI software engineer in your terminal.
          </h1>

          <p className="text-base sm:text-lg text-[#808a9d] max-w-2xl mx-auto font-normal leading-relaxed">
            Build, analyze, debug, and architect multi-file projects directly from your command line. Equipped with persistent PostgreSQL memory and 7 live developer tools.
          </p>
        </div>

        {/* Minimal Command Bar */}
        <div className="max-w-xl mx-auto">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-[#090d16] border border-[#1e2638] flex items-center justify-between gap-3 shadow-xl">
            <div className="flex items-center gap-3 overflow-x-auto pl-2 font-mono text-xs sm:text-sm">
              <span className="text-[#5fd75f] font-bold select-none">$</span>
              <span className="text-white whitespace-nowrap">{command}</span>
            </div>

            <button
              onClick={copyCommand}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141b2b] hover:bg-[#1a2337] border border-[#222c42] text-xs font-mono text-[#cbd5e1] hover:text-white transition-all shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#5fd787]" />
                  <span className="text-[#5fd787]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#e8b339]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-[#64748b] font-mono mt-2.5">
            Zero configuration • Connects to cloud backend automatically
          </p>
        </div>

        {/* Minimal Clean CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#terminal"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-[#e2e8f0] transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Interactive Terminal Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#developer-guide"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#101522] hover:bg-[#161c2c] border border-[#1f283d] text-[#cbd5e1] hover:text-white text-xs font-medium transition-all"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#808a9d]" />
            <span>Developer Guide</span>
          </a>
        </div>

        {/* Minimal Highlights Row */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-[#151c2c] text-center">
          <div>
            <div className="text-lg font-bold font-mono text-white">0.3s</div>
            <div className="text-xs text-[#808a9d]">Groq Inference</div>
          </div>
          <div>
            <div className="text-lg font-bold font-mono text-white">PostgreSQL</div>
            <div className="text-xs text-[#808a9d]">Persistent Memory</div>
          </div>
          <div>
            <div className="text-lg font-bold font-mono text-white">7 Tools</div>
            <div className="text-xs text-[#808a9d]">Local Sandboxing</div>
          </div>
          <div>
            <div className="text-lg font-bold font-mono text-white">RFC 8628</div>
            <div className="text-xs text-[#808a9d]">Device Auth</div>
          </div>
        </div>
      </div>
    </section>
  );
}
