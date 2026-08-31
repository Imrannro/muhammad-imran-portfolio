import React, { useState } from 'react';
import { motion } from 'motion/react';
import { techStackData } from '../data/portfolioData';
import {
  Workflow,
  GitBranch,
  FileCode,
  Terminal,
  Box,
  Layers,
  Server,
  Code,
  Cpu,
  Globe,
  Binary,
  Layout,
  Palette,
  Sparkles,
  Paintbrush,
  ShieldCheck,
  ShieldAlert,
  Radio,
  GitMerge,
  Wrench,
  Gamepad2,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  GitBranch,
  FileCode,
  Terminal,
  Box,
  Layers,
  Server,
  Code,
  Cpu,
  Globe,
  Binary,
  Layout,
  Palette,
  Sparkles,
  Paintbrush,
  ShieldCheck,
  ShieldAlert,
  Radio,
  GitMerge,
  Wrench,
  Gamepad2
};

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL TECHNOLOGIES' },
    { id: 'devops', label: 'DEVOPS & CI/CD' },
    { id: 'containers', label: 'CONTAINERS & INFRA' },
    { id: 'backend', label: 'BACKEND & PYTHON' },
    { id: 'frontend', label: 'FRONTEND & UI' },
    { id: 'security', label: 'SECURITY & DEVSECOPS' },
    { id: 'tools', label: 'TOOLS & PLATFORMS' }
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? techStackData
      : techStackData.filter((item) => item.category === selectedCategory);

  return (
    <section id="stack" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors">
      <div>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a]" />
              <span className="font-mono text-xs tracking-wider text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase font-semibold">
                SYSTEM CAPABILITIES &amp; TOOLING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-[-0.04em]">
              The stack<span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">.</span>
            </h2>
            <p className="text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Battle-tested tools and languages for building automated pipelines, resilient backends, and responsive user interfaces.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex items-center flex-wrap gap-1.5 bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white p-1.5 rounded-xl border border-[#212121] dark:border-[#212121] light:border-slate-200 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white font-bold shadow-[0_0_12px_rgba(34,212,114,0.3)]'
                    : 'text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#f2f2f2] dark:hover:text-white light:hover:text-slate-900 font-medium'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredItems.map((item, index) => {
            const Icon = iconMap[item.iconName] || Code;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                key={item.name}
                className="group p-5 rounded-2xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 flex flex-col justify-between relative hover:border-[#22d472]/60 dark:hover:border-[#22d472]/60 light:hover:border-[#16a34a]/60 hover:bg-[#141414] dark:hover:bg-[#141414] light:hover:bg-slate-50/80 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#121212] dark:bg-[#121212] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 flex items-center justify-center text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] group-hover:border-[#22d472]/60 dark:group-hover:border-[#22d472]/60 light:group-hover:border-[#16a34a]/60 group-hover:text-white dark:group-hover:text-white light:group-hover:text-[#16a34a] transition-colors shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 border border-[#22d472]/20 dark:border-[#22d472]/20 light:border-[#16a34a]/20 px-2.5 py-0.5 rounded-full font-bold">
                      {item.experience}
                    </span>
                  </div>

                  <h3 className="font-mono text-base font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 group-hover:text-[#22d472] dark:group-hover:text-[#22d472] light:group-hover:text-[#16a34a] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 mt-1.5 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Proficiency Meter */}
                <div className="pt-3.5 mt-3 border-t border-[#212121]/60 dark:border-[#212121]/60 light:border-slate-100">
                  <div className="flex items-center justify-between text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 mb-1.5 font-medium">
                    <span>Proficiency</span>
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_#22d472]"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick summary strip */}
        <div className="mt-6 p-4.5 rounded-2xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs sm:text-sm text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 shadow-sm font-medium">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] animate-pulse" />
            <span>Workflow Standard: Git Feature-Branching · Strict CI Status Gates · Automated Semantic Release</span>
          </div>
          <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-bold">Zero Broken Builds in Production</span>
        </div>

      </div>
    </section>
  );
};
