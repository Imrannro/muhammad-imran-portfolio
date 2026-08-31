import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechStack } from './components/TechStack';
import { PipelineSimulator } from './components/PipelineSimulator';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => (
  <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} aria-hidden="true">
    <div className="border-t border-slate-200/80 dark:border-white/[0.08] transition-colors duration-200" />
  </div>
);

function PortfolioApp() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectForPipeline, setSelectedProjectForPipeline] = useState<string | null>(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToPipeline = (projectName?: string) => {
    if (projectName) {
      setSelectedProjectForPipeline(projectName);
    }
    const el = document.getElementById('pipeline-simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0a0a0a] text-slate-900 dark:text-[#f2f2f2] relative selection:bg-[#22d472]/25 selection:text-[#15803d] dark:selection:text-[#22d472] transition-colors duration-200">
      {/* Fixed Navbar with Theme Toggle */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenTerminal={() => scrollToPipeline()}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Profile Photo & Interactive Motion */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenTerminal={() => scrollToPipeline()}
        />

        <SectionDivider />

        {/* 2. Featured Projects with Architecture Breakdowns */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
          onLaunchPipelineSimulator={(projectName) => scrollToPipeline(projectName)}
        />

        <SectionDivider />

        {/* 3. The Tech Stack */}
        <TechStack />

        <SectionDivider />

        {/* 4. Live Interactive CI/CD Pipeline Simulator & CLI Terminal */}
        <PipelineSimulator
          selectedProjectTitle={selectedProjectForPipeline}
          onClearSelectedProject={() => setSelectedProjectForPipeline(null)}
        />

        <SectionDivider />

        {/* 5. Experience, Education & Verified Certifications */}
        <Experience />

        <SectionDivider />

        {/* 6. About Me & Engineering Philosophy */}
        <About onOpenResume={() => setResumeModalOpen(true)} />

        <SectionDivider />

        {/* 7. Testimonials & Endorsements */}
        <Testimonials />

        <SectionDivider />

        {/* 8. Contact CTA & Direct Dispatch Form */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRunSimulation={(projectName) => {
          setSelectedProject(null);
          scrollToPipeline(projectName);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

