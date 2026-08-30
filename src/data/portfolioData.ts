import { Project, TechItem, ExperienceItem, EducationItem, Certification, GitHubStats, Testimonial } from '../types';

export const personalInfo = {
  name: 'Muhammad Imran',
  title: 'DevOps Engineer | CI/CD Automation | Cloud & Infrastructure | Software Engineering Graduate (BSSE)',
  avatarImage: '/profile.png',
  headline: 'Building pipelines & web apps systems actually scale on.',
  subheadline: 'DevOps Engineer and Software Engineering graduate (BSSE, National University of Modern Languages, Class of 2026) specializing in GitHub Actions CI/CD automation, Docker multi-stage containerization, Python/Node.js backends, and responsive modern web apps.',
  email: 'imranusman1710@gmail.com',
  phone: '+92 311 1593570',
  whatsapp: 'https://wa.me/923111593570',
  whatsappNumber: '+92 311 1593570',
  location: 'Faisalabad, Punjab, Pakistan',
  availability: 'Immediately available for full-time roles — Graduated July 2026',
  github: 'https://github.com/Imrannro',
  githubDisplay: 'github.com/Imrannro',
  githubUsername: 'Imrannro',
  linkedin: 'https://linkedin.com/in/muhammadimrandev10',
  linkedinDisplay: 'linkedin.com/in/muhammadimrandev10',
  portfolioUrl: 'https://imrannro.github.io/imran-portfolio',
  portfolioDisplay: 'imrannro.github.io/imran-portfolio',
  yearsExp: 'BSSE 2026',
  projectsCount: '4 Key Projects',
};

export const heroCodeSnippets = {
  config: `// imran.profile.ts
export const engineer = {
  name: "Muhammad Imran",
  role: "DevOps Engineer & Full-Stack",
  core: ["GitHub Actions", "Docker", "Python", "React"],
  certifications: ["DevSecOps", "Kali Linux", "Git/CI/CD"],
  pipelineSuccessRate: "99.98%",
  openForHire: true
};`,
  workflow: `# .github/workflows/production-pipeline.yml
name: Production CI/CD Pipeline
on:
  push:
    branches: [ main ]
jobs:
  test-build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Test Suites & Lint
        run: npm run test:ci && npm run lint
      - name: Docker Multi-Stage Build
        run: docker build -t app:prod --target production .
      - name: Security Vulnerability Scan
        run: trivy image app:prod --severity HIGH,CRITICAL
      - name: Zero-Downtime Deployment
        run: bash scripts/deploy.sh --env=production`,
  terminal: `$ whoami
imran@production-node-01:~$ git status
On branch main. Your branch is up to date with 'origin/main'.
imran@production-node-01:~$ docker ps
CONTAINER ID   IMAGE                 STATUS         PORTS
a19f38c9102b   imran/portfolio:v2.6  Up 42 days     0.0.0.0:3000->3000/tcp
e73c8819d45e   imran/api-gateway:v1  Up 42 days     0.0.0.0:8080->8080/tcp`
};

export const projectsData: Project[] = [
  {
    id: 'cicd-automation',
    title: 'Automated CI/CD Pipeline',
    category: 'DevOps Project',
    tag: 'GITHUB ACTIONS · YAML · DOCKER · GITHUB PAGES · BASH',
    badgeText: 'SOLO',
    type: 'DevOps',
    shortDesc: 'Designed and implemented a fully automated CI/CD pipeline using GitHub Actions with multi-stage workflows: build → test → lint → deploy.',
    fullDesc: 'Containerized the application using Docker, authoring a production-ready Dockerfile with multi-stage builds to minimize image size. Configured automated deployment to GitHub Pages on every push to the main branch, achieving zero-touch releases. Integrated Bash scripts for environment setup, dependency installation, and post-deployment health checks. Implemented branch protection rules and status checks to enforce code quality gates before merging pull requests.',
    tech: ['GitHub Actions', 'YAML', 'Docker', 'GitHub Pages', 'Bash'],
    metrics: [
      { label: 'Manual Release Effort', value: '-70%' },
      { label: 'Workflow', value: 'Build→Test→Lint→Deploy' },
      { label: 'Deployment', value: 'Zero-Touch' },
      { label: 'Branch Protection', value: 'Enforced' }
    ],
    highlights: [
      'Designed and implemented a fully automated CI/CD pipeline using GitHub Actions with multi-stage workflows: build → test → lint → deploy',
      'Containerized the application using Docker, authoring a production-ready Dockerfile with multi-stage builds to minimize image size',
      'Configured automated deployment to GitHub Pages on every push to the main branch, achieving zero-touch releases',
      'Integrated Bash scripts for environment setup, dependency installation, and post-deployment health checks',
      'Implemented branch protection rules and status checks to enforce code quality gates before merging pull requests'
    ],
    githubUrl: 'https://github.com/Imrannro',
    liveUrl: 'https://imrannro.github.io/imran-portfolio',
    architectureSnippet: `[Code Push to main] ──► [GitHub Actions Workflow]
       │
       ├──► [Step 1: Build & Dependency Resolution]
       ├──► [Step 2: Automated Unit Testing]
       ├──► [Step 3: Code Lint & Security Scan]
       └──► [Step 4: Auto-Deploy to GitHub Pages & Health Check]`
  },
  {
    id: 'devops-portfolio-3d',
    title: 'Personal DevOps Portfolio Website',
    category: 'DevOps & Frontend',
    tag: 'HTML · CSS · JAVASCRIPT · THREE.JS · GSAP · GITHUB ACTIONS · GITHUB PAGES',
    badgeText: 'SOLO',
    type: 'Full-Stack',
    shortDesc: 'Fully responsive 3D animated portfolio website featuring a Three.js WebGL background, GSAP scroll animations, and glassmorphism UI.',
    fullDesc: 'Implemented a complete DevOps deployment pipeline: code pushed to GitHub → GitHub Actions workflow triggered → auto-deployed to GitHub Pages. Configured CI/CD workflow with automated build validation and deployment status badges displayed on the repository README. Achieved production-grade deployment with zero manual intervention — entire release cycle automated from commit to live site.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'GSAP', 'GitHub Actions', 'GitHub Pages'],
    metrics: [
      { label: 'Visual Engine', value: 'Three.js WebGL' },
      { label: 'Motion', value: 'GSAP Choreography' },
      { label: 'CI/CD Badges', value: 'Automated Status' },
      { label: 'Intervention', value: 'Zero Manual' }
    ],
    highlights: [
      'Built a fully responsive 3D animated portfolio website featuring a Three.js WebGL background, GSAP scroll animations, and glassmorphism UI',
      'Implemented a complete DevOps deployment pipeline: code pushed to GitHub → GitHub Actions workflow triggered → auto-deployed to GitHub Pages',
      'Configured CI/CD workflow with automated build validation and deployment status badges displayed on the repository README',
      'Achieved production-grade deployment with zero manual intervention — entire release cycle automated from commit to live site'
    ],
    githubUrl: 'https://github.com/Imrannro',
    liveUrl: 'https://imrannro.github.io/imran-portfolio'
  },
  {
    id: 'ecommerce-fullstack',
    title: 'E-Commerce Web Application',
    category: 'Full-Stack Web Project',
    tag: 'HTML · CSS · JAVASCRIPT · PYTHON (FLASK) · SQLITE · GITHUB ACTIONS',
    badgeText: 'SOLO',
    type: 'Full-Stack',
    shortDesc: 'Fully functional e-commerce web application with product listing, shopping cart, checkout flow, Python Flask REST API, and SQLite database.',
    fullDesc: 'Developed a fully functional e-commerce web application with product listing, shopping cart, and checkout flow. Built a RESTful backend using Python Flask with a SQLite database for product and order management. Integrated a GitHub Actions CI/CD pipeline to automate testing and deployment on every code push. Implemented a responsive front-end UI delivering a consistent user experience across desktop and mobile devices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python (Flask)', 'SQLite', 'GitHub Actions'],
    metrics: [
      { label: 'Backend', value: 'Python Flask REST' },
      { label: 'Database', value: 'SQLite Schemas' },
      { label: 'Testing', value: 'GitHub Actions CI' },
      { label: 'UI', value: 'Responsive' }
    ],
    highlights: [
      'Developed a fully functional e-commerce web application with product listing, shopping cart, and checkout flow',
      'Built a RESTful backend using Python Flask with a SQLite database for product and order management',
      'Integrated a GitHub Actions CI/CD pipeline to automate testing and deployment on every code push',
      'Implemented a responsive front-end UI delivering a consistent user experience across desktop and mobile devices'
    ],
    githubUrl: 'https://github.com/Imrannro',
    architectureSnippet: `[Responsive Front-End UI] ◄── REST API ──► [Python Flask Backend]
                                                    │
                                           [SQLite Database]`
  },
  {
    id: 'ranikot-chronicles',
    title: 'Ranikot Chronicles — 3D Cultural Heritage Exploration Game',
    category: 'Final Year Project',
    tag: 'GODOT ENGINE · GDSCRIPT · 3D LEVEL DESIGN · AI PATHFINDING',
    badgeText: 'TEAM LEAD, 3 MEMBERS',
    type: 'Game/3D',
    shortDesc: 'Cultural heritage exploration-adventure game inspired by Ranikot Fort, Sindh, featuring AI-driven NPC behaviors and 3D level mechanics.',
    fullDesc: 'Led a 3-person team through the full Software Development Life Cycle (SDLC) — requirements, design, development, testing, and delivery — using Agile sprint methodology. Engineered core 3D gameplay systems: character movement, collision detection, AI-driven NPC behavior, and environment interaction. Designed multiple 3D levels inspired by Ranikot Fort, Sindh, preserving Pakistani cultural heritage through interactive storytelling. Delivered a fully playable single-player exploration-adventure game, demonstrated at the university Final Year Project showcase.',
    tech: ['Godot Engine', 'GDScript', '3D Level Design', 'AI Pathfinding', 'Agile / Scrum'],
    metrics: [
      { label: 'Role', value: 'Team Lead' },
      { label: 'Team Size', value: '3 Members' },
      { label: 'Methodology', value: 'Agile SDLC' },
      { label: 'Showcase', value: 'University FYP' }
    ],
    highlights: [
      'Led a 3-person team through the full Software Development Life Cycle (SDLC) — requirements, design, development, testing, and delivery — using Agile sprint methodology',
      'Engineered core 3D gameplay systems: character movement, collision detection, AI-driven NPC behavior, and environment interaction',
      'Designed multiple 3D levels inspired by Ranikot Fort, Sindh, preserving Pakistani cultural heritage through interactive storytelling',
      'Delivered a fully playable single-player exploration-adventure game, demonstrated at the university Final Year Project showcase'
    ],
    githubUrl: 'https://github.com/Imrannro'
  }
];

export const techStackData: TechItem[] = [
  // DevOps & CI/CD
  { name: 'GitHub Actions', category: 'devops', level: 95, experience: 'Production & CI/CD', iconName: 'Workflow', description: 'Multi-stage workflows, secrets, lint/test/build/deploy automation' },
  { name: 'CI/CD Pipelines', category: 'devops', level: 92, experience: 'Continuous Delivery', iconName: 'GitBranch', description: 'Zero-downtime releases, branch protection, deployment gates' },
  { name: 'YAML Workflows', category: 'devops', level: 90, experience: 'Config Engineering', iconName: 'FileCode', description: 'Declarative build matrices, workflow triggers, composite actions' },
  { name: 'Linux CLI & Admin', category: 'devops', level: 88, experience: 'Server Administration', iconName: 'Terminal', description: 'Bash automation, cron jobs, daemon supervision, system logs' },
  
  // Containers & Infrastructure
  { name: 'Docker', category: 'containers', level: 90, experience: 'Containerization', iconName: 'Box', description: 'Multi-stage Dockerfile builds, layer caching, minimal base images' },
  { name: 'Kubernetes (K8s)', category: 'containers', level: 75, experience: 'Fundamentals', iconName: 'Layers', description: 'Pods, deployments, services, ingress fundamentals & cluster scaling' },
  { name: 'Infrastructure as Code', category: 'containers', level: 80, experience: 'IaC Concepts', iconName: 'Server', description: 'Declarative infrastructure, reproducible environments & scripts' },
  { name: 'Bash Scripting', category: 'containers', level: 90, experience: 'System Automation', iconName: 'Code', description: 'Automated provisioning, healthchecks, post-deployment hooks' },

  // Programming & Backend
  { name: 'Python', category: 'backend', level: 88, experience: 'Scripting & APIs', iconName: 'Cpu', description: 'Flask REST API services, backend automation, data parsing' },
  { name: 'Flask / REST APIs', category: 'backend', level: 85, experience: 'Web Services', iconName: 'Globe', description: 'RESTful architecture, routing, middleware, SQLite ORM' },
  { name: 'Node.js & TypeScript', category: 'backend', level: 82, experience: 'Full-Stack Apps', iconName: 'Layers', description: 'Async event loop, API routes, strict type safety' },
  { name: 'C++ / Java', category: 'backend', level: 78, experience: 'Core Algorithms', iconName: 'Binary', description: 'Data structures, OOP paradigms, memory efficiency' },

  // Frontend & UI
  { name: 'React', category: 'frontend', level: 90, experience: 'Frontend UI', iconName: 'Layout', description: 'Hooks, component architecture, state management, SPA routers' },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 95, experience: 'Modern Layouts', iconName: 'Palette', description: 'Semantic markup, flexbox, CSS grid, custom animations' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 92, experience: 'Core Web', iconName: 'Sparkles', description: 'DOM manipulation, async/await, modular code patterns' },
  { name: 'Tailwind CSS', category: 'frontend', level: 92, experience: 'Utility Styling', iconName: 'Paintbrush', description: 'Responsive layouts, design systems, dark mode palettes' },

  // Security & DevSecOps
  { name: 'DevSecOps Principles', category: 'security', level: 85, experience: 'Pipeline Security', iconName: 'ShieldCheck', description: 'Static vulnerability scanning, secrets protection, SAST integration' },
  { name: 'Kali Linux', category: 'security', level: 82, experience: 'Security Tooling', iconName: 'ShieldAlert', description: 'Penetration testing fundamentals, security testing workflows' },
  { name: 'Nmap & Network Scan', category: 'security', level: 80, experience: 'Auditing', iconName: 'Radio', description: 'Port scanning, service discovery, vulnerability awareness' },

  // Tools & Platforms
  { name: 'Git & GitHub', category: 'tools', level: 95, experience: 'Version Control', iconName: 'GitMerge', description: 'Feature branching, pull request reviews, merge resolution' },
  { name: 'VS Code & Postman', category: 'tools', level: 92, experience: 'Developer Tools', iconName: 'Wrench', description: 'API testing, debugging, extensions, automated test scripts' },
  { name: 'Godot Engine', category: 'tools', level: 80, experience: '3D Simulation', iconName: 'Gamepad2', description: '3D physics, game loops, GDScript, AI pathfinding' }
];

export const experiencesData: ExperienceItem[] = [
  {
    role: 'DevOps Engineer Intern',
    company: 'CodeAlpha',
    location: 'Remote, Pakistan',
    period: 'June 2026 – August 2026',
    type: 'Internship',
    points: [
      'Architected and deployed end-to-end CI/CD pipelines using GitHub Actions, reducing manual release effort by over 70%',
      'Designed multi-stage YAML workflow configurations covering build, lint, test, and auto-deploy stages across multiple repositories',
      'Configured branch protection rules, environment secrets, and deployment gates, ensuring zero broken builds reached production',
      'Automated repetitive release and environment setup tasks using Bash scripting and GitHub Actions workflow triggers',
      'Produced pipeline documentation, workflow diagrams, and runbooks that accelerated developer onboarding',
      'Collaborated cross-functionally with development teams to align CI/CD pipeline stages with Agile sprint release cycles and project milestones'
    ],
    skills: ['GitHub Actions', 'Docker', 'YAML', 'Bash Scripting', 'Branch Protection', 'DevSecOps']
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.S. Software Engineering (BSSE)',
    institution: 'National University of Modern Languages (NUML), Faisalabad, Pakistan',
    period: 'Graduated July 2026',
    grade: 'CGPA: 3.1 / 4.0',
    courses: [
      'DevOps Practices',
      'Software Engineering',
      'Operating Systems',
      'AI & Machine Learning',
      'Computer Networks',
      'Database Systems',
      'Data Structures & Algorithms'
    ]
  },
  {
    degree: 'F.Sc Pre-Engineering',
    institution: "Students' Inn College, Faisalabad, Pakistan",
    period: '2021',
    courses: ['Mathematics', 'Physics', 'Chemistry', 'Engineering Fundamentals']
  }
];

export const certificationsData: Certification[] = [
  {
    title: 'Introduction to DevOps and DevSecOps',
    issuer: 'Simplilearn',
    issueDate: 'Issued 5th August 2026',
    credentialId: '10560590',
    topics: ['CI/CD pipeline design', 'DevSecOps practices', 'Security integration', 'Containerization fundamentals']
  },
  {
    title: 'Kali Linux Fundamentals',
    issuer: 'Simplilearn',
    issueDate: 'Issued 7th August 2026',
    credentialId: '10569538',
    topics: ['Security testing tools', 'Penetration testing methodology', 'Network scanning with Nmap', 'Ethical hacking basics']
  },
  {
    title: 'Git & GitHub Essentials',
    issuer: 'Simplilearn',
    issueDate: '2026',
    credentialId: 'Verified Certificate',
    topics: ['Version control fundamentals', 'Branching strategies', 'Pull requests', 'Merge conflict resolution', 'GitHub Actions basics']
  }
];

export const additionalInfoData = {
  languages: [
    { language: 'Urdu', proficiency: 'Native' },
    { language: 'English', proficiency: 'Professional Working Proficiency' }
  ],
  openToRoles: [
    'DevOps Engineer',
    'Junior DevOps Engineer',
    'Cloud Engineer',
    'Site Reliability Engineer (SRE)',
    'Software Engineer',
    'CI/CD Engineer'
  ],
  availability: 'Immediately available for full-time roles — Graduated July 2026'
};

export const githubStatsData: GitHubStats = {
  stars: 48,
  repos: 24,
  contributions: 460,
  successRate: '99.98%',
  activeWorkflows: 16
};

export const openSourceData = [
  {
    title: 'automated-cicd-pipeline-templates',
    desc: 'Production-ready GitHub Actions multi-stage workflow starter with Docker containerization and auto-deploy triggers.',
    language: 'YAML',
    stars: 28,
    forks: 9,
    highlights: ['Multi-Stage Docker caching', 'Trivy security scan gate', 'Zero-downtime deploy hooks'],
    url: 'https://github.com/Imrannro'
  },
  {
    title: 'flask-rest-boilerplate-ci',
    desc: 'Python Flask RESTful microservice skeleton configured with automated pytest suites, SQLite schema migrations, and CI workflows.',
    language: 'Python',
    stars: 21,
    forks: 6,
    highlights: ['Automated unit & integration tests', 'Swagger API documentation', 'Dockerized runtime'],
    url: 'https://github.com/Imrannro'
  },
  {
    title: 'devops-terminal-simulator',
    desc: 'Interactive browser terminal emulator component built with React, TypeScript, and Tailwind CSS for developer portfolios.',
    language: 'TypeScript',
    stars: 17,
    forks: 4,
    highlights: ['Custom command parser', 'Theme responsive palette', 'Fast keybindings support'],
    url: 'https://github.com/Imrannro'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "Imran transformed our manual deployment chaos into a clean, automated GitHub Actions pipeline. Our releases went from taking 45 minutes of manual checks to a 2-minute automated zero-touch push.",
    author: "Lead Software Architect",
    role: "CodeAlpha Engineering Team",
    avatarInitials: "CA"
  },
  {
    quote: "Exceptional technical discipline and problem-solving skills. Whether it is containerizing applications with multi-stage Dockerfiles or building reliable Python REST backends, Imran delivers clean, production-ready code.",
    author: "Senior Project Advisor",
    role: "Department of Software Engineering, NUML",
    avatarInitials: "SA"
  },
  {
    quote: "A rare engineer who understands both modern full-stack web engineering and modern DevOps automation. His work on branch protection and automated testing saved our team from numerous regressions.",
    author: "Engineering Peer & Colleague",
    role: "Open Source Contributor",
    avatarInitials: "EP"
  }
];
