"use client";

import React, { useState } from "react";
import { Terminal, Search, Copy, Check, Sparkles, BookOpen } from "lucide-react";

export default function CommandReference() {
  const [search, setSearch] = useState("");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const commands = [
    {
      command: "lumina wakeup",
      options: "—",
      type: "Interactive",
      category: "CLI",
      description: "Launch interactive menu to choose between Chat, Tools, Autonomous Agent, or Diagnostics.",
      example: "lumina wakeup",
    },
    {
      command: "lumina login",
      options: "--server-url <url>, --client-id <id>",
      type: "Auth",
      category: "CLI",
      description: "Authenticate with GitHub via browser device approval (RFC 8628). Optionally specify custom backend server URL.",
      example: "lumina login",
    },
    {
      command: "lumina whoami",
      options: "--server-url <url>",
      type: "Diagnostics",
      category: "CLI",
      description: "View current authenticated developer profile, user ID, active Groq model, and database status.",
      example: "lumina whoami",
    },
    {
      command: "lumina logout",
      options: "—",
      type: "Auth",
      category: "CLI",
      description: "End session and securely clear stored local credentials from ~/.better-auth/token.json.",
      example: "lumina logout",
    },
    {
      command: "lumina --help",
      options: "-h",
      type: "Utility",
      category: "CLI",
      description: "Display CLI help menu, available commands, and option flags.",
      example: "lumina --help",
    },
    {
      command: "lumina --version",
      options: "-v",
      type: "Utility",
      category: "CLI",
      description: "Output currently installed version of Lumina CLI (e.g. v1.0.4).",
      example: "lumina --version",
    },
    {
      command: "/clear",
      options: "—",
      type: "In-Chat",
      category: "Session",
      description: "Clear the terminal screen inside Chat/Tools mode while preserving PostgreSQL memory.",
      example: "/clear",
    },
    {
      command: "exit / quit",
      options: "—",
      type: "In-Chat",
      category: "Session",
      description: "Gracefully end the interactive conversational AI or agent session.",
      example: "exit",
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.command.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.options.toLowerCase().includes(search.toLowerCase()) ||
      c.type.toLowerCase().includes(search.toLowerCase())
  );

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="commands" className="py-20 bg-[#090d16] relative border-t border-[#161d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#e8b339]/30 text-[#e8b339] text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CLI Specification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            CLI Command Reference
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base">
            Complete options and flag reference matching Commander.js definitions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-[#64748b] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search command or option (e.g. wakeup, --server-url, /clear)..."
              className="w-full bg-[#0d121e] border border-[#1f293d] focus:border-[#e8b339] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none placeholder-[#64748b]"
            />
          </div>
        </div>

        {/* Commands Table */}
        <div className="glass-card rounded-2xl border border-[#1e273b] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#0c101a] border-b border-[#1c2436] text-[#64748b] uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-6">Command</th>
                  <th className="py-3.5 px-6">Options</th>
                  <th className="py-3.5 px-6">Category</th>
                  <th className="py-3.5 px-6">Description</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#182133]">
                {filteredCommands.map((cmd) => (
                  <tr key={cmd.command} className="hover:bg-[#0e1424] transition-colors">
                    <td className="py-4 px-6 font-bold text-white whitespace-nowrap">
                      <code className="text-[#e8b339] bg-[#1a2133] px-2 py-1 rounded">
                        {cmd.command}
                      </code>
                    </td>
                    <td className="py-4 px-6 text-[#94a3b8] whitespace-nowrap font-mono">
                      {cmd.options}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#161f30] text-[#5fd787] border border-[#5fd787]/30">
                        {cmd.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-sans text-xs text-[#94a3b8] leading-relaxed max-w-md">
                      {cmd.description}
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <button
                        onClick={() => copyCommand(cmd.example)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161f30] hover:bg-[#202c44] text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
                        title="Copy command"
                      >
                        {copiedCmd === cmd.example ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#5fd787]" />
                            <span className="text-[#5fd787]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#64748b]" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
