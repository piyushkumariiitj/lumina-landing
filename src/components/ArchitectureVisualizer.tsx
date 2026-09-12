"use client";

import React, { useState } from "react";
import {
  Network,
  Lock,
  Database,
  Cpu,
  ArrowRight,
  Sparkles,
  Server,
  Layers,
  CheckCircle2,
  GitMerge,
  ShieldCheck,
  Terminal,
  Laptop,
  Cloud,
} from "lucide-react";

export default function ArchitectureVisualizer() {
  const [activeDiagram, setActiveDiagram] = useState<"topology" | "rfc8628" | "stream" | "erd">("topology");
  const [authStep, setAuthStep] = useState(1);

  const authSteps = [
    {
      step: 1,
      title: "Device Code Request",
      actor: "CLI ➜ Express 5 Server (Render)",
      description: "CLI executes 'lumina login', requesting a user code and device code via POST https://lumina-cli.onrender.com/api/auth/device/code.",
    },
    {
      step: 2,
      title: "Browser Verification URL",
      actor: "CLI ➜ Developer",
      description: "CLI displays user code (e.g. 'ABCD-1234') and opens the verification page at https://luminacli.vercel.app/device.",
    },
    {
      step: 3,
      title: "GitHub Social OAuth Sign-In",
      actor: "Developer ➜ GitHub ➜ Next.js 16 (Vercel)",
      description: "Developer authenticates with GitHub. Better Auth exchanges OAuth codes and manages session cookies securely.",
    },
    {
      step: 4,
      title: "Code Verification & Claim",
      actor: "Next.js ➜ Express ➜ Neon DB",
      description: "GET /api/auth/device?user_code=... claims the device code for the authenticated developer in Neon PostgreSQL.",
    },
    {
      step: 5,
      title: "Developer Approval",
      actor: "Developer ➜ Web Portal",
      description: "Developer reviews account details and clicks 'Approve Device'. Server updates device code status to 'approved'.",
    },
    {
      step: 6,
      title: "Token Polling & Storage",
      actor: "CLI ➜ ~/.better-auth/token.json",
      description: "CLI background polling detects approval, receives secure token, and stores it locally for future instant sessions.",
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#090d16] relative border-t border-[#161d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#e8b339]/30 text-[#e8b339] text-xs font-mono">
            <Network className="w-3.5 h-3.5" />
            <span>Cloud & System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production Cloud Topology & Workflows
          </h2>
          <p className="text-[#94a3b8] text-base">
            Clean separation between local client execution and cloud infrastructure on Vercel, Render, Neon, and Groq.
          </p>
        </div>

        {/* Diagram Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveDiagram("topology")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeDiagram === "topology"
                ? "bg-[#e8b339] text-black font-bold glow-amber shadow"
                : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
            }`}
          >
            1. Production Cloud Topology
          </button>

          <button
            onClick={() => setActiveDiagram("rfc8628")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeDiagram === "rfc8628"
                ? "bg-[#af87ff] text-black font-bold glow-violet shadow"
                : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
            }`}
          >
            2. RFC 8628 Device Auth Flow
          </button>

          <button
            onClick={() => setActiveDiagram("stream")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeDiagram === "stream"
                ? "bg-[#5fd787] text-black font-bold glow-emerald shadow"
                : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
            }`}
          >
            3. AI Memory & Streaming Pipeline
          </button>

          <button
            onClick={() => setActiveDiagram("erd")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeDiagram === "erd"
                ? "bg-[#5fafd7] text-black font-bold glow-cyan shadow"
                : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
            }`}
          >
            4. Database Schema (ERD)
          </button>
        </div>

        {/* Diagram Viewport Container */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-[#1e273b] shadow-2xl">
          {/* TAB 1: Monorepo System Topology */}
          {activeDiagram === "topology" && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1c2436]">
                <div>
                  <h3 className="text-xl font-bold text-white">Client vs Production Cloud Infrastructure</h3>
                  <p className="text-xs text-[#808a9d]">End users need zero configuration. The CLI seamlessly coordinates with Lumina Cloud.</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#161f30] text-[#5fd787] border border-[#5fd787]/30 w-fit">
                  Zero Client-Side Secrets
                </span>
              </div>

              {/* End-User Machine Node */}
              <div className="p-6 rounded-2xl bg-[#0b101c] border border-[#e8b339]/40 space-y-4 glow-amber">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-[#e8b339]" />
                    <span className="text-sm font-mono font-bold text-white">END-USER DEVELOPER MACHINE</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#292212] text-[#e8b339]">
                    Local Execution
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#080c15] border border-[#1b253b] space-y-1">
                    <div className="text-[#5fd787] font-semibold">CLI Commands</div>
                    <div className="text-[#94a3b8]">lumina wakeup, login, whoami</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#080c15] border border-[#1b253b] space-y-1">
                    <div className="text-[#5fafd7] font-semibold">Local Tool Sandbox</div>
                    <div className="text-[#94a3b8]">Git inspector, Node/Python runner, File I/O</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#080c15] border border-[#1b253b] space-y-1">
                    <div className="text-[#af87ff] font-semibold">Secure Local Cache</div>
                    <div className="text-[#94a3b8]">~/.better-auth/token.json</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#808a9d]">
                <ArrowRight className="w-4 h-4 rotate-90 text-[#e8b339]" />
                <span>HTTPS / RFC 8628 Device Authorization</span>
                <ArrowRight className="w-4 h-4 rotate-90 text-[#e8b339]" />
              </div>

              {/* Lumina Cloud Stack Container */}
              <div className="p-6 rounded-2xl bg-[#090d17] border border-[#1b253b] space-y-6">
                <div className="flex items-center justify-between border-b border-[#1c2436] pb-3">
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-[#5fafd7]" />
                    <span className="text-sm font-mono font-bold text-white">LUMINA PRODUCTION CLOUD STACK</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#132333] text-[#5fafd7]">
                    Managed Services
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Web Portal */}
                  <div className="p-4 rounded-xl bg-[#060910] border border-[#1e273b] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#5fafd7] font-bold">Lumina Web Portal (Vercel)</span>
                      <span className="text-[10px] text-[#64748b]">Next.js 16</span>
                    </div>
                    <p className="text-xs text-[#cbd5e1]">https://luminacli.vercel.app</p>
                    <p className="text-[11px] text-[#808a9d]">Device code authorization, approval pages, and social login handler.</p>
                  </div>

                  {/* Backend Server */}
                  <div className="p-4 rounded-xl bg-[#060910] border border-[#1e273b] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#af87ff] font-bold">Lumina Backend Server (Render)</span>
                      <span className="text-[10px] text-[#64748b]">Express 5</span>
                    </div>
                    <p className="text-xs text-[#cbd5e1]">https://lumina-cli.onrender.com</p>
                    <p className="text-[11px] text-[#808a9d]">Better Auth device plugin, GitHub OAuth provider, and message persistence.</p>
                  </div>
                </div>

                {/* Cloud Database & Inference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#080b12] border border-[#ff5f5f]/30 flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-[#ff5f5f] shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-white font-bold">Groq LPU Engine</div>
                      <div className="text-[11px] text-[#808a9d]">Primary 120B with instant 20B fallback on 429</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#080b12] border border-[#5fd787]/30 flex items-center gap-3">
                    <Database className="w-6 h-6 text-[#5fd787] shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-white font-bold">Neon PostgreSQL</div>
                      <div className="text-[11px] text-[#808a9d]">Persistent conversations and sessions via Prisma</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RFC 8628 Device Auth Flow */}
          {activeDiagram === "rfc8628" && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1c2436]">
                <div>
                  <h3 className="text-xl font-bold text-white">RFC 8628 OAuth Device Authorization</h3>
                  <p className="text-xs text-[#808a9d]">Headless terminal authentication approved securely in your browser via GitHub OAuth</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAuthStep(Math.max(1, authStep - 1))}
                    disabled={authStep === 1}
                    className="px-2.5 py-1 rounded bg-[#161f30] text-xs text-white disabled:opacity-40 cursor-pointer"
                  >
                    Prev
                  </button>
                  <span className="text-xs font-mono text-[#af87ff]">Step {authStep} of 6</span>
                  <button
                    onClick={() => setAuthStep(Math.min(6, authStep + 1))}
                    disabled={authStep === 6}
                    className="px-2.5 py-1 rounded bg-[#161f30] text-xs text-white disabled:opacity-40 cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Step Progress Visualizer */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {authSteps.map((s) => (
                  <div
                    key={s.step}
                    onClick={() => setAuthStep(s.step)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      authStep === s.step
                        ? "bg-[#1f1a33] border-[#af87ff] text-white shadow"
                        : "bg-[#090d16] border-[#1a2336] text-[#64748b] hover:text-[#94a3b8]"
                    }`}
                  >
                    <div className="text-xs font-bold font-mono">0{s.step}</div>
                    <div className="text-[11px] font-medium truncate mt-1">{s.title}</div>
                  </div>
                ))}
              </div>

              {/* Detailed Active Step Card */}
              <div className="p-6 rounded-2xl bg-[#0f1424] border border-[#af87ff]/40 space-y-4 glow-violet">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#241a38] text-[#af87ff]">
                    {authSteps[authStep - 1].actor}
                  </span>
                  <span className="text-xs font-mono text-[#5fd787] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> RFC 8628 Spec
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white">{authSteps[authStep - 1].title}</h4>
                <p className="text-sm text-[#cbd5e1] leading-relaxed">
                  {authSteps[authStep - 1].description}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: AI Memory & Streaming Pipeline */}
          {activeDiagram === "stream" && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1c2436]">
                <div>
                  <h3 className="text-xl font-bold text-white">AI Reasoning & PostgreSQL Memory Stream</h3>
                  <p className="text-xs text-[#808a9d]">End-to-end token generation, fallback resilience, and database persistence</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#162a20] text-[#5fd787] border border-[#5fd787]/30">
                  Sub-Second Streaming
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#1b253b] flex items-center gap-4">
                  <div className="w-7 h-7 rounded-lg bg-[#5fd787]/20 text-[#5fd787] flex items-center justify-center font-bold">1</div>
                  <div>
                    <div className="text-white font-bold">User Input & Prompt Dispatch</div>
                    <div className="text-[#808a9d]">Prompt sent from terminal prompt to chat-services.js; stored immediately as 'user' message in DB.</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#1b253b] flex items-center gap-4">
                  <div className="w-7 h-7 rounded-lg bg-[#5fafd7]/20 text-[#5fafd7] flex items-center justify-center font-bold">2</div>
                  <div>
                    <div className="text-white font-bold">Session Context Retrieval</div>
                    <div className="text-[#808a9d]">Prisma fetches active conversation history. If DB latency occurs, active in-memory session fallback activates.</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#af87ff]/40 flex items-center gap-4 glow-violet">
                  <div className="w-7 h-7 rounded-lg bg-[#af87ff]/20 text-[#af87ff] flex items-center justify-center font-bold">3</div>
                  <div>
                    <div className="text-white font-bold">Groq LPU streamText Execution</div>
                    <div className="text-[#cbd5e1]">Streams chunks via SSE. If 429 rate limit or 404 occurs, automatically replays prompt on fallback model without loss.</div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#1b253b] flex items-center gap-4">
                  <div className="w-7 h-7 rounded-lg bg-[#e8b339]/20 text-[#e8b339] flex items-center justify-center font-bold">4</div>
                  <div>
                    <div className="text-white font-bold">ANSI Markdown Rendering & Auto Save</div>
                    <div className="text-[#808a9d]">Terminal streams marked syntax highlighting. Full aggregated text saved as 'assistant' message in Neon PostgreSQL.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Database Schema (ERD) */}
          {activeDiagram === "erd" && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1c2436]">
                <div>
                  <h3 className="text-xl font-bold text-white">Neon PostgreSQL Database Schema</h3>
                  <p className="text-xs text-[#808a9d]">Normalized relational schema managed via Prisma ORM</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#142233] text-[#5fafd7] border border-[#5fafd7]/30">
                  Core Entities
                </span>
              </div>

              {/* Schema Models Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* User Model */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#1e273b] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#1c2436] pb-1.5">
                    <span className="text-xs font-mono font-bold text-[#e8b339]">User</span>
                    <span className="text-[10px] text-[#64748b]">Developer Account</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#94a3b8] space-y-1">
                    <div>🔑 <span className="text-white">id</span>: String (PK)</div>
                    <div>✉️ <span className="text-white">email</span>: String (Unique)</div>
                    <div>👤 <span className="text-white">name</span>: String</div>
                    <div>🔗 <span className="text-[#af87ff]">conversations</span>: Conversation[]</div>
                    <div>🔗 <span className="text-[#af87ff]">sessions</span>: Session[]</div>
                  </div>
                </div>

                {/* Conversation Model */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#1e273b] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#1c2436] pb-1.5">
                    <span className="text-xs font-mono font-bold text-[#af87ff]">Conversation</span>
                    <span className="text-[10px] text-[#64748b]">Dialogue Sessions</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#94a3b8] space-y-1">
                    <div>🔑 <span className="text-white">id</span>: String (CUID PK)</div>
                    <div>👤 <span className="text-[#e8b339]">userId</span>: String (FK)</div>
                    <div>🏷️ <span className="text-white">title</span>: String?</div>
                    <div>🕹️ <span className="text-white">mode</span>: String (chat/tool/agent)</div>
                    <div>🔗 <span className="text-[#5fd787]">messages</span>: Message[]</div>
                  </div>
                </div>

                {/* Message Model */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#1e273b] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#1c2436] pb-1.5">
                    <span className="text-xs font-mono font-bold text-[#5fd787]">Message</span>
                    <span className="text-[10px] text-[#64748b]">History & Payloads</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#94a3b8] space-y-1">
                    <div>🔑 <span className="text-white">id</span>: String (CUID PK)</div>
                    <div>💬 <span className="text-[#af87ff]">conversationId</span>: String (FK)</div>
                    <div>🎭 <span className="text-white">role</span>: String (user/assistant)</div>
                    <div>📝 <span className="text-white">content</span>: String</div>
                    <div>⏰ <span className="text-white">createdAt</span>: DateTime</div>
                  </div>
                </div>

                {/* DeviceCode Model */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#1e273b] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#1c2436] pb-1.5">
                    <span className="text-xs font-mono font-bold text-[#ffaf5f]">DeviceCode</span>
                    <span className="text-[10px] text-[#64748b]">RFC 8628 Flow</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#94a3b8] space-y-1">
                    <div>🔑 <span className="text-white">id</span>: String (PK)</div>
                    <div>🔢 <span className="text-white">userCode</span>: String (ABCD-1234)</div>
                    <div>🔒 <span className="text-white">deviceCode</span>: String</div>
                    <div>🚦 <span className="text-white">status</span>: String (pending/approved)</div>
                    <div>👤 <span className="text-white">userId</span>: String?</div>
                  </div>
                </div>

                {/* Session Model */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#1e273b] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#1c2436] pb-1.5">
                    <span className="text-xs font-mono font-bold text-[#5fafd7]">Session</span>
                    <span className="text-[10px] text-[#64748b]">Auth Tokens</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#94a3b8] space-y-1">
                    <div>🔑 <span className="text-white">id</span>: String (PK)</div>
                    <div>🎟️ <span className="text-white">token</span>: String (Unique)</div>
                    <div>👤 <span className="text-[#e8b339]">userId</span>: String (FK)</div>
                    <div>⏳ <span className="text-white">expiresAt</span>: DateTime</div>
                  </div>
                </div>

                {/* Account Model */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#1e273b] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#1c2436] pb-1.5">
                    <span className="text-xs font-mono font-bold text-[#ff5f5f]">Account</span>
                    <span className="text-[10px] text-[#64748b]">OAuth Identity</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#94a3b8] space-y-1">
                    <div>🔑 <span className="text-white">id</span>: String (PK)</div>
                    <div>🌐 <span className="text-white">providerId</span>: String (github)</div>
                    <div>👤 <span className="text-[#e8b339]">userId</span>: String (FK)</div>
                    <div>🎫 <span className="text-white">accessToken</span>: String?</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
