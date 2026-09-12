"use client";

import React from "react";
import { Terminal, Package, Heart, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#05070a] border-t border-[#141b2b] text-[#808a9d] py-16 text-xs font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e8b339]/20 to-[#af87ff]/20 border border-[#e8b339]/40 flex items-center justify-center text-[#e8b339]">
                <span className="text-base font-bold font-mono">✦</span>
              </div>
              <span className="text-base font-bold text-white font-mono tracking-tight">
                Lumina <span className="text-[#e8b339]">CLI</span>
              </span>
            </div>

            <p className="text-xs text-[#94a3b8] font-sans leading-relaxed max-w-md">
              An autonomous AI software engineering agent that helps developers build, analyze, debug, and architect software workflows directly from the terminal.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/piyushkumariiitj/lumina-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0c101a] border border-[#1b253b] text-[#cbd5e1] hover:text-[#e8b339] hover:border-[#e8b339]/40 transition-colors"
                title="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.npmjs.com/package/@piyushkumariiitj/lumina-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0c101a] border border-[#1b253b] text-[#cbd5e1] hover:text-[#ff5f5f] hover:border-[#ff5f5f]/40 transition-colors"
                title="NPM Package"
              >
                <Package className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-white font-bold font-sans text-sm">Navigation</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#quickstart" className="hover:text-[#e8b339] transition-colors">Quick Start</a></li>
              <li><a href="#modes" className="hover:text-[#e8b339] transition-colors">Operating Modes</a></li>
              <li><a href="#terminal" className="hover:text-[#e8b339] transition-colors">Interactive Terminal</a></li>
              <li><a href="#tools" className="hover:text-[#e8b339] transition-colors">7 Developer Tools</a></li>
              <li><a href="#architecture" className="hover:text-[#e8b339] transition-colors">Cloud Architecture</a></li>
              <li><a href="#developer-guide" className="hover:text-[#e8b339] transition-colors">Contributor Guide</a></li>
              <li><a href="#commands" className="hover:text-[#e8b339] transition-colors">Command Reference</a></li>
              <li><a href="#edge-cases" className="hover:text-[#e8b339] transition-colors">Troubleshooting</a></li>
              <li><a href="#faq" className="hover:text-[#e8b339] transition-colors">FAQ Guide</a></li>
            </ul>
          </div>

          {/* Developer & Stack */}
          <div className="space-y-3">
            <div className="text-white font-bold font-sans text-sm">Author & Stack</div>
            <div className="text-xs space-y-1.5 font-sans text-[#94a3b8]">
              <div>
                Crafted by <a href="https://github.com/piyushkumariiitj" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#e8b339] underline decoration-[#e8b339]/50">Piyush Kumar</a>
              </div>
              <div className="text-[11px] text-[#64748b]">B.Tech Student @ IIITDM Jabalpur</div>
              <div className="pt-2 text-[11px] text-[#64748b]">
                Stack: Node.js 18+ • Groq LPU • Vercel AI SDK • Next.js 16 • Express 5 • Better Auth • Neon PostgreSQL
              </div>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#101827] text-[#5fd787] border border-[#5fd787]/30 text-[10px] font-mono">
                  <ShieldCheck className="w-3 h-3" /> MIT Licensed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#141b2b] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748b]">
          <div>
            © {new Date().getFullYear()} Lumina CLI. Distributed under MIT License.
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5fd787] animate-pulse" />
            <span className="text-[#94a3b8]">Groq LPU Engine • Production Cloud Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
