import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, FileText, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'CI/CD Pipeline', href: '#pipeline-simulator' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 dark:bg-[#0a0a0a]/90 light:bg-white/90 backdrop-blur-md border-b border-[#212121] dark:border-[#212121] light:border-slate-200 py-3 shadow-sm'
          : 'bg-[#0a0a0a]/60 dark:bg-[#0a0a0a]/60 light:bg-white/60 backdrop-blur-sm border-b border-[#212121]/50 dark:border-[#212121]/50 light:border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Name + Green Tag */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center gap-2.5 group transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-md bg-[#121212] dark:bg-[#121212] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 flex items-center justify-center text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-mono text-sm font-semibold group-hover:border-[#22d472]/60 dark:group-hover:border-[#22d472]/60 light:group-hover:border-[#16a34a]/60 transition-colors shadow-[0_0_12px_rgba(34,212,114,0.1)]">
            &gt;_
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-bold text-base text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-tight group-hover:text-white dark:group-hover:text-white light:group-hover:text-black transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 px-1.5 py-0.5 rounded border border-[#22d472]/20 dark:border-[#22d472]/20 light:border-[#16a34a]/20 font-medium">
              DEVOPS · FULL-STACK
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#f2f2f2] dark:hover:text-white light:hover:text-slate-950 transition-colors font-medium tracking-wide py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Dark / Light Theme Toggle Button */}
          <button
            id="nav-theme-toggle-btn"
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-700 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] bg-[#121212] dark:bg-[#121212] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 hover:border-[#22d472]/40 dark:hover:border-[#22d472]/40 light:hover:border-[#16a34a]/40 transition-all cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Terminal Console quick trigger */}
          <button
            id="nav-terminal-btn"
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-700 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] bg-[#121212] dark:bg-[#121212] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 hover:border-[#22d472]/40 dark:hover:border-[#22d472]/40 light:hover:border-[#16a34a]/40 transition-all cursor-pointer font-semibold"
            title="Open Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
            <span>CLI</span>
          </button>

          {/* Resume View trigger */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 bg-[#121212] dark:bg-[#121212] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 hover:border-[#22d472] dark:hover:border-[#22d472] light:hover:border-[#16a34a] hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] transition-all cursor-pointer font-semibold"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Hire Me CTA Button */}
          <a
            id="nav-hire-btn"
            href="#contact"
            className="flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white hover:bg-[#18a355] transition-all shadow-[0_0_16px_rgba(34,212,114,0.25)] hover:shadow-[0_0_24px_rgba(34,212,114,0.4)]"
          >
            <span>Hire me</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile menu controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-700 bg-[#121212] dark:bg-[#121212] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 rounded-md"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            id="nav-mobile-terminal-btn"
            onClick={onOpenTerminal}
            className="p-1.5 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#121212] dark:bg-[#121212] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 rounded-md"
            aria-label="Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            id="nav-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/95 dark:bg-[#0a0a0a]/95 light:bg-white/95 backdrop-blur-xl border-b border-[#212121] dark:border-[#212121] light:border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#212121] dark:border-[#212121] light:border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-600 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] py-2 px-2 rounded hover:bg-[#121212] dark:hover:bg-[#121212] light:hover:bg-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 bg-[#121212] dark:bg-[#121212] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 rounded-md"
            >
              <FileText className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
              <span>View Full CV / Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-semibold bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white rounded-md"
            >
              <span>Get in Touch → Hire Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
