import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, FileText, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#22d472]/[0.06] rounded-full blur-[130px] pointer-events-none" />

      {/* Main 12-Column Hero Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column (5 Cols): Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-center space-y-6"
        >
          <div className="space-y-4">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] animate-pulse" />
              <span className="font-mono text-xs sm:text-sm text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold tracking-wide">
                AVAILABLE FOR HIRE · 2026
              </span>
              <span className="text-[#3b3b3b] dark:text-[#3b3b3b] light:text-slate-300">·</span>
              <span className="font-mono text-xs sm:text-sm text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-600 font-medium">
                BSSE Graduate
              </span>
            </div>

            {/* High Impact Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-[-0.04em] leading-[1.08]">
              Building apps people use<span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">.</span>
            </h1>

            {/* Subtitle & Value Proposition */}
            <p className="text-sm sm:text-base text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 leading-relaxed font-normal">
              <strong className="text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 font-semibold">DevOps Engineer &amp; Full-Stack Developer</strong> specializing in GitHub Actions CI/CD automation, multi-stage Docker containerization, Python backends, and responsive React interfaces.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white hover:bg-[#18a355] transition-all shadow-[0_0_20px_rgba(34,212,114,0.3)] hover:shadow-[0_0_30px_rgba(34,212,114,0.45)] cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                id="hero-view-cv-btn"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 hover:border-[#22d472] dark:hover:border-[#22d472] light:hover:border-[#16a34a] hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                id="hero-open-cli-btn"
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 transition-all cursor-pointer shadow-sm"
                title="Launch Live Pipeline Simulator"
              >
                <Terminal className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                <span className="hidden sm:inline font-medium">CLI Simulator</span>
              </button>
            </div>
          </div>

          {/* Quick Technology Pills */}
          <div className="pt-3.5 border-t border-[#212121]/80 dark:border-[#212121]/80 light:border-slate-200">
            <span className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 block mb-2 font-semibold tracking-wider">
              CORE TOOLING &amp; RUNTIME:
            </span>
            <div className="flex flex-wrap gap-2">
              {['GitHub Actions', 'Docker', 'Python / Flask', 'React', 'Bash', 'DevSecOps'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 shadow-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column (7 Cols): Transparent Portrait Blended Seamlessly into Hero Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 relative flex items-center justify-center lg:justify-end"
        >
          {/* Subtle Ambient Radial Glow directly in the hero background behind the person */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[400px] h-72 sm:h-[400px] rounded-full bg-[#22d472]/[0.08] dark:bg-[#22d472]/[0.08] light:bg-[#16a34a]/[0.05] blur-[100px] pointer-events-none" />

          {/* The Exact Transparent Portrait */}
          <div className="relative z-10 flex items-end justify-center w-full max-w-lg lg:max-w-none">
            <img
              src="/profile.png"
              alt={personalInfo.name}
              referrerPolicy="no-referrer"
              className="w-auto max-w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] xl:h-[480px] object-contain object-bottom filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.55)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.75)] light:drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] select-none pointer-events-none transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
