import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BeginnerGuide from "@/components/BeginnerGuide";
import OverviewSection from "@/components/OverviewSection";
import OperatingModes from "@/components/OperatingModes";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ToolPlayground from "@/components/ToolPlayground";
import ArchitectureVisualizer from "@/components/ArchitectureVisualizer";
import SetupGuide from "@/components/SetupGuide";
import CommandReference from "@/components/CommandReference";
import TroubleshootingGuide from "@/components/TroubleshootingGuide";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-white relative selection:bg-[#e8b339] selection:text-black">
      {/* Background Interactive Starfield / Cyber Grid Canvas */}
      <BackgroundCanvas />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with Live Badges & Quick Launch Command Selector */}
      <HeroSection />

      {/* Beginner-Friendly 60-Second Fast Track & Jargon Buster */}
      <BeginnerGuide />

      {/* Overview & Core Capabilities Matrix */}
      <OverviewSection />

      {/* 3 Operating Modes Breakdown */}
      <OperatingModes />

      {/* Interactive Live TUI Simulation Sandbox */}
      <InteractiveTerminal />

      {/* 7 Built-in Developer Tools Playground */}
      <ToolPlayground />

      {/* Visual System Topology & RFC 8628 Architecture Visualizer */}
      <ArchitectureVisualizer />

      {/* Dual-Track Setup & Running Locally Guide */}
      <SetupGuide />

      {/* Searchable CLI Commands Reference */}
      <CommandReference />

      {/* 11 Solved Edge Cases & Engineering Hardening */}
      <TroubleshootingGuide />

      {/* Beginner FAQ Guide */}
      <FAQSection />

      {/* Footer & Developer Credits */}
      <Footer />
    </main>
  );
}
