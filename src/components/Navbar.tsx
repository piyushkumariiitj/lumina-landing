"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Copy, Check, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm i -g @piyushkumariiitj/lumina-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Modes", href: "#modes" },
    { label: "Terminal", href: "#terminal" },
    { label: "Tools", href: "#tools" },
    { label: "Architecture", href: "#architecture" },
    { label: "Docs", href: "#developer-guide" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#090d16]/90 backdrop-blur-md border border-[#1e2638] shadow-2xl shadow-black/80 py-2.5 px-5"
            : "bg-[#090d16]/60 backdrop-blur-sm border border-[#192233] py-3 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Minimal Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-[#e8b339] font-mono text-base font-bold group-hover:scale-110 transition-transform">✦</span>
            <span className="text-sm font-semibold text-white tracking-tight">
              Lumina <span className="text-[#e8b339]">CLI</span>
            </span>
          </a>

          {/* Minimal Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-[#808a9d] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Minimal Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={copyCommand}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121826] hover:bg-[#182033] border border-[#1f293d] text-xs font-mono text-[#cbd5e1] hover:text-white transition-all cursor-pointer"
              title="Copy install command"
            >
              <Terminal className="w-3 h-3 text-[#e8b339]" />
              <span>npm i -g lumina-cli</span>
              {copied ? <Check className="w-3 h-3 text-[#5fd787]" /> : <Copy className="w-3 h-3 text-[#64748b]" />}
            </button>

            <a
              href="https://github.com/piyushkumariiitj/lumina-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#121826] hover:bg-[#182033] border border-[#1f293d] text-[#cbd5e1] hover:text-[#e8b339] transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#cbd5e1]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-[#1c2436] mt-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 rounded-lg text-xs text-[#cbd5e1] hover:bg-[#161c2b] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={copyCommand}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#121826] border border-[#1f293d] text-xs font-mono text-[#cbd5e1]"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#e8b339]" />
                  npm i -g @piyushkumariiitj/lumina-cli
                </span>
                {copied ? <Check className="w-3.5 h-3.5 text-[#5fd787]" /> : <Copy className="w-3.5 h-3.5 text-[#64748b]" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
