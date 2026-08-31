import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Terminal, ArrowRight, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRunSimulation?: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRunSimulation
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/80 dark:bg-[#0a0a0a]/80 light:bg-slate-900/60 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-100 border-b border-[#212121] dark:border-[#212121] light:border-slate-200">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 border border-[#22d472]/20 dark:border-[#22d472]/20 light:border-[#16a34a]/20 px-2.5 py-0.5 rounded font-semibold">
              {project.tag}
            </span>
            <span className="font-mono text-xs text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 hidden sm:inline">
              // {project.id}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label={`Close ${project.title} details dialog`}
            className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 hover:text-[#f2f2f2] dark:hover:text-white light:hover:text-slate-900 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Title & Badge */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#212121] dark:bg-[#212121] light:bg-slate-100 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] border border-[#212121] dark:border-[#212121] light:border-slate-200">
                {project.badgeText}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-600 leading-relaxed font-light">
            {project.fullDesc}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 flex flex-col justify-center shadow-sm"
              >
                <span className="text-xl sm:text-2xl font-bold text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-mono">
                  {m.value}
                </span>
                <span className="text-[11px] font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-wider text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
              Key Implementation Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#161616] dark:bg-[#161616] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200"
                >
                  <span className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] mt-0.5">&gt;</span>
                  <p className="text-xs sm:text-sm text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 leading-relaxed font-light">
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Visualizer / Code Structure */}
          {project.architectureSnippet && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono tracking-wider text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 uppercase flex items-center gap-2 font-bold">
                <Layers className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                Pipeline &amp; Architecture Flow
              </h4>
              <pre className="p-4 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-950 border border-[#212121] dark:border-[#212121] light:border-slate-800 font-mono text-xs text-[#22d472] overflow-x-auto leading-relaxed">
                {project.architectureSnippet}
              </pre>
            </div>
          )}

          {/* Tech stack badges */}
          <div>
            <span className="text-xs font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 block mb-2 font-medium">Technologies Used:</span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 px-2.5 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-100 border-t border-[#212121] dark:border-[#212121] light:border-slate-200">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-300 hover:border-[#22d472] dark:hover:border-[#22d472] light:hover:border-[#16a34a] hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 border border-[#22d472]/30 dark:border-[#22d472]/30 light:border-[#16a34a]/30 hover:bg-[#22d472]/20 transition-colors font-medium"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Deployment</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-600 hover:text-[#f2f2f2] dark:hover:text-black light:hover:text-black transition-colors cursor-pointer"
          >
            Close Window [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
