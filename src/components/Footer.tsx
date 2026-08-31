import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'CI/CD Lab', href: '#pipeline-simulator' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-[#212121] dark:border-[#212121] light:border-slate-200 bg-[#080808] dark:bg-[#080808] light:bg-slate-50 transition-colors overflow-hidden">
      {/* Top subtle ambient emerald gradient line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#22d472]/50 dark:via-[#22d472]/50 light:via-[#16a34a]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
        
        {/* Main Clean Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#212121]/70 dark:border-[#212121]/70 light:border-slate-200">
          
          {/* Left: Brand Identity */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 flex items-center justify-center text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] shadow-xs shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <span className="text-base sm:text-lg font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 font-mono tracking-tight">
                  {personalInfo.name}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-emerald-100 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] text-[11px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] animate-pulse" />
                  Available 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#8e8e8e] dark:text-[#8e8e8e] light:text-slate-600 font-normal mt-0.5">
                DevOps Engineer &amp; Full-Stack Developer · Faisalabad, PK
              </p>
            </div>
          </div>

          {/* Center: Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-mono text-[#8e8e8e] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] transition-colors py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Polished Social / Connect With Me Section */}
          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <h4 className="text-sm sm:text-base font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 font-mono tracking-tight">
              Connect With Me
            </h4>

            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Muhammad Imran's GitHub Profile"
                title="GitHub"
                className="group relative flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 text-[#8e8e8e] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] hover:border-[#22d472]/60 dark:hover:border-[#22d472]/60 light:hover:border-[#16a34a]/60 hover:shadow-[0_0_12px_rgba(34,212,114,0.2)] transition-all cursor-pointer shadow-xs"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Muhammad Imran's LinkedIn Profile"
                title="LinkedIn"
                className="group relative flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 text-[#8e8e8e] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] hover:border-[#22d472]/60 dark:hover:border-[#22d472]/60 light:hover:border-[#16a34a]/60 hover:shadow-[0_0_12px_rgba(34,212,114,0.2)] transition-all cursor-pointer shadow-xs"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://wa.me/923111593570"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Muhammad Imran on WhatsApp"
                title="WhatsApp (+92 311 1593570)"
                className="group relative flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 text-[#8e8e8e] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] hover:border-[#22d472]/60 dark:hover:border-[#22d472]/60 light:hover:border-[#16a34a]/60 hover:shadow-[0_0_12px_rgba(34,212,114,0.2)] transition-all cursor-pointer shadow-xs"
              >
                <svg
                  className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                </svg>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send email to Muhammad Imran"
                title={`Email (${personalInfo.email})`}
                className="group relative flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 text-[#8e8e8e] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] hover:border-[#22d472]/60 dark:hover:border-[#22d472]/60 light:hover:border-[#16a34a]/60 hover:shadow-[0_0_12px_rgba(34,212,114,0.2)] transition-all cursor-pointer shadow-xs"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Clean Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span>© {new Date().getFullYear()} <strong className="text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 font-semibold">{personalInfo.name}</strong></span>
            <span>·</span>
            <span>BSSE Graduate (NUML)</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[11px] text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a]" />
              Pipelines Healthy
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center gap-1.5 text-xs text-[#8e8e8e] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] transition-colors cursor-pointer group min-h-[44px] min-w-[44px] px-3 py-2 rounded-xl hover:bg-[#121212] dark:hover:bg-[#121212] light:hover:bg-slate-200/60"
              title="Scroll to top of page"
              aria-label="Scroll back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

