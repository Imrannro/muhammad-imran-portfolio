import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowRight, Github, Play, ShieldCheck, Box, GitBranch } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onLaunchPipelineSimulator: (projectName: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onLaunchPipelineSimulator,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'DevOps' | 'Full-Stack' | 'Game/3D'>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a]" />
            <span className="font-mono text-xs tracking-wider text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase font-semibold">
              FEATURED CODE &amp; DEVOPS WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-[-0.04em]">
            Projects<span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">.</span>
          </h2>
          <p className="text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 text-sm sm:text-base mt-2 max-w-lg font-normal">
            Real systems built with automation-first architecture, containerization, and modern full-stack web standards.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center flex-wrap gap-1.5 bg-[#121212] dark:bg-[#121212] light:bg-slate-100 p-1.5 rounded-xl border border-[#212121] dark:border-[#212121] light:border-slate-200 shadow-sm">
          {(['All', 'DevOps', 'Full-Stack', 'Game/3D'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white font-bold shadow-[0_0_12px_rgba(34,212,114,0.3)]'
                  : 'text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#f2f2f2] dark:hover:text-white light:hover:text-slate-900 font-medium'
              }`}
            >
              {filter === 'All' ? 'ALL REPOS' : filter.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Layout for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {filteredProjects.map((project, index) => {
          const isFlagship = project.id === 'cicd-automation' && activeFilter === 'All';
          const colSpanClass = isFlagship
            ? 'lg:col-span-12'
            : 'lg:col-span-6';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`${colSpanClass} rounded-2xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 p-6 sm:p-7 relative overflow-hidden group hover:border-[#22d472]/60 dark:hover:border-[#22d472]/60 light:hover:border-[#16a34a]/60 transition-all flex flex-col justify-between shadow-xl`}
            >
              {/* Top ambient radial glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#22d472]/[0.08] dark:from-[#22d472]/[0.08] light:from-[#16a34a]/[0.06] to-transparent pointer-events-none rounded-bl-full" />

              <div className="space-y-4.5">
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs sm:text-sm text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase font-bold tracking-wider">
                      {project.tag}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-100 text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 border border-[#212121] dark:border-[#212121] light:border-slate-200 font-medium">
                      {project.badgeText}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 border border-[#22d472]/20 dark:border-[#22d472]/20 light:border-[#16a34a]/20 px-2.5 py-0.5 rounded font-bold">
                    PROD READY
                  </span>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 group-hover:text-[#22d472] dark:group-hover:text-[#22d472] light:group-hover:text-[#16a34a] transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 leading-relaxed mt-1.5 font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Key Metrics Row Bento Tiles */}
                <div className={`grid ${isFlagship ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2'} gap-2.5 pt-1`}>
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 transition-colors shadow-xs"
                    >
                      <div className="text-base sm:text-lg font-bold font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">
                        {metric.value}
                      </div>
                      <div className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 truncate font-medium mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Code / Visual Schematic Bento Cell */}
                <div className="rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-900 border border-[#212121] dark:border-[#212121] light:border-slate-800 p-3.5 font-mono text-xs sm:text-sm overflow-hidden relative shadow-inner group-hover:border-[#22d472]/30 transition-colors">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#212121] dark:border-[#212121] light:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      <span className="text-xs text-[#6b6b6b] dark:text-[#8e8e8e] ml-1 font-medium">
                        {project.id}.spec
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">CI: VERIFIED</span>
                  </div>

                  {project.type === 'DevOps' && (
                    <div className="space-y-1.5 text-xs sm:text-sm">
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#121212] dark:bg-[#121212] light:bg-slate-800/80 border border-[#212121] dark:border-[#212121] light:border-slate-700/60">
                        <span className="flex items-center gap-2 text-[#f2f2f2] light:text-slate-100 font-medium">
                          <GitBranch className="w-3.5 h-3.5 text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]" />
                          1. Lint &amp; DevSecOps Scan
                        </span>
                        <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80] font-mono font-bold">12s ✓</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#121212] dark:bg-[#121212] light:bg-slate-800/80 border border-[#212121] dark:border-[#212121] light:border-slate-700/60">
                        <span className="flex items-center gap-2 text-[#f2f2f2] light:text-slate-100 font-medium">
                          <Box className="w-3.5 h-3.5 text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]" />
                          2. Docker Multi-Stage Build
                        </span>
                        <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80] font-mono font-bold">28s ✓</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#121212] dark:bg-[#121212] light:bg-slate-800/80 border border-[#212121] dark:border-[#212121] light:border-slate-700/60">
                        <span className="flex items-center gap-2 text-[#f2f2f2] light:text-slate-100 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]" />
                          3. Zero-Downtime Deployment
                        </span>
                        <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80] font-mono font-bold">14s ✓</span>
                      </div>
                    </div>
                  )}

                  {project.type === 'Full-Stack' && (
                    <div className="space-y-1.5 text-xs sm:text-sm">
                      <div className="text-[#6b6b6b] light:text-slate-400 font-medium">// REST API &amp; Client Sync</div>
                      <div className="p-2 rounded bg-[#121212] dark:bg-[#121212] light:bg-slate-800/80 border border-[#212121] dark:border-[#212121] light:border-slate-700/60 space-y-1">
                        <div className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">GET /api/v1/products &gt; 200 OK (24ms)</div>
                        <div className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">POST /api/v1/checkout &gt; DB Commit ✓</div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#6b6b6b] light:text-slate-400 pt-0.5">
                        <span>Flask + React SPA</span>
                        <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80] font-semibold">100% CI Covered</span>
                      </div>
                    </div>
                  )}

                  {project.type === 'Game/3D' && (
                    <div className="space-y-1.5 text-xs sm:text-sm">
                      <div className="text-[#6b6b6b] light:text-slate-400 font-medium">// Godot 3D &amp; WebGL Runtime</div>
                      <div className="p-2 rounded bg-[#121212] dark:bg-[#121212] light:bg-slate-800/80 border border-[#212121] dark:border-[#212121] light:border-slate-700/60 space-y-1">
                        <div className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80]">func _physics_process(delta):</div>
                        <div className="text-[#f2f2f2] light:text-slate-200 pl-3">update_terrain_lod()</div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#6b6b6b] light:text-slate-400 pt-0.5">
                        <span>Godot 3D Engine</span>
                        <span className="text-[#22d472] dark:text-[#22d472] light:text-[#4ade80] font-semibold">Ranikot Heritage</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 group-hover:text-[#f2f2f2] dark:group-hover:text-[#f2f2f2] light:group-hover:text-slate-900 bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-100 px-2.5 py-1 rounded-md border border-[#212121] dark:border-[#212121] light:border-slate-200 transition-colors font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-[#212121]/80 dark:border-[#212121]/80 light:border-slate-200">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] hover:text-white dark:hover:text-white light:hover:text-slate-950 transition-colors cursor-pointer group/link"
                >
                  <span>Architecture breakdown</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>

                {project.type === 'DevOps' && (
                  <button
                    onClick={() => onLaunchPipelineSimulator(project.title)}
                    className="flex items-center gap-1.5 text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-100 px-3 py-1.5 rounded-lg border border-[#212121] dark:border-[#212121] light:border-slate-200 transition-colors cursor-pointer font-medium"
                  >
                    <Play className="w-3.5 h-3.5 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                    <span>Run Simulator</span>
                  </button>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 hover:text-[#f2f2f2] dark:hover:text-white light:hover:text-slate-900 transition-colors ml-auto font-medium"
                >
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
