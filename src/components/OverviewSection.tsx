"use client";

import React from "react";
import {
  Sparkles,
  Zap,
  Shield,
  Cpu,
  Database,
  Terminal,
  Layers,
  Palette,
  CheckCircle2,
  Workflow,
} from "lucide-react";

export default function OverviewSection() {
  const capabilities = [
    {
      icon: Database,
      color: "text-[#5fd787]",
      badgeColor: "bg-[#14261c] text-[#5fd787] border-[#5fd787]/30",
      title: "Persistent Conversational Memory",
      description: "Multi-turn AI reasoning where every session, title, role, and message is persisted to Neon PostgreSQL via Prisma ORM and automatically restored.",
    },
    {
      icon: Zap,
      color: "text-[#5fafd7]",
      badgeColor: "bg-[#132333] text-[#5fafd7] border-[#5fafd7]/30",
      title: "Real-Time Tool Calling Suite",
      description: "Live Google search, sandboxed Python/Node.js runner, math formula engine, git repository inspector, and workspace file reader.",
    },
    {
      icon: Workflow,
      color: "text-[#e8b339]",
      badgeColor: "bg-[#292212] text-[#e8b339] border-[#e8b339]/30",
      title: "Autonomous Project Architect",
      description: "Scaffolds complete multi-file projects with disk directory creation, un-truncated file writes, and copyable launch commands.",
    },
    {
      icon: Shield,
      color: "text-[#af87ff]",
      badgeColor: "bg-[#211a33] text-[#af87ff] border-[#af87ff]/30",
      title: "RFC 8628 Device Authorization",
      description: "Enterprise-grade headless terminal login approved through the Next.js web portal via GitHub OAuth 2.0 with polling backoff.",
    },
    {
      icon: Cpu,
      color: "text-[#ff5f5f]",
      badgeColor: "bg-[#2b171c] text-[#ff8080] border-[#ff5f5f]/30",
      title: "Resilient Multi-Model Pipeline",
      description: "Powered by Groq's high-speed LPU inference engine (openai/gpt-oss-120b) with automatic fallback (openai/gpt-oss-20b) on 429 rate limits.",
    },
    {
      icon: Palette,
      color: "text-[#ffaf5f]",
      badgeColor: "bg-[#291e14] text-[#ffaf5f] border-[#ffaf5f]/30",
      title: "Bespoke Cyberpunk TUI Design",
      description: "Curated semantic ANSI palettes, glow badges, custom marked terminal markdown parser, and smart table-to-bullet-list converter.",
    },
  ];

  return (
    <section id="overview" className="py-24 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#e8b339]/30 text-[#e8b339] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Lumina?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Modern Engineering Velocity
          </h2>
          <p className="text-[#94a3b8] text-base">
            Everything you need in an AI software engineering companion — without browser context-switching or hallucinated guesses.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="glass-card p-7 rounded-2xl border border-[#1b2438] hover:border-[#2a3854] space-y-4 hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-[#121828] ${cap.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${cap.badgeColor}`}>
                    Feature 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
