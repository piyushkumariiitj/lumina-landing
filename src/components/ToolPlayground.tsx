"use client";

import React, { useState } from "react";
import {
  Wrench,
  Globe,
  Code2,
  Calculator,
  FolderSearch,
  GitBranch,
  Link2,
  Activity,
  Play,
  CheckCircle2,
  Sparkles,
  Terminal,
} from "lucide-react";

interface ToolItem {
  id: string;
  name: string;
  tag: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  description: string;
  samplePrompt: string;
  simulatedOutput: {
    status: string;
    details: string[];
    synthesis: string;
  };
}

export default function ToolPlayground() {
  const tools: ToolItem[] = [
    {
      id: "web_search",
      name: "Web & Google Search",
      tag: "web_search",
      icon: Globe,
      color: "text-[#5fafd7]",
      borderColor: "border-[#5fafd7]",
      description: "Searches the live web for technical documentation, new framework releases, and error solutions.",
      samplePrompt: "Search for Prisma 7 PostgreSQL connection pool parameters and SSL requirements.",
      simulatedOutput: {
        status: "⚡ Searching Google Knowledge API: 'prisma 7 postgresql sslmode connection pool'",
        details: [
          "✔ Discovered 4 live documentation sources (prisma.io/docs)",
          "✔ Extracted: sslmode=verify-full requires channel_binding=require on Neon",
          "✔ Extracted: connection_limit default is num_physical_cpus * 2 + 1",
        ],
        synthesis: "Prisma 7 recommends setting `sslmode=verify-full&channel_binding=require` when connecting to serverless PostgreSQL (such as Neon DB).",
      },
    },
    {
      id: "code_execution",
      name: "Sandboxed Code Runner",
      tag: "code_execution",
      icon: Code2,
      color: "text-[#5fd787]",
      borderColor: "border-[#5fd787]",
      description: "Safely executes JavaScript (Node.js) or Python code in an isolated subprocess to test algorithms.",
      samplePrompt: "Run a Python script to compute the first 10 Fibonacci numbers using memoization.",
      simulatedOutput: {
        status: "⚡ Executing isolated Python subprocess (python3 -c '...')",
        details: [
          "✔ Memory limit: 128MB | Timeout: 5000ms",
          "✔ stdout: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]",
          "✔ Exit code: 0 (Execution time: 18ms)",
        ],
        synthesis: "The memoized algorithm executed successfully in 18ms, yielding the sequence: `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`.",
      },
    },
    {
      id: "calculator",
      name: "Math & Formula Engine",
      tag: "calculator",
      icon: Calculator,
      color: "text-[#e8b339]",
      borderColor: "border-[#e8b339]",
      description: "Evaluates mathematical equations, algebraic operations, trigonometry, and logarithms with high precision.",
      samplePrompt: "Calculate Math.sqrt(1024) * 45 / Math.PI + Math.log2(2048)",
      simulatedOutput: {
        status: "⚡ Evaluating mathematical expression in MathJS engine",
        details: [
          "✔ Expression: Math.sqrt(1024) * 45 / Math.PI + Math.log2(2048)",
          "✔ Sub-eval: 32 * 45 / 3.14159265 + 11",
          "✔ Result: 469.349335967",
        ],
        synthesis: "The exact calculated result is **469.3493** (sqrt(1024)×45/π + log₂(2048) = 458.3493 + 11).",
      },
    },
    {
      id: "workspace_reader",
      name: "Workspace File Reader",
      tag: "workspace_reader",
      icon: FolderSearch,
      color: "text-[#af87ff]",
      borderColor: "border-[#af87ff]",
      description: "Reads project source files, configuration files, and package.json to analyze dependencies and code.",
      samplePrompt: "Read package.json and summarize outdated dependencies and scripts.",
      simulatedOutput: {
        status: "⚡ Reading local file: ./package.json",
        details: [
          "✔ File size: 1.4KB (UTF-8)",
          "✔ Dependencies found: express@5.2.1, prisma@7.9.1, @ai-sdk/groq@1.2.0",
          "✔ Scripts available: 'dev', 'build', 'start', 'lint'",
        ],
        synthesis: "Your project is powered by Express 5.2.1 and Prisma 7.9.1 with Groq LPU inference. All dependencies are up to date.",
      },
    },
    {
      id: "git_inspector",
      name: "Git Repository Inspector",
      tag: "git_inspector",
      icon: GitBranch,
      color: "text-[#ffaf5f]",
      borderColor: "border-[#ffaf5f]",
      description: "Inspects uncommitted diffs, active branches, commit logs, and repository health.",
      samplePrompt: "Check git status and summarize my uncommitted changes.",
      simulatedOutput: {
        status: "⚡ Executing 'git status --short' & 'git diff --stat'",
        details: [
          "✔ Branch: main (up to date with origin/main)",
          "✔ Modified: src/cli/chat/chat-with-ai.js (+24, -2)",
          "✔ Untracked: src/cli/ui/components.js",
        ],
        synthesis: "You have 1 modified file (`chat-with-ai.js` adding fallback resilience) and 1 new untracked file (`components.js`).",
      },
    },
    {
      id: "fetch_url",
      name: "Web URL & API Reader",
      tag: "fetch_url",
      icon: Link2,
      color: "text-[#5fafd7]",
      borderColor: "border-[#5fafd7]",
      description: "Fetches live JSON data or raw content from any public HTTP/HTTPS endpoint.",
      samplePrompt: "Fetch https://api.github.com/zen and display GitHub's design philosophy.",
      simulatedOutput: {
        status: "⚡ Fetching HTTP GET https://api.github.com/zen",
        details: [
          "✔ HTTP 200 OK (Response size: 34 bytes)",
          "✔ Content-Type: text/plain; charset=utf-8",
          "✔ Body: 'Favor focus over features.'",
        ],
        synthesis: "GitHub Zen says: *'Favor focus over features.'*",
      },
    },
    {
      id: "system_info",
      name: "System Diagnostics",
      tag: "system_info",
      icon: Activity,
      color: "text-[#ff5f5f]",
      borderColor: "border-[#ff5f5f]",
      description: "Inspects local developer OS architecture, Node.js runtime version, memory usage, and platform specs.",
      samplePrompt: "Check local environment diagnostics and memory consumption.",
      simulatedOutput: {
        status: "⚡ Gathering Node.js process & OS diagnostics",
        details: [
          "✔ OS: win32 (x64) | Node.js: v20.12.0",
          "✔ Heap Used: 42.6 MB / 88.4 MB total",
          "✔ CPU Cores: 8 | Uptime: 4h 12m",
        ],
        synthesis: "System is healthy: Node v20.12.0 on win32 x64 with only 42.6MB heap utilization.",
      },
    },
  ];

  const [selectedTool, setSelectedTool] = useState<ToolItem>(tools[0]);

  return (
    <section id="tools" className="py-24 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#5fafd7]/30 text-[#5fafd7] text-xs font-mono">
            <Wrench className="w-3.5 h-3.5" />
            <span>Built-in Developer Tools</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            7 Real-Time Tools at Lumina's Disposal
          </h2>
          <p className="text-[#94a3b8] text-base">
            Lumina doesn't guess or hallucinate. It executes live tools directly, capturing stdout and synthesizing natural language answers.
          </p>
        </div>

        {/* Interactive Tool Grid & Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left List of Tools (5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isSelected = selectedTool.id === tool.id;

              return (
                <div
                  key={tool.id}
                  onClick={() => setSelectedTool(tool)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? `bg-[#0e1424] ${tool.borderColor} shadow-lg shadow-black/40 scale-[1.01]`
                      : "bg-[#0a0d17] border-[#182133] hover:border-[#2a3754]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-lg bg-[#141b2c] ${tool.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{tool.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#161f33] text-[#808a9d]">
                          {tool.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#808a9d] line-clamp-1 mt-0.5">{tool.description}</p>
                    </div>
                  </div>

                  {isSelected && (
                    <span className={`w-2 h-2 rounded-full ${tool.color.replace('text-', 'bg-')} animate-pulse`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Live Tool Simulator Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#1e273b] shadow-2xl relative">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1c2436] mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-[#161f30] ${selectedTool.color}`}>
                    <selectedTool.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{selectedTool.name}</h4>
                    <p className="text-xs text-[#808a9d]">Active Tool Sandbox & Execution Trace</p>
                  </div>
                </div>

                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#161c2b] text-[#5fd787] border border-[#5fd787]/30">
                  Tool Ready
                </span>
              </div>

              {/* Sample User Prompt */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono text-[#808a9d] uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#e8b339]" />
                  <span>Developer Query</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#090d16] border border-[#1c2436] text-sm text-white font-mono flex items-center gap-2">
                  <span className="text-[#5fd75f] font-bold">❯</span>
                  <span>"{selectedTool.samplePrompt}"</span>
                </div>
              </div>

              {/* Live Tool Execution Trace */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono text-[#5fafd7] uppercase tracking-wider flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Tool Invocation Logs</span>
                </div>

                <div className="p-4 rounded-xl bg-[#080b12] border border-[#1a2337] space-y-2 font-mono text-xs">
                  <div className="text-[#5fafd7] font-semibold">{selectedTool.simulatedOutput.status}</div>
                  <div className="space-y-1 pl-4 border-l-2 border-[#1c263c]">
                    {selectedTool.simulatedOutput.details.map((detail, idx) => (
                      <div key={idx} className="text-[#94a3b8] text-[11px]">
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Natural Language Synthesis Output */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#af87ff] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#af87ff]" />
                  <span>Groq AI Synthesis</span>
                </div>
                <div className="p-4 rounded-xl bg-[#111626] border border-[#af87ff]/30 text-sm text-[#e2e8f0] leading-relaxed">
                  {selectedTool.simulatedOutput.synthesis}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
