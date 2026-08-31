import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, FileText, ArrowRight, CheckCircle2, ShieldCheck, Box, Activity } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const headlineWords = ['Building', 'apps', 'people', 'use'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background ambient gradient motion & glowing aura */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-[#22d472]/[0.08] via-[#38bdf8]/[0.06] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[380px] h-[380px] bg-[#38bdf8]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      {/* Main 12-Column Hero Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column (5 Cols): Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-center space-y-6"
        >
          <div className="space-y-4">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] animate-pulse" />
              <span className="font-mono text-xs sm:text-sm text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold tracking-wide">
                AVAILABLE FOR HIRE · 2026
              </span>
              <span className="text-slate-500 dark:text-slate-600">·</span>
              <span className="font-mono text-xs sm:text-sm text-[#38bdf8] dark:text-[#38bdf8] light:text-[#0284c7] font-medium">
                BSSE Graduate
              </span>
            </div>

            {/* Word-by-Word Headline Stagger */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 dark:text-[#f2f2f2] tracking-[-0.04em] leading-[1.08] flex flex-wrap gap-x-3 gap-y-1"
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
              <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">.</span>
            </motion.h1>

            {/* Subtitle & Value Proposition */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <strong className="text-slate-900 dark:text-[#f2f2f2] font-semibold">DevOps Engineer &amp; Full-Stack Developer</strong> specializing in GitHub Actions CI/CD automation, multi-stage Docker containerization, Python backends, and responsive React interfaces.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                aria-label="Explore Projects and Architectural Work"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white hover:bg-[#18a355] transition-all shadow-[0_0_20px_rgba(34,212,114,0.3)] hover:shadow-[0_0_30px_rgba(34,212,114,0.45)] cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                id="hero-view-cv-btn"
                onClick={onOpenResume}
                aria-label="Open CV and Resume viewer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-slate-800 dark:text-[#f2f2f2] bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#212121] hover:border-[#22d472] dark:hover:border-[#22d472] hover:text-[#16a34a] dark:hover:text-[#22d472] transition-all cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                id="hero-open-cli-btn"
                onClick={onOpenTerminal}
                aria-label="Launch Live Interactive Pipeline Simulator"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-[#16a34a] dark:hover:text-[#22d472] bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#212121] transition-all cursor-pointer shadow-xs"
                title="Launch Live Pipeline Simulator"
              >
                <Terminal className="w-4 h-4 text-[#16a34a] dark:text-[#22d472]" />
                <span className="hidden sm:inline font-medium">CLI Simulator</span>
              </button>
            </div>
          </div>

          {/* Quick Technology Pills */}
          <div className="pt-3.5 border-t border-slate-200 dark:border-[#212121]/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
                CORE TOOLING &amp; RUNTIME:
              </span>
              <span className="text-[11px] font-mono text-[#38bdf8] dark:text-[#38bdf8] light:text-[#0284c7] font-medium">
                100% CI/CD Tested
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'GitHub Actions', accent: 'border-[#22d472]/30 text-slate-800 dark:text-[#f2f2f2]' },
                { name: 'Docker', accent: 'border-[#38bdf8]/30 text-slate-800 dark:text-[#f2f2f2]' },
                { name: 'Python / Flask', accent: 'border-slate-300 dark:border-[#212121] text-slate-800 dark:text-[#f2f2f2]' },
                { name: 'React', accent: 'border-[#38bdf8]/30 text-slate-800 dark:text-[#f2f2f2]' },
                { name: 'Bash', accent: 'border-slate-300 dark:border-[#212121] text-slate-800 dark:text-[#f2f2f2]' },
                { name: 'DevSecOps', accent: 'border-[#22d472]/30 text-slate-800 dark:text-[#f2f2f2]' },
              ].map((tag) => (
                <span
                  key={tag.name}
                  className={`text-xs font-mono px-2.5 py-1 rounded-lg bg-white dark:bg-[#121212] border ${tag.accent} shadow-xs font-medium`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column (7 Cols): Transparent Portrait Blended Seamlessly into Hero Canvas with Interactive Motifs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 relative flex items-center justify-center lg:justify-end"
        >
          {/* Subtle Ambient Radial Glow directly behind the person */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-gradient-to-br from-[#22d472]/15 to-[#38bdf8]/10 blur-[90px] pointer-events-none" />

          {/* Floating DevOps Status Cards around portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-6 left-0 sm:left-4 z-20 hidden sm:flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/90 dark:bg-[#121212]/90 backdrop-blur-md border border-slate-200 dark:border-[#212121] shadow-lg"
          >
            <div className="w-6 h-6 rounded-lg bg-[#22d472]/15 flex items-center justify-center text-[#16a34a] dark:text-[#22d472]">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <div className="text-left font-mono">
              <div className="text-[11px] font-bold text-slate-900 dark:text-white">CI/CD: PASSING</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">Zero manual effort</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="absolute bottom-8 right-2 sm:right-6 z-20 hidden sm:flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/90 dark:bg-[#121212]/90 backdrop-blur-md border border-slate-200 dark:border-[#212121] shadow-lg"
          >
            <div className="w-6 h-6 rounded-lg bg-[#38bdf8]/15 flex items-center justify-center text-[#0284c7] dark:text-[#38bdf8]">
              <Box className="w-3.5 h-3.5" />
            </div>
            <div className="text-left font-mono">
              <div className="text-[11px] font-bold text-slate-900 dark:text-white">DOCKER: MULTI-STAGE</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">65% image reduction</div>
            </div>
          </motion.div>

          {/* The Exact Transparent Portrait with WebP + PNG fallback */}
          <div className="relative z-10 flex items-end justify-center w-full max-w-lg lg:max-w-none">
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <img
                src="/profile.png"
                alt={personalInfo.name}
                width={480}
                height={480}
                loading="eager"
                fetchPriority="high"
                referrerPolicy="no-referrer"
                className="w-auto max-w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] xl:h-[480px] object-contain object-bottom filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.45)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.75)] light:drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] select-none pointer-events-none transition-transform duration-500"
              />
            </picture>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

