"use client";

import React, { useState } from "react";
import {
  Download,
  FolderGit2,
  Terminal,
  Copy,
  Check,
  Sparkles,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function SetupGuide() {
  const [track, setTrack] = useState<"enduser" | "contributor">("enduser");
  const [os, setOs] = useState<"bash" | "powershell">("bash");
  const [activeDevStep, setActiveDevStep] = useState<number>(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const endUserSteps = [
    {
      id: "user-1",
      step: "01",
      title: "Global Install",
      badge: "npm",
      description: "Install the CLI globally to enable the lumina command in any terminal.",
      code: `npm install -g @piyushkumariiitj/lumina-cli\n\n# Verify\nlumina --version`,
    },
    {
      id: "user-2",
      step: "02",
      title: "Authenticate",
      badge: "RFC 8628",
      description: "Get a one-time code and login via GitHub OAuth browser portal.",
      code: `lumina login`,
    },
    {
      id: "user-3",
      step: "03",
      title: "Launch Agent",
      badge: "Interactive TUI",
      description: "Start interactive console for Chat, Tools, and Scaffolding.",
      code: `lumina wakeup`,
    },
  ];

  const contributorSteps = [
    {
      id: "dev-1",
      step: "01",
      shortTitle: "Clone & Install",
      title: "Clone Monorepo & Install Dependencies",
      badge: "Source Setup",
      description: "Clone the repo and install dependencies for Express 5 backend, CLI binary, and Next.js 16 frontend.",
      code: os === "bash"
        ? `# Clone repo\ngit clone https://github.com/piyushkumariiitj/lumina-cli.git\ncd lumina-cli\n\n# Install Server & Client\ncd server && npm install\ncd ../client && npm install`
        : `# PowerShell\ngit clone https://github.com/piyushkumariiitj/lumina-cli.git\ncd lumina-cli\n\ncd server; npm install\ncd ../client; npm install`,
    },
    {
      id: "dev-2",
      step: "02",
      shortTitle: ".env Secrets",
      title: "Configure Server Environment Variables",
      badge: "Local Secrets",
      description: "Create server/.env with your Neon PostgreSQL, Groq API key, Better Auth secrets, and GitHub OAuth keys.",
      code: `PORT=3005
DATABASE_URL="postgresql://user:pass@ep-sample-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
DIRECT_URL="postgresql://user:pass@ep-sample.us-east-1.aws.neon.tech/neondb?sslmode=require"
BETTER_AUTH_SECRET="your_random_32_character_secret_key"
BETTER_AUTH_URL="http://localhost:3005"
GITHUB_CLIENT_ID="your_github_oauth_client_id"
GITHUB_CLIENT_SECRET="your_github_oauth_client_secret"
GROQ_API_KEY="gsk_your_groq_api_key"
LUMINA_MODEL="openai/gpt-oss-120b"
CLIENT_URL="http://localhost:3000"`,
    },
    {
      id: "dev-3",
      step: "03",
      shortTitle: "Prisma Push",
      title: "Push Relational Database Schema",
      badge: "Neon DB",
      description: "Generate the Prisma client and synchronize the schema with your Neon PostgreSQL instance.",
      code: `cd server\nnpx prisma db push`,
    },
    {
      id: "dev-4",
      step: "04",
      shortTitle: "Run Servers",
      title: "Start Express Backend & Next.js Frontend",
      badge: "Dual Ports",
      description: "Run Express server on Port 3005 and Next.js 16 Web Portal on Port 3000 concurrently.",
      code: `# Terminal 1 (Backend: 3005)\ncd server && npm run dev\n\n# Terminal 2 (Frontend: 3000)\ncd client && npm run dev`,
    },
    {
      id: "dev-5",
      step: "05",
      shortTitle: "Link & Test CLI",
      title: "Link CLI Globally & Test Against Local Server",
      badge: "Local Test",
      description: "Link local CLI binary globally and authenticate against your local Express instance.",
      code: `cd server && npm link --force\n\n# Test with local server\nlumina login --server-url http://localhost:3005\nlumina wakeup`,
    },
  ];

  return (
    <section id="developer-guide" className="py-14 sm:py-16 bg-[#07090e] relative border-t border-[#141b2b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#161c2b] border border-[#5fd787]/30 text-[#5fd787] text-[11px] font-mono mb-2">
              <Download className="w-3 h-3" />
              <span>Setup Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get Started with Lumina
            </h2>
            <p className="text-[#94a3b8] text-xs sm:text-sm mt-1">
              Zero-config quickstart for users, or run the complete full-stack monorepo locally.
            </p>
          </div>

          {/* Track Switcher & Shell Selection */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center bg-[#0d121e] p-1 rounded-lg border border-[#1f293d]">
              <button
                onClick={() => setTrack("enduser")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  track === "enduser"
                    ? "bg-[#e8b339] text-black font-bold shadow"
                    : "text-[#94a3b8] hover:text-white"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>End Users (Quick Start)</span>
              </button>
              <button
                onClick={() => setTrack("contributor")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  track === "contributor"
                    ? "bg-[#af87ff] text-black font-bold shadow"
                    : "text-[#94a3b8] hover:text-white"
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Contributors (Monorepo)</span>
              </button>
            </div>

            <div className="flex items-center gap-1 bg-[#0d121e] p-1 rounded-lg border border-[#1f293d] text-[11px] font-mono">
              <button
                onClick={() => setOs("bash")}
                className={`px-2 py-1 rounded transition-all cursor-pointer ${
                  os === "bash" ? "bg-[#1f293d] text-white font-semibold" : "text-[#64748b] hover:text-white"
                }`}
              >
                bash
              </button>
              <button
                onClick={() => setOs("powershell")}
                className={`px-2 py-1 rounded transition-all cursor-pointer ${
                  os === "powershell" ? "bg-[#1f293d] text-white font-semibold" : "text-[#64748b] hover:text-white"
                }`}
              >
                pwsh
              </button>
            </div>
          </div>
        </div>

        {/* Compact Info Pill */}
        <div className="mb-6 px-3.5 py-2 rounded-lg bg-[#0c1424] border border-[#1e2e4a] flex items-center justify-between text-xs text-[#94a3b8]">
          <div className="flex items-center gap-2">
            {track === "enduser" ? (
              <>
                <Sparkles className="w-3.5 h-3.5 text-[#5fafd7] shrink-0" />
                <span>
                  <strong className="text-white">Zero Configuration:</strong> No database or local backend required. Connects to Lumina Cloud.
                </span>
              </>
            ) : (
              <>
                <AlertCircle className="w-3.5 h-3.5 text-[#af87ff] shrink-0" />
                <span>
                  <strong className="text-white">Prerequisites:</strong> Node.js (v18+), free Neon PostgreSQL, Groq API key, and GitHub OAuth app.
                </span>
              </>
            )}
          </div>
          <span className="hidden sm:inline text-[11px] text-[#64748b] font-mono">
            {track === "enduser" ? "3 steps • ~30 sec" : "5 steps • Local monorepo"}
          </span>
        </div>

        {/* TRACK 1: END USERS - 3-Column Compact Card Grid */}
        {track === "enduser" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {endUserSteps.map((step) => (
              <div
                key={step.id}
                className="bg-[#0b101c] rounded-xl border border-[#1a2337] p-4 flex flex-col justify-between hover:border-[#2a3854] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-[#131b2e] border border-[#1f2c47] flex items-center justify-center font-mono font-bold text-[11px] text-[#e8b339]">
                        {step.step}
                      </span>
                      <h3 className="text-sm font-bold text-white tracking-tight">{step.title}</h3>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#141b2a] text-[#94a3b8] border border-[#1b253b]">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#94a3b8] mb-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Compact Code Box */}
                <div className="rounded-lg overflow-hidden border border-[#172033] bg-[#06080e]">
                  <div className="flex items-center justify-between px-2.5 py-1 bg-[#0e1320] border-b border-[#172033] text-[10px] text-[#64748b] font-mono">
                    <span>{os === "bash" ? "terminal" : "powershell"}</span>
                    <button
                      onClick={() => copyCode(step.code, step.id)}
                      className="flex items-center gap-1 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedId === step.id ? (
                        <>
                          <Check className="w-3 h-3 text-[#5fd787]" />
                          <span className="text-[#5fd787]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#e8b339]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-2.5 text-xs font-mono text-[#cbd5e1] overflow-x-auto whitespace-pre leading-snug">
                    {step.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TRACK 2: CONTRIBUTORS - Sleek Interactive Stepper */}
        {track === "contributor" && (
          <div className="bg-[#0b101c] rounded-xl border border-[#1a2337] p-4 sm:p-5">
            {/* Step Tabs Navigation */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-[#161f33] scrollbar-none">
              {contributorSteps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveDevStep(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                    activeDevStep === idx
                      ? "bg-[#af87ff] text-black font-bold shadow"
                      : "bg-[#0e1422] text-[#94a3b8] hover:text-white border border-[#1b253b]"
                  }`}
                >
                  <span>{s.step}</span>
                  <span>{s.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Active Step Content */}
            {(() => {
              const current = contributorSteps[activeDevStep];
              return (
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-[#131b2e] border border-[#1f2c47] flex items-center justify-center font-mono font-bold text-xs text-[#af87ff]">
                        {current.step}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white">{current.title}</h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141b2a] text-[#af87ff] border border-[#261f38] w-fit">
                      {current.badge}
                    </span>
                  </div>

                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {current.description}
                  </p>

                  {/* Code Container */}
                  <div className="rounded-lg overflow-hidden border border-[#172033] bg-[#06080e]">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-[#0e1320] border-b border-[#172033] text-[11px] text-[#64748b] font-mono">
                      <span>{os === "bash" ? "Terminal (bash/zsh)" : "Windows (PowerShell)"}</span>
                      <button
                        onClick={() => copyCode(current.code, current.id)}
                        className="flex items-center gap-1 text-xs text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedId === current.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#5fd787]" />
                            <span className="text-[#5fd787]">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#af87ff]" />
                            <span>Copy snippet</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-3 text-xs font-mono text-[#cbd5e1] overflow-x-auto whitespace-pre leading-relaxed max-h-56">
                      {current.code}
                    </pre>
                  </div>

                  {/* Stepper Controls */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      disabled={activeDevStep === 0}
                      onClick={() => setActiveDevStep((prev) => Math.max(0, prev - 1))}
                      className="flex items-center gap-1 px-3 py-1 rounded text-xs font-mono text-[#94a3b8] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-[#0e1422] border border-[#1b253b]"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Previous Step</span>
                    </button>
                    <span className="text-[11px] font-mono text-[#64748b]">
                      Step {activeDevStep + 1} of {contributorSteps.length}
                    </span>
                    <button
                      disabled={activeDevStep === contributorSteps.length - 1}
                      onClick={() => setActiveDevStep((prev) => Math.min(contributorSteps.length - 1, prev + 1))}
                      className="flex items-center gap-1 px-3 py-1 rounded text-xs font-mono text-[#94a3b8] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-[#0e1422] border border-[#1b253b]"
                    >
                      <span>Next Step</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
