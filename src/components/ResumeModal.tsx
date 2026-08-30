import React, { useState } from 'react';
import { personalInfo, experiencesData, projectsData, educationData, certificationsData, additionalInfoData } from '../data/portfolioData';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const fullCvText = `================================================================================
MUHAMMAD IMRAN
DevOps Engineer | CI/CD Automation | Cloud & Infrastructure | Software Engineering Graduate (BSSE)
Faisalabad, Punjab, Pakistan | +92 311 1593570 | imranusman1710@gmail.com
github.com/Imrannro | linkedin.com/in/muhammadimrandev10 | imran-portfolio-self.vercel.app
================================================================================

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
Results-driven DevOps Engineer and Software Engineering graduate (BSSE, National University of Modern Languages, Class of 2026) with hands-on experience designing, automating, and maintaining CI/CD pipelines using GitHub Actions, Docker, and Bash scripting. Skilled in build/test/deploy automation, containerization, version control workflows, branch protection, environment configuration management, and DevSecOps practices. Holds industry certifications in DevOps, DevSecOps, Kali Linux Fundamentals, and Git/GitHub from Simplilearn. Proven ability to deliver end-to-end software products spanning pipeline automation, containerization, full-stack web deployment, and Agile SDLC project delivery. Seeking a DevOps Engineer, Junior DevOps, Cloud Engineer, Site Reliability Engineer (SRE), or Software Engineer role to apply automation-first, security-conscious engineering practices.

CORE COMPETENCIES / TECHNICAL SKILLS
--------------------------------------------------------------------------------
* DevOps & CI/CD: GitHub Actions, CI/CD Pipeline Design & Automation, Continuous Integration, Continuous Deployment (CI/CD), YAML Workflow Configuration, Build-Test-Lint-Deploy Pipelines, Release Management, Branch Protection Rules, Environment Secrets Management, Deployment Gates, Zero-Downtime Deployment
* Containers & Infrastructure: Docker, Docker Multi-Stage Builds, Containerization, Kubernetes (Fundamentals), Infrastructure as Code (IaC) Concepts, Linux Server Administration, Bash Scripting, Environment Setup Automation
* Security / DevSecOps: DevSecOps Principles, Kali Linux, Penetration Testing Fundamentals, Network Scanning (Nmap), Vulnerability Awareness, Security Integration in CI/CD Pipelines, Ethical Hacking Basics
* Programming Languages: Python, Bash, C++, Java, HTML5, CSS3, JavaScript, GDScript
* Web Development & Frameworks: Flask (Python), REST API Development, RESTful Services, SQLite, Three.js, GSAP, Responsive Web Design, Full-Stack Web Development
* Tools & Platforms: Git, GitHub, GitHub Pages, Linux CLI, VS Code, Godot Engine, Postman
* Methodologies & Practices: Agile / Scrum, Software Development Life Cycle (SDLC), Version Control Workflows, Technical Documentation, Cross-Functional Collaboration, Sprint Planning

PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
DevOps Engineer Intern                                       June 2026 – August 2026
CodeAlpha | Remote, Pakistan
* Architected and deployed end-to-end CI/CD pipelines using GitHub Actions, reducing manual release effort by over 70%
* Designed multi-stage YAML workflow configurations covering build, lint, test, and auto-deploy stages across multiple repositories
* Configured branch protection rules, environment secrets, and deployment gates, ensuring zero broken builds reached production
* Automated repetitive release and environment setup tasks using Bash scripting and GitHub Actions workflow triggers
* Produced pipeline documentation, workflow diagrams, and runbooks that accelerated developer onboarding
* Collaborated cross-functionally with development teams to align CI/CD pipeline stages with Agile sprint release cycles and project milestones

PROJECTS
--------------------------------------------------------------------------------
Automated CI/CD Pipeline — DevOps Project                                      Solo
Stack: GitHub Actions, YAML, Docker, GitHub Pages, Bash
* Designed and implemented a fully automated CI/CD pipeline using GitHub Actions with multi-stage workflows: build -> test -> lint -> deploy
* Containerized the application using Docker, authoring a production-ready Dockerfile with multi-stage builds to minimize image size
* Configured automated deployment to GitHub Pages on every push to the main branch, achieving zero-touch releases
* Integrated Bash scripts for environment setup, dependency installation, and post-deployment health checks
* Implemented branch protection rules and status checks to enforce code quality gates before merging pull requests

Personal DevOps Portfolio Website                                            Solo
Stack: HTML, CSS, JavaScript, Three.js, GSAP, GitHub Actions, GitHub Pages
* Built a fully responsive 3D animated portfolio website featuring a Three.js WebGL background, GSAP scroll animations, and glassmorphism UI
* Implemented a complete DevOps deployment pipeline: code pushed to GitHub -> GitHub Actions workflow triggered -> auto-deployed to GitHub Pages
* Configured CI/CD workflow with automated build validation and deployment status badges displayed on the repository README
* Achieved production-grade deployment with zero manual intervention — entire release cycle automated from commit to live site

E-Commerce Web Application — Full-Stack Web Project                          Solo
Stack: HTML, CSS, JavaScript, Python (Flask), SQLite, GitHub Actions
* Developed a fully functional e-commerce web application with product listing, shopping cart, and checkout flow
* Built a RESTful backend using Python Flask with a SQLite database for product and order management
* Integrated a GitHub Actions CI/CD pipeline to automate testing and deployment on every code push
* Implemented a responsive front-end UI delivering a consistent user experience across desktop and mobile devices

Ranikot Chronicles — 3D Cultural Heritage Exploration Game (FYP) Team Lead, 3 Members
Stack: Godot Engine, GDScript, 3D Level Design, AI Pathfinding
* Led a 3-person team through the full Software Development Life Cycle (SDLC) — requirements, design, development, testing, and delivery — using Agile sprint methodology
* Engineered core 3D gameplay systems: character movement, collision detection, AI-driven NPC behavior, and environment interaction
* Designed multiple 3D levels inspired by Ranikot Fort, Sindh, preserving Pakistani cultural heritage through interactive storytelling
* Delivered a fully playable single-player exploration-adventure game, demonstrated at the university Final Year Project showcase

EDUCATION
--------------------------------------------------------------------------------
B.S. Software Engineering (BSSE)                               Graduated July 2026
National University of Modern Languages (NUML), Faisalabad, Pakistan
* CGPA: 3.1 / 4.0
* Relevant Coursework: DevOps Practices, Software Engineering, Operating Systems, AI & Machine Learning, Computer Networks, Database Systems, Data Structures & Algorithms

F.Sc Pre-Engineering                                                          2021
Students' Inn College, Faisalabad, Pakistan

CERTIFICATIONS
--------------------------------------------------------------------------------
* Introduction to DevOps and DevSecOps — Simplilearn | Issued 5th August 2026 | Credential ID: 10560590 — CI/CD pipeline design, DevSecOps practices, security integration, containerization fundamentals
* Kali Linux Fundamentals — Simplilearn | Issued 7th August 2026 | Credential ID: 10569538 — Security testing tools, penetration testing methodology, network scanning with Nmap
* Git & GitHub Essentials — Simplilearn | 2026 — Version control fundamentals, branching strategies, pull requests, merge conflict resolution, GitHub Actions basics

ADDITIONAL INFORMATION
--------------------------------------------------------------------------------
* Languages: Urdu (Native), English (Professional Working Proficiency)
* Open to: DevOps Engineer, Junior DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Software Engineer, CI/CD Engineer roles
* Availability: Immediately available for full-time roles — Graduated July 2026
================================================================================`;

  const handleDownloadCV = () => {
    setIsDownloading(true);
    const blob = new Blob([fullCvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Muhammad_Imran_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setIsDownloading(false);
    }, 800);
  };

  const handleCopyMarkdown = () => {
    const md = `# MUHAMMAD IMRAN
**DevOps Engineer | CI/CD Automation | Cloud & Infrastructure | Software Engineering Graduate (BSSE)**
Faisalabad, Punjab, Pakistan | +92 311 1593570 | imranusman1710@gmail.com
[GitHub](https://github.com/Imrannro) | [LinkedIn](https://linkedin.com/in/muhammadimrandev10) | [Portfolio](https://imran-portfolio-self.vercel.app)

---

## PROFESSIONAL SUMMARY
Results-driven DevOps Engineer and Software Engineering graduate (BSSE, National University of Modern Languages, Class of 2026) with hands-on experience designing, automating, and maintaining CI/CD pipelines using GitHub Actions, Docker, and Bash scripting. Skilled in build/test/deploy automation, containerization, version control workflows, branch protection, environment configuration management, and DevSecOps practices. Holds industry certifications in DevOps, DevSecOps, Kali Linux Fundamentals, and Git/GitHub from Simplilearn. Proven ability to deliver end-to-end software products spanning pipeline automation, containerization, full-stack web deployment, and Agile SDLC project delivery. Seeking a DevOps Engineer, Junior DevOps, Cloud Engineer, Site Reliability Engineer (SRE), or Software Engineer role to apply automation-first, security-conscious engineering practices.

---

## CORE COMPETENCIES / TECHNICAL SKILLS
- **DevOps & CI/CD**: GitHub Actions, CI/CD Pipeline Design & Automation, Continuous Integration, Continuous Deployment (CI/CD), YAML Workflow Configuration, Build-Test-Lint-Deploy Pipelines, Release Management, Branch Protection Rules, Environment Secrets Management, Deployment Gates, Zero-Downtime Deployment
- **Containers & Infrastructure**: Docker, Docker Multi-Stage Builds, Containerization, Kubernetes (Fundamentals), Infrastructure as Code (IaC) Concepts, Linux Server Administration, Bash Scripting, Environment Setup Automation
- **Security / DevSecOps**: DevSecOps Principles, Kali Linux, Penetration Testing Fundamentals, Network Scanning (Nmap), Vulnerability Awareness, Security Integration in CI/CD Pipelines, Ethical Hacking Basics
- **Programming Languages**: Python, Bash, C++, Java, HTML5, CSS3, JavaScript, GDScript
- **Web Development & Frameworks**: Flask (Python), REST API Development, RESTful Services, SQLite, Three.js, GSAP, Responsive Web Design, Full-Stack Web Development
- **Tools & Platforms**: Git, GitHub, GitHub Pages, Linux CLI, VS Code, Godot Engine, Postman
- **Methodologies & Practices**: Agile / Scrum, Software Development Life Cycle (SDLC), Version Control Workflows, Technical Documentation, Cross-Functional Collaboration, Sprint Planning

---

## PROFESSIONAL EXPERIENCE
### DevOps Engineer Intern — CodeAlpha (June 2026 – August 2026) | Remote, Pakistan
- Architected and deployed end-to-end CI/CD pipelines using GitHub Actions, reducing manual release effort by over 70%
- Designed multi-stage YAML workflow configurations covering build, lint, test, and auto-deploy stages across multiple repositories
- Configured branch protection rules, environment secrets, and deployment gates, ensuring zero broken builds reached production
- Automated repetitive release and environment setup tasks using Bash scripting and GitHub Actions workflow triggers
- Produced pipeline documentation, workflow diagrams, and runbooks that accelerated developer onboarding
- Collaborated cross-functionally with development teams to align CI/CD pipeline stages with Agile sprint release cycles and project milestones

---

## PROJECTS
### Automated CI/CD Pipeline — DevOps Project (Solo)
*Stack: GitHub Actions, YAML, Docker, GitHub Pages, Bash*
- Designed and implemented a fully automated CI/CD pipeline using GitHub Actions with multi-stage workflows: build -> test -> lint -> deploy
- Containerized the application using Docker, authoring a production-ready Dockerfile with multi-stage builds to minimize image size
- Configured automated deployment to GitHub Pages on every push to the main branch, achieving zero-touch releases
- Integrated Bash scripts for environment setup, dependency installation, and post-deployment health checks
- Implemented branch protection rules and status checks to enforce code quality gates before merging pull requests

### Personal DevOps Portfolio Website (Solo)
*Stack: HTML, CSS, JavaScript, Three.js, GSAP, GitHub Actions, GitHub Pages*
- Built a fully responsive 3D animated portfolio website featuring a Three.js WebGL background, GSAP scroll animations, and glassmorphism UI
- Implemented a complete DevOps deployment pipeline: code pushed to GitHub -> GitHub Actions workflow triggered -> auto-deployed to GitHub Pages
- Configured CI/CD workflow with automated build validation and deployment status badges displayed on the repository README
- Achieved production-grade deployment with zero manual intervention — entire release cycle automated from commit to live site

### E-Commerce Web Application — Full-Stack Web Project (Solo)
*Stack: HTML, CSS, JavaScript, Python (Flask), SQLite, GitHub Actions*
- Developed a fully functional e-commerce web application with product listing, shopping cart, and checkout flow
- Built a RESTful backend using Python Flask with a SQLite database for product and order management
- Integrated a GitHub Actions CI/CD pipeline to automate testing and deployment on every code push
- Implemented a responsive front-end UI delivering a consistent user experience across desktop and mobile devices

### Ranikot Chronicles — 3D Cultural Heritage Exploration Game (Final Year Project) (Team Lead, 3 Members)
*Stack: Godot Engine, GDScript, 3D Level Design, AI Pathfinding*
- Led a 3-person team through the full Software Development Life Cycle (SDLC) — requirements, design, development, testing, and delivery — using Agile sprint methodology
- Engineered core 3D gameplay systems: character movement, collision detection, AI-driven NPC behavior, and environment interaction
- Designed multiple 3D levels inspired by Ranikot Fort, Sindh, preserving Pakistani cultural heritage through interactive storytelling
- Delivered a fully playable single-player exploration-adventure game, demonstrated at the university Final Year Project showcase

---

## EDUCATION
- **B.S. Software Engineering (BSSE)** — National University of Modern Languages (NUML), Faisalabad, Pakistan (Graduated July 2026)
  - CGPA: 3.1 / 4.0
  - Relevant Coursework: DevOps Practices, Software Engineering, Operating Systems, AI & Machine Learning, Computer Networks, Database Systems, Data Structures & Algorithms
- **F.Sc Pre-Engineering** — Students' Inn College, Faisalabad, Pakistan (2021)

---

## CERTIFICATIONS
- **Introduction to DevOps and DevSecOps** — Simplilearn | Issued 5th August 2026 | Credential ID: 10560590 (CI/CD pipeline design, DevSecOps practices, security integration, containerization fundamentals)
- **Kali Linux Fundamentals** — Simplilearn | Issued 7th August 2026 | Credential ID: 10569538 (Security testing tools, penetration testing methodology, network scanning with Nmap)
- **Git & GitHub Essentials** — Simplilearn | 2026 (Version control fundamentals, branching strategies, pull requests, merge conflict resolution, GitHub Actions basics)

---

## ADDITIONAL INFORMATION
- **Languages**: Urdu (Native), English (Professional Working Proficiency)
- **Open to**: DevOps Engineer, Junior DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Software Engineer, CI/CD Engineer roles
- **Availability**: Immediately available for full-time roles — Graduated July 2026
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0a0a0a]/80 dark:bg-[#0a0a0a]/80 light:bg-slate-900/60 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden my-4 sm:my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-4 bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-100 border-b border-[#212121] dark:border-[#212121] light:border-slate-200">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a]" />
            <span className="font-mono text-xs text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 font-semibold tracking-wider">
              MUHAMMAD_IMRAN_OFFICIAL_CV
            </span>
            <span className="text-[10px] font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 px-2 py-0.5 rounded border border-[#22d472]/20 dark:border-[#22d472]/20 light:border-[#16a34a]/20">
              ATS-COMPLIANT
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-300 hover:border-[#22d472] dark:hover:border-[#22d472] light:hover:border-[#16a34a] hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] transition-colors cursor-pointer"
              title="Download ATS-Friendly Resume File"
            >
              <Download className="w-3.5 h-3.5 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
              <span>{isDownloading ? 'Downloading...' : 'Download File'}</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-700 hover:text-[#22d472] dark:hover:text-[#22d472] light:hover:text-[#16a34a] bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-300 transition-colors cursor-pointer"
              title="Copy as Markdown"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied MD' : 'Copy MD'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-mono bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white font-semibold hover:bg-[#18a355] transition-colors cursor-pointer shadow-sm"
              title="Print or Save as Official PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save PDF / Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 hover:text-[#f2f2f2] dark:hover:text-white light:hover:text-slate-900 rounded transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body (Exact 1:1 match with provided PDF) */}
        <div id="printable-resume" className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto space-y-6 bg-[#0e0e0e] dark:bg-[#0e0e0e] light:bg-white text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-[#212121] dark:border-[#212121] light:border-slate-300 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-wider uppercase">
              MUHAMMAD IMRAN
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">
              DevOps Engineer | CI/CD Automation | Cloud &amp; Infrastructure | Software Engineering Graduate (BSSE)
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                Faisalabad, Punjab, Pakistan
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                +92 311 1593570
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                imranusman1710@gmail.com
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] pt-1">
              <a href="https://github.com/Imrannro" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3 h-3" /> github.com/Imrannro
              </a>
              <span>|</span>
              <a href="https://linkedin.com/in/muhammadimrandev10" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3" /> linkedin.com/in/muhammadimrandev10
              </a>
              <span>|</span>
              <a href="https://imran-portfolio-self.vercel.app" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <ExternalLink className="w-3 h-3" /> imran-portfolio-self.vercel.app
              </a>
            </div>
          </div>

          {/* 1. PROFESSIONAL SUMMARY */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] tracking-wider uppercase font-bold border-b border-[#212121] dark:border-[#212121] light:border-slate-300 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-[13px] text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 leading-relaxed font-light text-justify">
              Results-driven DevOps Engineer and Software Engineering graduate (BSSE, National University of Modern Languages, Class of 2026) with hands-on experience designing, automating, and maintaining CI/CD pipelines using GitHub Actions, Docker, and Bash scripting. Skilled in build/test/deploy automation, containerization, version control workflows, branch protection, environment configuration management, and DevSecOps practices. Holds industry certifications in DevOps, DevSecOps, Kali Linux Fundamentals, and Git/GitHub from Simplilearn. Proven ability to deliver end-to-end software products spanning pipeline automation, containerization, full-stack web deployment, and Agile SDLC project delivery. Seeking a DevOps Engineer, Junior DevOps, Cloud Engineer, Site Reliability Engineer (SRE), or Software Engineer role to apply automation-first, security-conscious engineering practices.
            </p>
          </div>

          {/* 2. CORE COMPETENCIES / TECHNICAL SKILLS */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] tracking-wider uppercase font-bold border-b border-[#212121] dark:border-[#212121] light:border-slate-300 pb-1">
              CORE COMPETENCIES / TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-[12.5px] font-mono text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-800">
              <p><strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">DevOps &amp; CI/CD:</strong> GitHub Actions, CI/CD Pipeline Design &amp; Automation, Continuous Integration, Continuous Deployment (CI/CD), YAML Workflow Configuration, Build-Test-Lint-Deploy Pipelines, Release Management, Branch Protection Rules, Environment Secrets Management, Deployment Gates, Zero-Downtime Deployment</p>
              <p><strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Containers &amp; Infrastructure:</strong> Docker, Docker Multi-Stage Builds, Containerization, Kubernetes (Fundamentals), Infrastructure as Code (IaC) Concepts, Linux Server Administration, Bash Scripting, Environment Setup Automation</p>
              <p><strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Security / DevSecOps:</strong> DevSecOps Principles, Kali Linux, Penetration Testing Fundamentals, Network Scanning (Nmap), Vulnerability Awareness, Security Integration in CI/CD Pipelines, Ethical Hacking Basics</p>
              <p><strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Programming Languages:</strong> Python, Bash, C++, Java, HTML5, CSS3, JavaScript, GDScript</p>
              <p><strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Web Development &amp; Frameworks:</strong> Flask (Python), REST API Development, RESTful Services, SQLite, Three.js, GSAP, Responsive Web Design, Full-Stack Web Development</p>
              <p><strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Tools &amp; Platforms:</strong> Git, GitHub, GitHub Pages, Linux CLI, VS Code, Godot Engine, Postman</p>
              <p><strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Methodologies &amp; Practices:</strong> Agile / Scrum, Software Development Life Cycle (SDLC), Version Control Workflows, Technical Documentation, Cross-Functional Collaboration, Sprint Planning</p>
            </div>
          </div>

          {/* 3. PROFESSIONAL EXPERIENCE */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] tracking-wider uppercase font-bold border-b border-[#212121] dark:border-[#212121] light:border-slate-300 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 text-sm">DevOps Engineer Intern</span>
                </div>
                <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">June 2026 – August 2026</span>
              </div>
              <div className="text-xs font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500">
                CodeAlpha | Remote, Pakistan
              </div>
              <ul className="space-y-1.5 text-xs sm:text-[12.5px] text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 list-disc pl-5 font-light">
                <li>Architected and deployed end-to-end CI/CD pipelines using GitHub Actions, reducing manual release effort by over 70%</li>
                <li>Designed multi-stage YAML workflow configurations covering build, lint, test, and auto-deploy stages across multiple repositories</li>
                <li>Configured branch protection rules, environment secrets, and deployment gates, ensuring zero broken builds reached production</li>
                <li>Automated repetitive release and environment setup tasks using Bash scripting and GitHub Actions workflow triggers</li>
                <li>Produced pipeline documentation, workflow diagrams, and runbooks that accelerated developer onboarding</li>
                <li>Collaborated cross-functionally with development teams to align CI/CD pipeline stages with Agile sprint release cycles and project milestones</li>
              </ul>
            </div>
          </div>

          {/* 4. PROJECTS */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] tracking-wider uppercase font-bold border-b border-[#212121] dark:border-[#212121] light:border-slate-300 pb-1">
              PROJECTS
            </h2>

            {/* Project 1: Automated CI/CD Pipeline */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 text-[13px]">
                  Automated CI/CD Pipeline — DevOps Project
                </span>
                <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">Solo</span>
              </div>
              <div className="text-[11.5px] font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500">
                Stack: GitHub Actions, YAML, Docker, GitHub Pages, Bash
              </div>
              <ul className="space-y-1 text-xs sm:text-[12.5px] text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 list-disc pl-5 font-light">
                <li>Designed and implemented a fully automated CI/CD pipeline using GitHub Actions with multi-stage workflows: build → test → lint → deploy</li>
                <li>Containerized the application using Docker, authoring a production-ready Dockerfile with multi-stage builds to minimize image size</li>
                <li>Configured automated deployment to GitHub Pages on every push to the main branch, achieving zero-touch releases</li>
                <li>Integrated Bash scripts for environment setup, dependency installation, and post-deployment health checks</li>
                <li>Implemented branch protection rules and status checks to enforce code quality gates before merging pull requests</li>
              </ul>
            </div>

            {/* Project 2: Personal DevOps Portfolio Website */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 text-[13px]">
                  Personal DevOps Portfolio Website
                </span>
                <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">Solo</span>
              </div>
              <div className="text-[11.5px] font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500">
                Stack: HTML, CSS, JavaScript, Three.js, GSAP, GitHub Actions, GitHub Pages
              </div>
              <ul className="space-y-1 text-xs sm:text-[12.5px] text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 list-disc pl-5 font-light">
                <li>Built a fully responsive 3D animated portfolio website featuring a Three.js WebGL background, GSAP scroll animations, and glassmorphism UI</li>
                <li>Implemented a complete DevOps deployment pipeline: code pushed to GitHub → GitHub Actions workflow triggered → auto-deployed to GitHub Pages</li>
                <li>Configured CI/CD workflow with automated build validation and deployment status badges displayed on the repository README</li>
                <li>Achieved production-grade deployment with zero manual intervention — entire release cycle automated from commit to live site</li>
              </ul>
            </div>

            {/* Project 3: E-Commerce Web Application */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 text-[13px]">
                  E-Commerce Web Application — Full-Stack Web Project
                </span>
                <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">Solo</span>
              </div>
              <div className="text-[11.5px] font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500">
                Stack: HTML, CSS, JavaScript, Python (Flask), SQLite, GitHub Actions
              </div>
              <ul className="space-y-1 text-xs sm:text-[12.5px] text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 list-disc pl-5 font-light">
                <li>Developed a fully functional e-commerce web application with product listing, shopping cart, and checkout flow</li>
                <li>Built a RESTful backend using Python Flask with a SQLite database for product and order management</li>
                <li>Integrated a GitHub Actions CI/CD pipeline to automate testing and deployment on every code push</li>
                <li>Implemented a responsive front-end UI delivering a consistent user experience across desktop and mobile devices</li>
              </ul>
            </div>

            {/* Project 4: Ranikot Chronicles */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 text-[13px]">
                  Ranikot Chronicles — 3D Cultural Heritage Exploration Game (Final Year Project)
                </span>
                <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">Team Lead, 3 Members</span>
              </div>
              <div className="text-[11.5px] font-mono text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500">
                Stack: Godot Engine, GDScript, 3D Level Design, AI Pathfinding
              </div>
              <ul className="space-y-1 text-xs sm:text-[12.5px] text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 list-disc pl-5 font-light">
                <li>Led a 3-person team through the full Software Development Life Cycle (SDLC) — requirements, design, development, testing, and delivery — using Agile sprint methodology</li>
                <li>Engineered core 3D gameplay systems: character movement, collision detection, AI-driven NPC behavior, and environment interaction</li>
                <li>Designed multiple 3D levels inspired by Ranikot Fort, Sindh, preserving Pakistani cultural heritage through interactive storytelling</li>
                <li>Delivered a fully playable single-player exploration-adventure game, demonstrated at the university Final Year Project showcase</li>
              </ul>
            </div>
          </div>

          {/* 5. EDUCATION */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] tracking-wider uppercase font-bold border-b border-[#212121] dark:border-[#212121] light:border-slate-300 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3 text-xs font-mono">
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 text-[13px]">
                    B.S. Software Engineering (BSSE)
                  </span>
                  <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">Graduated July 2026</span>
                </div>
                <div className="text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-600">
                  National University of Modern Languages (NUML), Faisalabad, Pakistan
                </div>
                <div className="text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 text-xs">
                  • <strong>CGPA:</strong> 3.1 / 4.0
                </div>
                <div className="text-[#f2f2f2]/80 dark:text-[#f2f2f2]/80 light:text-slate-600 text-xs">
                  • <strong>Relevant Coursework:</strong> DevOps Practices, Software Engineering, Operating Systems, AI &amp; Machine Learning, Computer Networks, Database Systems, Data Structures &amp; Algorithms
                </div>
              </div>

              <div className="space-y-1 pt-1 border-t border-[#212121]/40 dark:border-[#212121]/40 light:border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 text-[13px]">
                    F.Sc Pre-Engineering
                  </span>
                  <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold">2021</span>
                </div>
                <div className="text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-600">
                  Students' Inn College, Faisalabad, Pakistan
                </div>
              </div>
            </div>
          </div>

          {/* 6. CERTIFICATIONS */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] tracking-wider uppercase font-bold border-b border-[#212121] dark:border-[#212121] light:border-slate-300 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#161616] dark:bg-[#161616] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">
                  <span>Introduction to DevOps and DevSecOps — Simplilearn</span>
                  <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Issued 5th August 2026 | ID: 10560590</span>
                </div>
                <p className="text-[11.5px] text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 mt-1">
                  CI/CD pipeline design, DevSecOps practices, security integration, containerization fundamentals
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#161616] dark:bg-[#161616] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">
                  <span>Kali Linux Fundamentals — Simplilearn</span>
                  <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Issued 7th August 2026 | ID: 10569538</span>
                </div>
                <p className="text-[11.5px] text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 mt-1">
                  Security testing tools, penetration testing methodology, network scanning with Nmap
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#161616] dark:bg-[#161616] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">
                  <span>Git &amp; GitHub Essentials — Simplilearn</span>
                  <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">2026</span>
                </div>
                <p className="text-[11.5px] text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 mt-1">
                  Version control fundamentals, branching strategies, pull requests, merge conflict resolution, GitHub Actions basics
                </p>
              </div>
            </div>
          </div>

          {/* 7. ADDITIONAL INFORMATION */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] tracking-wider uppercase font-bold border-b border-[#212121] dark:border-[#212121] light:border-slate-300 pb-1">
              ADDITIONAL INFORMATION
            </h2>
            <div className="space-y-1 text-xs sm:text-[12.5px] font-mono text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-800">
              <p>• <strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Languages:</strong> Urdu (Native), English (Professional Working Proficiency)</p>
              <p>• <strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Open to:</strong> DevOps Engineer, Junior DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Software Engineer, CI/CD Engineer roles</p>
              <p>• <strong className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">Availability:</strong> Immediately available for full-time roles — Graduated July 2026</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
