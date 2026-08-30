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

function PortfolioApp() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToPipeline = () => {
    const el = document.getElementById('pipeline-simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-[#f8fafc] text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 relative selection:bg-[#22d472]/20 selection:text-[#22d472] transition-colors duration-200">
      {/* Fixed Navbar with Theme Toggle */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenTerminal={scrollToPipeline}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Interactive Bento Sandbox */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenTerminal={scrollToPipeline}
        />

        {/* 2. Featured Projects with Mockups & Metrics */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
          onLaunchPipelineSimulator={() => scrollToPipeline()}
        />

        {/* 3. The Tech Stack (Categorized Cards & Proficiency) */}
        <TechStack />

        {/* 4. Live Interactive CI/CD Pipeline Simulator & CLI Terminal */}
        <PipelineSimulator />

        {/* 5. Experience, Education & Verified Certifications */}
        <Experience />

        {/* 6. About Me & Engineering Philosophy */}
        <About onOpenResume={() => setResumeModalOpen(true)} />

        {/* 7. Testimonials & Endorsements */}
        <Testimonials />

        {/* 8. Contact CTA & Direct Dispatch Form */}
        <ContactCTA />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRunSimulation={() => {
          setSelectedProject(null);
          scrollToPipeline();
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
