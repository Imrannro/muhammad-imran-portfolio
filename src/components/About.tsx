import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Globe } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const statChips = [
    { label: 'Degree', value: 'BSSE 2026' },
    { label: 'CGPA Standing', value: '3.1 / 4.0' },
    { label: 'DevOps Intern', value: 'CodeAlpha' },
    { label: 'Availability', value: 'Immediate' }
  ];

  return (
    <section id="about" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors">
      <div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Bio & Stat Chips */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a]" />
                <span className="font-mono text-xs tracking-wider text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase font-semibold">
                  BACKGROUND &amp; PHILOSOPHY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-[-0.04em]">
                About me<span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">.</span>
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-sm sm:text-base text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 font-normal leading-relaxed">
              <p>
                I am a results-driven <span className="text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 font-medium">DevOps Engineer and Software Engineering graduate (BSSE, Class of 2026)</span> from the National University of Modern Languages. My focus centers on automated cloud delivery, Linux systems engineering, and resilient full-stack architectures.
              </p>
              <p>
                My engineering approach is <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-medium">automation-first and security-conscious</span>. I build deterministic multi-stage CI/CD pipelines in GitHub Actions, optimized multi-stage Docker builds that eliminate container bloat, and automated health checks ensuring reliable releases with zero downtime.
              </p>
              <p>
                Whether designing production deployment workflows, engineering backend APIs, or building responsive web interfaces, I deliver systems that are performant, maintainable, and built to scale cleanly.
              </p>
            </div>

            {/* Stat Chips Grid as Bento Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {statChips.map((chip, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 flex flex-col justify-center hover:border-[#22d472]/40 dark:hover:border-[#22d472]/40 light:hover:border-[#16a34a]/40 transition-colors shadow-sm"
                >
                  <span className="text-base sm:text-lg font-bold text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-mono">
                    {chip.value}
                  </span>
                  <span className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 mt-0.5 font-semibold">
                    {chip.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenResume}
                aria-label="Read full technical resume, skills, and certifications"
                className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors cursor-pointer"
              >
                <span>Read Full Technical Resume &amp; Runbooks</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Setup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 p-5 sm:p-6 shadow-xl overflow-hidden">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#212121] dark:border-[#212121] light:border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#161616] dark:bg-[#161616] light:bg-slate-100 flex items-center justify-center border border-[#22d472]/60 dark:border-[#22d472]/60 light:border-[#16a34a]/60 shadow-sm flex-shrink-0">
                    <img
                      src={personalInfo.avatarImage || '/profile.png'}
                      alt={personalInfo.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">{personalInfo.name}</h4>
                    <p className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">@Imrannro · Faisalabad, PK</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 border border-[#22d472]/20 dark:border-[#22d472]/20 light:border-[#16a34a]/20 px-2.5 py-1 rounded-md font-bold tracking-wider">
                  ONLINE
                </span>
              </div>

              {/* Developer Environment Mock Terminal Display */}
              <div className="rounded-xl bg-[#121212] dark:bg-[#121212] light:bg-slate-950 border border-[#212121] dark:border-[#212121] light:border-slate-800 p-4 font-mono text-xs sm:text-sm space-y-2.5 text-[#f2f2f2]">
                <div className="text-[#6b6b6b] flex items-center justify-between pb-1.5 border-b border-[#212121]/60 text-xs">
                  <span>ARCH-LINUX // SESSION ACTIVE</span>
                  <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80] font-bold">TTY1</span>
                </div>

                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="text-[#6b6b6b]">// current focus &amp; active stack</p>
                  <p>
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">target_roles</span> = [
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">"DevOps Engineer"</span>,
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">"Cloud Engineer"</span>,
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">"SRE"</span>
                    ];
                  </p>
                  <p>
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">availability</span> ={' '}
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">"Immediate / Full-time"</span>;
                  </p>
                  <p>
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">languages</span> = [<span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">"Urdu (Native)"</span>, <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">"English (Proficient)"</span>];
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#212121]/60 grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#0a0a0a] border border-[#212121]">
                    <span className="text-[#6b6b6b] block text-[11px]">Codebase Quality</span>
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80] font-bold">100% CI Enforced</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0a0a0a] border border-[#212121]">
                    <span className="text-[#6b6b6b] block text-[11px]">Timezone Match</span>
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80] font-bold">UTC+5 / Remote Ready</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Contact Bar */}
              <div className="mt-3 pt-2.5 border-t border-[#212121] dark:border-[#212121] light:border-slate-100 flex items-center justify-between text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Globe className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                  Global Remote Ready
                </span>
                <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">BSSE Graduate 2026</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
