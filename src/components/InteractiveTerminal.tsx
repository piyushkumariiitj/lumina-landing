"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  MessageSquare,
  Wrench,
  Bot,
  KeyRound,
  CheckCircle2,
  Cpu,
  Copy,
  Check,
  Send,
  HelpCircle,
} from "lucide-react";

type TerminalMode = "chat" | "tools" | "agent" | "login" | "whoami";

interface TerminalLine {
  id: string;
  type: "banner" | "user" | "agent" | "tool" | "system" | "success" | "code" | "tree";
  content: string;
  toolDetails?: {
    name: string;
    action: string;
    output?: string;
  };
}

export default function InteractiveTerminal() {
  const [activeMode, setActiveMode] = useState<TerminalMode>("chat");
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalContainerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initial load or mode change
  useEffect(() => {
    loadModeScenario(activeMode);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeMode]);

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [lines, isTyping]);

  const generateLineId = (prefix: string) => {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  };

  const loadModeScenario = (mode: TerminalMode) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsTyping(true);
    setLines([]);

    const baseBanner: TerminalLine = {
      id: generateLineId("banner"),
      type: "banner",
      content: `✦ Lumina CLI v1.0.4 • openai/gpt-oss-120b\n  ✦ Developer <Active User>\n  • Engine: Groq LPU Inference  • Status: Active (Connected to Cloud)`,
    };

    if (mode === "chat") {
      simulateScenario([
        baseBanner,
        {
          id: generateLineId("sys"),
          type: "system",
          content: "? Select capability: 💬 Chat (Conversational AI with memory and code formatting)",
        },
        {
          id: generateLineId("usr"),
          type: "user",
          content: "How do I implement RFC 8628 Device Authorization in Express 5?",
        },
        {
          id: generateLineId("agent"),
          type: "agent",
          content: `RFC 8628 (OAuth 2.0 Device Authorization Grant) enables browserless CLI authentication. Here is the architectural flow in Express 5:

1. **Client requests code**: \`POST /api/auth/device/code\` generates a user-friendly code (e.g. \`ABCD-1234\`).
2. **User approves in browser**: User visits verification URL and authenticates with GitHub.
3. **CLI polls token endpoint**: CLI polls \`POST /api/auth/device/token\` until approved.

\`\`\`javascript
// Express 5 Device Code Endpoint
app.post("/api/auth/device/code", async (req, res) => {
  const userCode = generateUserCode(); // e.g. "ABCD-1234"
  const deviceCode = crypto.randomUUID();
  
  await prisma.deviceCode.create({
    data: { userCode, deviceCode, status: "pending", expiresAt: new Date(Date.now() + 600000) }
  });
  
  res.json({ user_code: userCode, device_code: deviceCode, interval: 5 });
});
\`\`\`
`,
        },
      ]);
    } else if (mode === "tools") {
      simulateScenario([
        baseBanner,
        {
          id: generateLineId("sys"),
          type: "system",
          content: "? Select tools to enable: [✔] Web Search, [✔] Code Execution, [✔] Git Inspector",
        },
        {
          id: generateLineId("usr"),
          type: "user",
          content: "Search the latest Next.js 16 features and run a test script to benchmark array manipulation in Node 20.",
        },
        {
          id: generateLineId("tool"),
          type: "tool",
          content: "⚡ Searching the web for: 'Next.js 16 key features and release notes'",
          toolDetails: {
            name: "web_search",
            action: "Querying Google Knowledge API...",
            output: "✔ Found 5 sources (Turbopack default, React 19 compiler support, async request APIs)",
          },
        },
        {
          id: generateLineId("tool"),
          type: "tool",
          content: "⚡ Executing JavaScript snippet via sandboxed Node.js runner...",
          toolDetails: {
            name: "code_execution",
            action: "Benchmark 1,000,000 items map & filter",
            output: "✔ Process completed in 14.2ms. Peak memory: 28MB.",
          },
        },
        {
          id: generateLineId("agent"),
          type: "agent",
          content: `Here is the synthesis based on live tool execution:

• **Next.js 16 Updates**: Turbopack is now the default production bundler, React 19 Actions are natively integrated, and headers/cookies are fully asynchronous.
• **Execution Benchmark**: Sandboxed execution of 1,000,000 items completed in **14.2ms** with optimal memory allocation.`,
        },
      ]);
    } else if (mode === "agent") {
      simulateScenario([
        baseBanner,
        {
          id: generateLineId("sys"),
          type: "system",
          content: "? Select capability: 🤖 Agent (Autonomous project architect & code generator)",
        },
        {
          id: generateLineId("usr"),
          type: "user",
          content: "Build a fullstack task tracker with Express, SQLite, and vanilla JS.",
        },
        {
          id: generateLineId("agent-planning"),
          type: "system",
          content: "✦ Autonomous Agent: Designing application architecture & scaffolding files to disk...",
        },
        {
          id: generateLineId("tree"),
          type: "tree",
          content: `📁 task-tracker/
├── 📄 package.json          [Express, Better-SQLite3, CORS]
├── 📄 server.js             [REST API with CRUD endpoints]
└── 📁 public/
    ├── 📄 index.html        [Modern dark-mode UI]
    ├── 📄 style.css         [Clean CSS grid & animations]
    └── 📄 app.js            [Client state management & fetch calls]`,
        },
        {
          id: generateLineId("scaffold"),
          type: "success",
          content: "✔ Successfully wrote all 5 files directly to ./task-tracker/ on disk.",
        },
        {
          id: generateLineId("commands"),
          type: "code",
          content: `Launch your new application:
$ cd task-tracker
$ npm install
$ npm start`,
        },
      ]);
    } else if (mode === "login") {
      simulateScenario([
        baseBanner,
        {
          id: generateLineId("usr"),
          type: "user",
          content: "lumina login",
        },
        {
          id: generateLineId("sys"),
          type: "system",
          content: "Initiating RFC 8628 OAuth Device Authorization Flow...",
        },
        {
          id: generateLineId("login-box"),
          type: "code",
          content: `┌──────────────────────────────────────────────────────────┐
│  🔐 LUMINA DEVICE AUTHORIZATION CODE                     │
│                                                          │
│  User Code:   ABCD-1234                                  │
│  Browser URL: https://luminacli.vercel.app/device        │
│                                                          │
│  Press ENTER to open browser verification page...        │
└──────────────────────────────────────────────────────────┘`,
        },
        {
          id: generateLineId("poll-1"),
          type: "system",
          content: "⏳ Waiting for browser approval (polling every 5s)...",
        },
        {
          id: generateLineId("poll-2"),
          type: "success",
          content: "✔ Device approved! Session token securely saved to ~/.better-auth/token.json",
        },
        {
          id: generateLineId("welcome"),
          type: "banner",
          content: "✦ Welcome! Run 'lumina wakeup' to start your interactive AI session.",
        },
      ]);
    } else if (mode === "whoami") {
      simulateScenario([
        baseBanner,
        {
          id: generateLineId("usr"),
          type: "user",
          content: "lumina whoami",
        },
        {
          id: generateLineId("whoami-box"),
          type: "code",
          content: `✦ Lumina Active Session Diagnostics
  • User:     Piyush Kumar (@piyushkumariiitj)
  • Provider: GitHub OAuth (RFC 8628)
  • Backend:  https://lumina-cli.onrender.com (Production)
  • Engine:   Groq LPU (openai/gpt-oss-120b)
  • Fallback: openai/gpt-oss-20b
  • Database: Neon PostgreSQL (Connected)`,
        },
      ]);
    }
  };

  const simulateScenario = (scenarioLines: TerminalLine[]) => {
    let index = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (index < scenarioLines.length) {
        const nextLine = scenarioLines[index];
        if (nextLine) {
          setLines((prev) => [...prev, nextLine]);
        }
        index++;
      } else {
        setIsTyping(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 280);
  };

  const handleCustomCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const cmd = inputVal.trim();
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    // Add user command line with unique id
    setLines((prev) => [
      ...prev,
      { id: generateLineId("user-cmd"), type: "user", content: cmd },
    ]);
    setInputVal("");

    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === "clear" || lowerCmd === "/clear") {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setLines([]);
      setIsTyping(false);
      return;
    }

    if (lowerCmd === "help" || lowerCmd === "lumina --help") {
      setLines((prev) => [
        ...prev,
        {
          id: generateLineId("help-sys"),
          type: "system",
          content: `Lumina CLI Command Reference:
• lumina wakeup                     - Launch interactive AI companion
• lumina login [--server-url <url>] - Authenticate via GitHub browser approval
• lumina whoami                     - View current developer session & active model
• lumina logout                     - End session & clear stored local credentials
• lumina --version                  - Output installed CLI version
• mode chat                         - Switch to persistent chat mode
• mode tools                        - Switch to 7-tool developer suite
• mode agent                        - Switch to autonomous full-stack agent
• clear                             - Clear terminal window`,
        },
      ]);
      return;
    }

    if (lowerCmd === "lumina wakeup") {
      setActiveMode("chat");
      return;
    }

    if (lowerCmd === "lumina login") {
      setActiveMode("login");
      return;
    }

    if (lowerCmd === "lumina whoami") {
      setActiveMode("whoami");
      return;
    }

    if (lowerCmd.startsWith("mode ")) {
      const requestedMode = lowerCmd.replace("mode ", "").trim() as TerminalMode;
      if (["chat", "tools", "agent", "login", "whoami"].includes(requestedMode)) {
        setActiveMode(requestedMode);
        return;
      }
    }

    // Default: Simulate AI reasoning response
    setIsTyping(true);
    setTimeout(() => {
      setLines((prev) => [
        ...prev,
        {
          id: generateLineId("ai-resp"),
          type: "agent",
          content: `✦ [Groq LPU] Reasoning about "${cmd}":

Lumina can assist with this directly in your terminal:
1. Run \`lumina wakeup\` and select **Agent Mode** to scaffold multi-file projects.
2. Run live verification tools to test code snippets and inspect Git diffs.
3. Your multi-turn history is automatically preserved in Neon PostgreSQL.`,
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section id="terminal" className="py-20 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#e8b339]/30 text-[#e8b339] text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive TUI Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience Lumina in Action
          </h2>
          <p className="text-[#94a3b8] text-base">
            Click any mode below to test real terminal flows, or type commands directly into the prompt.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveMode("chat")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeMode === "chat"
                ? "bg-[#af87ff]/20 text-[#af87ff] border border-[#af87ff] glow-violet font-semibold"
                : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>1. 💬 Chat Mode</span>
          </button>

          <button
            onClick={() => setActiveMode("tools")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeMode === "tools"
                ? "bg-[#5fafd7]/20 text-[#5fafd7] border border-[#5fafd7] glow-cyan font-semibold"
                : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>2. ⚡ Real-Time Tools</span>
          </button>

          <button
            onClick={() => setActiveMode("agent")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeMode === "agent"
                ? "bg-[#e8b339]/20 text-[#e8b339] border border-[#e8b339] glow-amber font-semibold"
                : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>3. 🤖 Autonomous Agent</span>
          </button>

          <button
            onClick={() => setActiveMode("login")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeMode === "login"
                ? "bg-[#5fd787]/20 text-[#5fd787] border border-[#5fd787] glow-emerald font-semibold"
                : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <span>4. 🔐 Device Login (RFC 8628)</span>
          </button>

          <button
            onClick={() => setActiveMode("whoami")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeMode === "whoami"
                ? "bg-[#ffaf5f]/20 text-[#ffaf5f] border border-[#ffaf5f] font-semibold"
                : "bg-[#0d121e] text-[#94a3b8] border border-[#1f293d] hover:text-white"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>5. ⚙️ Diagnostics (whoami)</span>
          </button>
        </div>

        {/* The Simulated Terminal Window */}
        <div className="terminal-window rounded-2xl overflow-hidden border border-[#1f293d] shadow-2xl relative scanlines">
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0c101a] border-b border-[#1b2336]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-xs font-mono text-[#94a3b8]">
                lumina — developer@local: ~
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#161f30] text-[11px] font-mono text-[#5fd787]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5fd787] animate-pulse" />
                <span>ONLINE (Groq LPU)</span>
              </div>

              <button
                onClick={() => loadModeScenario(activeMode)}
                className="p-1.5 rounded-lg hover:bg-[#1a2337] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                title="Replay Scenario"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Content Screen */}
          <div
            ref={terminalContainerRef}
            className="p-6 font-mono text-sm min-h-[460px] max-h-[600px] overflow-y-auto space-y-4 bg-[#080b12]"
          >
            {lines.map((line) => {
              if (!line) return null;

              if (line.type === "banner") {
                return (
                  <div
                    key={line.id}
                    className="p-3 rounded-lg bg-[#0e1422] border border-[#1e283d] text-[#e8b339] text-xs whitespace-pre-wrap leading-relaxed glow-amber"
                  >
                    {line.content}
                  </div>
                );
              }

              if (line.type === "user") {
                return (
                  <div key={line.id} className="flex items-start gap-2 text-[#5fd75f]">
                    <span className="font-bold select-none">❯</span>
                    <span className="font-medium text-white">{line.content}</span>
                  </div>
                );
              }

              if (line.type === "agent") {
                return (
                  <div key={line.id} className="space-y-2 text-[#cbd5e1] pl-4 border-l-2 border-[#af87ff]">
                    <div className="text-[11px] text-[#af87ff] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#af87ff]" />
                      <span>Lumina AI (120B Inference)</span>
                    </div>
                    <div className="whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
                      {line.content}
                    </div>
                  </div>
                );
              }

              if (line.type === "tool") {
                return (
                  <div
                    key={line.id}
                    className="p-3 rounded-lg bg-[#0c1424] border border-[#5fafd7]/30 text-xs space-y-1.5"
                  >
                    <div className="text-[#5fafd7] font-semibold flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5 text-[#5fafd7]" />
                      <span>{line.content}</span>
                    </div>
                    {line.toolDetails && (
                      <div className="text-[#94a3b8] pl-5 text-[11px] space-y-0.5">
                        <div className="text-[#64748b]">⚙ {line.toolDetails.action}</div>
                        {line.toolDetails.output && (
                          <div className="text-[#5fd787] font-medium">{line.toolDetails.output}</div>
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              if (line.type === "tree") {
                return (
                  <div
                    key={line.id}
                    className="p-4 rounded-xl bg-[#0a0f1c] border border-[#e8b339]/40 text-[#e8b339] text-xs whitespace-pre font-mono overflow-x-auto"
                  >
                    {line.content}
                  </div>
                );
              }

              if (line.type === "code") {
                return (
                  <div
                    key={line.id}
                    className="p-3 rounded-lg bg-[#0d121e] border border-[#232f48] text-[#94a3b8] text-xs whitespace-pre-wrap font-mono"
                  >
                    {line.content}
                  </div>
                );
              }

              if (line.type === "success") {
                return (
                  <div key={line.id} className="text-[#5fd787] text-xs flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#5fd787]" />
                    <span>{line.content}</span>
                  </div>
                );
              }

              return (
                <div key={line.id} className="text-[#94a3b8] text-xs">
                  {line.content}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#e8b339] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#e8b339] animate-ping" />
                <span>Lumina is processing tokens via Groq...</span>
              </div>
            )}
          </div>

          {/* Terminal Interactive Input Form */}
          <form
            onSubmit={handleCustomCommand}
            className="flex items-center gap-3 px-4 py-3 bg-[#0c101a] border-t border-[#1b2336]"
          >
            <span className="text-[#5fd75f] font-mono font-bold select-none">❯</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (e.g. 'lumina wakeup', 'help', 'mode tools', or ask any coding question)..."
              className="flex-1 bg-transparent text-sm font-mono text-white focus:outline-none placeholder-[#475569]"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-[#1a2337] hover:bg-[#e8b339] text-[#94a3b8] hover:text-black transition-all cursor-pointer"
              title="Send Command"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Interactive Helper Hints */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#64748b] font-mono gap-2">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#e8b339]" />
            <span>Try typing: <code className="text-[#cbd5e1]">lumina login</code>, <code className="text-[#cbd5e1]">lumina whoami</code>, <code className="text-[#cbd5e1]">mode agent</code>, or <code className="text-[#cbd5e1]">help</code></span>
          </div>
          <div className="text-[11px]">
            ⚡ Powered by Vercel AI SDK <code>ai</code> + Groq LPU
          </div>
        </div>
      </div>
    </section>
  );
}
