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
            <span className="font-mono text-xs tracking-wider text-[#16a34a] dark:text-[#22d472] uppercase font-semibold">
              FEATURED CODE &amp; DEVOPS WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-[#f2f2f2] tracking-[-0.04em]">
            Projects<span className="text-[#16a34a] dark:text-[#22d472]">.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-lg font-normal">
            Real systems built with automation-first architecture, containerization, and modern full-stack web standards.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center flex-wrap gap-1.5 bg-white dark:bg-[#121212] p-1.5 rounded-xl border border-slate-200 dark:border-[#212121] shadow-xs">
          {(['All', 'DevOps', 'Full-Stack', 'Game/3D'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-label={`Filter projects by ${filter}`}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white font-bold shadow-[0_0_12px_rgba(34,212,114,0.3)]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium'
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
              className={`${colSpanClass} rounded-2xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#212121] p-6 sm:p-7 relative overflow-hidden group hover:border-[#22d472]/60 dark:hover:border-[#22d472]/60 transition-all flex flex-col justify-between shadow-lg hover:shadow-xl`}
            >
              {/* Top ambient radial glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#22d472]/10 via-[#38bdf8]/5 to-transparent pointer-events-none rounded-bl-full" />

              <div className="space-y-4.5">
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs sm:text-sm text-[#16a34a] dark:text-[#22d472] uppercase font-bold tracking-wider">
                      {project.tag}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-[#0a0a0a] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#212121] font-medium">
                      {project.badgeText}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#0284c7] dark:text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20 px-2.5 py-0.5 rounded font-bold">
                    PROD READY
                  </span>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#f2f2f2] group-hover:text-[#16a34a] dark:group-hover:text-[#22d472] transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-1.5 font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Key Metrics Row Bento Tiles */}
                <div className={`grid ${isFlagship ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2'} gap-2.5 pt-1`}>
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#212121] transition-colors shadow-xs"
                    >
                      <div className="text-base sm:text-lg font-bold font-mono text-[#16a34a] dark:text-[#22d472]">
                        {metric.value}
                      </div>
                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate font-medium mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Code / Visual Schematic Bento Cell */}
                <div className="rounded-xl bg-slate-900 dark:bg-[#0a0a0a] border border-slate-800 dark:border-[#212121] p-3.5 font-mono text-xs sm:text-sm overflow-hidden relative shadow-inner group-hover:border-[#22d472]/30 transition-colors">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 dark:border-[#212121]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      <span className="text-xs text-slate-400 ml-1 font-medium">
                        {project.id}.spec
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#4ade80] dark:text-[#22d472]">CI: VERIFIED</span>
                  </div>

                  {project.type === 'DevOps' && (
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                      <div className="flex items-center justify-between p-1.5 rounded bg-slate-800/80 dark:bg-[#121212] border border-slate-700/60 dark:border-[#212121]">
                        <span className="flex items-center gap-2 font-medium text-slate-100">
                          <GitBranch className="w-3.5 h-3.5 text-[#38bdf8]" />
                          1. Lint &amp; DevSecOps Scan
                        </span>
                        <span className="text-[#4ade80] font-mono font-bold">12s ✓</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-slate-800/80 dark:bg-[#121212] border border-slate-700/60 dark:border-[#212121]">
                        <span className="flex items-center gap-2 font-medium text-slate-100">
                          <Box className="w-3.5 h-3.5 text-[#38bdf8]" />
                          2. Docker Multi-Stage Build
                        </span>
                        <span className="text-[#4ade80] font-mono font-bold">28s ✓</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-slate-800/80 dark:bg-[#121212] border border-slate-700/60 dark:border-[#212121]">
                        <span className="flex items-center gap-2 font-medium text-slate-100">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#4ade80]" />
                          3. Zero-Downtime Deployment
                        </span>
                        <span className="text-[#4ade80] font-mono font-bold">14s ✓</span>
                      </div>
                    </div>
                  )}

                  {project.type === 'Full-Stack' && (
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                      <div className="text-slate-400 font-medium">// REST API &amp; Client Sync</div>
                      <div className="p-2 rounded bg-slate-800/80 dark:bg-[#121212] border border-slate-700/60 dark:border-[#212121] space-y-1">
                        <div className="text-[#38bdf8]">GET /api/v1/products &gt; 200 OK (24ms)</div>
                        <div className="text-[#4ade80]">POST /api/v1/checkout &gt; DB Commit ✓</div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400 pt-0.5">
                        <span>Flask + React SPA</span>
                        <span className="text-[#4ade80] font-semibold">100% CI Covered</span>
                      </div>
                    </div>
                  )}

                  {project.type === 'Game/3D' && (
                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                      <div className="text-slate-400 font-medium">// Godot 3D &amp; WebGL Runtime</div>
                      <div className="p-2 rounded bg-slate-800/80 dark:bg-[#121212] border border-slate-700/60 dark:border-[#212121] space-y-1">
                        <div className="text-[#38bdf8]">func _physics_process(delta):</div>
                        <div className="text-slate-200 pl-3">update_terrain_lod()</div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400 pt-0.5">
                        <span>Godot 3D Engine</span>
                        <span className="text-[#4ade80] font-semibold">Ranikot Heritage</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white bg-slate-100 dark:bg-[#0a0a0a] px-2.5 py-1 rounded-md border border-slate-200 dark:border-[#212121] transition-colors font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-slate-200 dark:border-[#212121]/80">
                <button
                  onClick={() => onSelectProject(project)}
                  aria-label={`View architecture breakdown for ${project.title}`}
                  className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#16a34a] dark:text-[#22d472] hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer group/link"
                >
                  <span>Architecture breakdown</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>

                {project.type === 'DevOps' && (
                  <button
                    onClick={() => onLaunchPipelineSimulator(project.title)}
                    aria-label={`Run live CI/CD pipeline simulation for ${project.title}`}
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-[#16a34a] dark:hover:text-[#22d472] bg-slate-100 dark:bg-[#0a0a0a] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#212121] transition-colors cursor-pointer font-medium"
                  >
                    <Play className="w-3.5 h-3.5 text-[#16a34a] dark:text-[#22d472]" />
                    <span>Run Simulator</span>
                  </button>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View source code for ${project.title} on GitHub`}
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors ml-auto font-medium"
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

