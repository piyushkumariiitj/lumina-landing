"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Wrench,
  Bot,
  Database,
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2,
  FileCode2,
  ShieldCheck,
  Cpu,
  ArrowRight,
} from "lucide-react";

export default function OperatingModes() {
  const [activeTab, setActiveTab] = useState<"chat" | "tools" | "agent">("chat");

  return (
    <section id="modes" className="py-24 bg-[#090d16] relative border-y border-[#151c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#af87ff]/30 text-[#af87ff] text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Three Operating Paradigms</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Every Engineering Task
          </h2>
          <p className="text-[#94a3b8] text-base">
            Switch effortlessly between persistent conversational reasoning, real-time developer tool execution, and autonomous multi-file application scaffolding.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mode 1: Chat Mode */}
          <div
            className={`glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              activeTab === "chat" ? "border-[#af87ff] glow-violet scale-[1.02]" : "hover:border-[#af87ff]/50"
            }`}
            onClick={() => setActiveTab("chat")}
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#af87ff]/15 border border-[#af87ff]/40 flex items-center justify-center text-[#af87ff]">
                <MessageSquare className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#1e1a30] text-[#af87ff] border border-[#af87ff]/30">
                    Mode 1
                  </span>
                  <span className="text-xs text-[#64748b]">PostgreSQL Memory</span>
                </div>
                <h3 className="text-2xl font-bold text-white">💬 Chat Mode</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  Interactive multi-turn conversational AI pair programmer. Restores previous session context seamlessly from Neon PostgreSQL.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-[#1c2436] text-xs text-[#cbd5e1]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#af87ff]" />
                  <span>Automatic conversation session restoration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#af87ff]" />
                  <span>Real-time ANSI Markdown syntax highlighting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#af87ff]" />
                  <span>Responsive list converter for table wrapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#af87ff]" />
                  <span>In-chat shortcuts: <code className="text-[#af87ff]">/clear</code>, <code className="text-[#af87ff]">exit</code></span>
                </div>
              </div>
            </div>

            {/* Micro Terminal Snippet */}
            <div className="mt-8 p-3.5 rounded-xl bg-[#080b12] border border-[#1b2336] font-mono text-[11px] text-[#94a3b8] space-y-1.5">
              <div className="text-[#5fd75f]">❯ lumina wakeup &gt; 💬 Chat</div>
              <div className="text-[#af87ff]">✦ Restored session: "Express Auth Config"</div>
              <div className="text-[#64748b]">Prisma DB query time: 42ms</div>
            </div>
          </div>

          {/* Mode 2: Tool Calling Mode */}
          <div
            className={`glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              activeTab === "tools" ? "border-[#5fafd7] glow-cyan scale-[1.02]" : "hover:border-[#5fafd7]/50"
            }`}
            onClick={() => setActiveTab("tools")}
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#5fafd7]/15 border border-[#5fafd7]/40 flex items-center justify-center text-[#5fafd7]">
                <Wrench className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#132333] text-[#5fafd7] border border-[#5fafd7]/30">
                    Mode 2
                  </span>
                  <span className="text-xs text-[#64748b]">7 Real-Time Tools</span>
                </div>
                <h3 className="text-2xl font-bold text-white">⚡ Tool Calling Mode</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  Arms the LLM with live Internet access, sandboxed code execution, workspace file inspection, and git diagnostics.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-[#1c2436] text-xs text-[#cbd5e1]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5fafd7]" />
                  <span>Live Google search for new documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5fafd7]" />
                  <span>Sandboxed JavaScript & Python runner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5fafd7]" />
                  <span>Git repository inspector & diff analyzer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5fafd7]" />
                  <span>Polished visual cards (no raw JSON dumps)</span>
                </div>
              </div>
            </div>

            {/* Micro Terminal Snippet */}
            <div className="mt-8 p-3.5 rounded-xl bg-[#080b12] border border-[#1b2336] font-mono text-[11px] text-[#94a3b8] space-y-1.5">
              <div className="text-[#5fafd7]">⚡ Searching web: "Better Auth RFC8628"</div>
              <div className="text-[#5fd787]">✔ Found 4 active doc sources</div>
              <div className="text-[#cbd5e1]">✦ Synthesizing real-time answer...</div>
            </div>
          </div>

          {/* Mode 3: Autonomous Agent Mode */}
          <div
            className={`glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              activeTab === "agent" ? "border-[#e8b339] glow-amber scale-[1.02]" : "hover:border-[#e8b339]/50"
            }`}
            onClick={() => setActiveTab("agent")}
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#e8b339]/15 border border-[#e8b339]/40 flex items-center justify-center text-[#e8b339]">
                <Bot className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#292212] text-[#e8b339] border border-[#e8b339]/30">
                    Mode 3
                  </span>
                  <span className="text-xs text-[#64748b]">Disk Scaffolding</span>
                </div>
                <h3 className="text-2xl font-bold text-white">🤖 Autonomous Agent</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  Generates production-grade multi-file applications from a single prompt and automatically creates directory trees on your disk.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-[#1c2436] text-xs text-[#cbd5e1]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e8b339]" />
                  <span>Fullstack multi-file scaffolding to disk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e8b339]" />
                  <span>Hidden reasoning token budget optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e8b339]" />
                  <span>Zod ApplicationSchema JSON validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e8b339]" />
                  <span>ASCII file trees & copyable launch commands</span>
                </div>
              </div>
            </div>

            {/* Micro Terminal Snippet */}
            <div className="mt-8 p-3.5 rounded-xl bg-[#080b12] border border-[#1b2336] font-mono text-[11px] text-[#94a3b8] space-y-1.5">
              <div className="text-[#e8b339]">✦ Autonomous Architect Generated:</div>
              <div className="text-[#cbd5e1]">📁 portfolio/ (8 files created)</div>
              <div className="text-[#5fd787]">✔ Scaffolding complete in 3.4s</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
