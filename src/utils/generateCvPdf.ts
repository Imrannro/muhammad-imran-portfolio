import { jsPDF } from 'jspdf';

export const generateCvPdf = (): jsPDF => {
  // Create letter size document: 215.9mm x 279.4mm (8.5 x 11 inches)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'letter',
  });

  const pageWidth = 215.9;
  const pageHeight = 279.4;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = 14;

  const checkPageBreak = (neededHeight: number): void => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const drawSectionHeader = (title: string, topPadding = 4): void => {
    y += topPadding;
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 15, 15);
    doc.text(title, margin, y);
    y += 1.8;
    doc.setDrawColor(30, 30, 30);
    doc.setLineWidth(0.35);
    doc.line(margin, y, margin + contentWidth, y);
    y += 3.8;
  };

  const addWrappedText = (
    text: string,
    fontSize = 8.8,
    fontStyle: 'normal' | 'bold' | 'italic' = 'normal',
    color = [30, 30, 30],
    lineSpacing = 4.0
  ): void => {
    doc.setFont('helvetica', fontStyle);
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, contentWidth);
    for (const line of lines) {
      checkPageBreak(lineSpacing + 0.5);
      doc.text(line, margin, y);
      y += lineSpacing;
    }
  };

  const addBullet = (
    text: string,
    fontSize = 8.7,
    indent = 4,
    lineSpacing = 3.9
  ): void => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(30, 30, 30);
    
    const bulletChar = '•';
    const textWidth = contentWidth - indent;
    const lines = doc.splitTextToSize(text, textWidth);

    checkPageBreak(lines.length * lineSpacing + 0.8);
    doc.text(bulletChar, margin + 0.5, y);
    
    for (let i = 0; i < lines.length; i++) {
      checkPageBreak(lineSpacing + 0.5);
      doc.text(lines[i], margin + indent, y);
      y += lineSpacing;
    }
  };

  // ==================== PAGE 1: HEADER ====================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 15, 15);
  doc.text('MUHAMMAD IMRAN', pageWidth / 2, y, { align: 'center' });
  y += 5.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.8);
  doc.setTextColor(30, 30, 30);
  doc.text(
    'DevOps Engineer | CI/CD Automation | Cloud & Infrastructure | Software Engineering Graduate (BSSE)',
    pageWidth / 2,
    y,
    { align: 'center' }
  );
  y += 4.8;

  doc.setFontSize(9.0);
  doc.text(
    'Faisalabad, Punjab, Pakistan | +92 311 1593570 | imranusman1710@gmail.com',
    pageWidth / 2,
    y,
    { align: 'center' }
  );
  y += 4.6;

  // Header Links
  doc.setTextColor(20, 60, 160);
  const linkText = 'github.com/Imrannro  |  linkedin.com/in/muhammadimrandev10  |  imran-portfolio-self.vercel.app';
  doc.text(linkText, pageWidth / 2, y, { align: 'center' });
  y += 2.0;

  // ==================== 1. PROFESSIONAL SUMMARY ====================
  drawSectionHeader('PROFESSIONAL SUMMARY', 3);
  addWrappedText(
    'Results-driven DevOps Engineer and Software Engineering graduate (BSSE, National University of Modern Languages, Class of 2026) with hands-on experience designing, automating, and maintaining CI/CD pipelines using GitHub Actions, Docker, and Bash scripting. Skilled in build/test/deploy automation, containerization, version control workflows, branch protection, environment configuration management, and DevSecOps practices. Holds industry certifications in DevOps, DevSecOps, Kali Linux Fundamentals, and Git/GitHub from Simplilearn. Proven ability to deliver end-to-end software products spanning pipeline automation, containerization, full-stack web deployment, and Agile SDLC project delivery. Seeking a DevOps Engineer, Junior DevOps, Cloud Engineer, Site Reliability Engineer (SRE), or Software Engineer role to apply automation-first, security-conscious engineering practices.',
    8.8,
    'normal',
    [30, 30, 30],
    4.1
  );

  // ==================== 2. CORE COMPETENCIES / TECHNICAL SKILLS ====================
  drawSectionHeader('CORE COMPETENCIES / TECHNICAL SKILLS', 3.5);
  
  const skillsList = [
    {
      category: 'DevOps & CI/CD:',
      items: 'GitHub Actions, CI/CD Pipeline Design & Automation, Continuous Integration, Continuous Deployment (CI/CD), YAML Workflow Configuration, Build-Test-Lint-Deploy Pipelines, Release Management, Branch Protection Rules, Environment Secrets Management, Deployment Gates, Zero-Downtime Deployment'
    },
    {
      category: 'Containers & Infrastructure:',
      items: 'Docker, Docker Multi-Stage Builds, Containerization, Kubernetes (Fundamentals), Infrastructure as Code (IaC) Concepts, Linux Server Administration, Bash Scripting, Environment Setup Automation'
    },
    {
      category: 'Security / DevSecOps:',
      items: 'DevSecOps Principles, Kali Linux, Penetration Testing Fundamentals, Network Scanning (Nmap), Vulnerability Awareness, Security Integration in CI/CD Pipelines, Ethical Hacking Basics'
    },
    {
      category: 'Programming Languages:',
      items: 'Python, Bash, C++, Java, HTML5, CSS3, JavaScript, GDScript'
    },
    {
      category: 'Web Development & Frameworks:',
      items: 'Flask (Python), REST API Development, RESTful Services, SQLite, Three.js, GSAP, Responsive Web Design, Full-Stack Web Development'
    },
    {
      category: 'Tools & Platforms:',
      items: 'Git, GitHub, GitHub Pages, Linux CLI, VS Code, Godot Engine, Postman'
    },
    {
      category: 'Methodologies & Practices:',
      items: 'Agile / Scrum, Software Development Life Cycle (SDLC), Version Control Workflows, Technical Documentation, Cross-Functional Collaboration, Sprint Planning'
    }
  ];

  skillsList.forEach((skill) => {
    const fullText = `${skill.category} ${skill.items}`;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.7);
    doc.setTextColor(30, 30, 30);
    const lines = doc.splitTextToSize(fullText, contentWidth);
    
    checkPageBreak(lines.length * 3.8 + 0.8);
    
    // Print first line with bold prefix
    doc.setFont('helvetica', 'bold');
    doc.text(skill.category, margin, y);
    const catWidth = doc.getTextWidth(skill.category + ' ');
    
    doc.setFont('helvetica', 'normal');
    const firstLineRest = doc.splitTextToSize(skill.items, contentWidth - catWidth)[0];
    doc.text(firstLineRest, margin + catWidth, y);
    y += 3.8;

    // Remaining lines of items if any
    const remainingText = skill.items.slice(firstLineRest.length).trim();
    if (remainingText) {
      const subLines = doc.splitTextToSize(remainingText, contentWidth);
      for (const line of subLines) {
        checkPageBreak(3.8 + 0.5);
        doc.text(line, margin, y);
        y += 3.8;
      }
    }
    y += 0.5;
  });

  // ==================== 3. PROFESSIONAL EXPERIENCE ====================
  drawSectionHeader('PROFESSIONAL EXPERIENCE', 3.5);

  // Job Row
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 15, 15);
  doc.text('DevOps Engineer Intern', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.0);
  doc.text('June 2026 – August 2026', margin + contentWidth, y, { align: 'right' });
  y += 4.0;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.7);
  doc.setTextColor(60, 60, 60);
  doc.text('CodeAlpha | Remote, Pakistan', margin, y);
  y += 3.8;

  const expBullets = [
    'Architected and deployed end-to-end CI/CD pipelines using GitHub Actions, reducing manual release effort by over 70%',
    'Designed multi-stage YAML workflow configurations covering build, lint, test, and auto-deploy stages across multiple repositories',
    'Configured branch protection rules, environment secrets, and deployment gates, ensuring zero broken builds reached production',
    'Automated repetitive release and environment setup tasks using Bash scripting and GitHub Actions workflow triggers',
    'Produced pipeline documentation, workflow diagrams, and runbooks that accelerated developer onboarding',
    'Collaborated cross-functionally with development teams to align CI/CD pipeline stages with Agile sprint release cycles and project milestones'
  ];

  expBullets.forEach((bullet) => {
    addBullet(bullet, 8.7, 4, 3.8);
  });

  // ==================== 4. PROJECTS ====================
  drawSectionHeader('PROJECTS', 3.5);

  // Project 1: Automated CI/CD Pipeline (starts on Page 1, ends on Page 2)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 15, 15);
  doc.text('Automated CI/CD Pipeline — DevOps Project', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.0);
  doc.text('Solo', margin + contentWidth, y, { align: 'right' });
  y += 4.0;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.7);
  doc.setTextColor(60, 60, 60);
  doc.text('Stack: GitHub Actions, YAML, Docker, GitHub Pages, Bash', margin, y);
  y += 3.8;

  addBullet('Designed and implemented a fully automated CI/CD pipeline using GitHub Actions with multi-stage workflows: build → test → lint → deploy', 8.7, 4, 3.8);
  addBullet('Containerized the application using Docker, authoring a production-ready Dockerfile with multi-stage builds to minimize image size', 8.7, 4, 3.8);
  addBullet('Configured automated deployment to GitHub Pages on every push to the main branch, achieving zero-touch releases', 8.7, 4, 3.8);

  // Page 1 is now fully and gracefully filled to the bottom. Page break to Page 2:
  doc.addPage();
  y = margin + 2;

  addBullet('Integrated Bash scripts for environment setup, dependency installation, and post-deployment health checks', 8.7, 4, 3.8);
  addBullet('Implemented branch protection rules and status checks to enforce code quality gates before merging pull requests', 8.7, 4, 3.8);
  y += 2.0;

  // Project 2: Personal DevOps Portfolio Website
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 15, 15);
  doc.text('Personal DevOps Portfolio Website', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.0);
  doc.text('Solo', margin + contentWidth, y, { align: 'right' });
  y += 4.0;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.7);
  doc.setTextColor(60, 60, 60);
  doc.text('Stack: HTML, CSS, JavaScript, Three.js, GSAP, GitHub Actions, GitHub Pages', margin, y);
  y += 3.8;

  addBullet('Built a fully responsive 3D animated portfolio website featuring a Three.js WebGL background, GSAP scroll animations, and glassmorphism UI', 8.7, 4, 3.8);
  addBullet('Implemented a complete DevOps deployment pipeline: code pushed to GitHub → GitHub Actions workflow triggered → auto-deployed to GitHub Pages', 8.7, 4, 3.8);
  addBullet('Configured CI/CD workflow with automated build validation and deployment status badges displayed on the repository README', 8.7, 4, 3.8);
  addBullet('Achieved production-grade deployment with zero manual intervention — entire release cycle automated from commit to live site', 8.7, 4, 3.8);
  y += 2.0;

  // Project 3: E-Commerce Web Application
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 15, 15);
  doc.text('E-Commerce Web Application — Full-Stack Web Project', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.0);
  doc.text('Solo', margin + contentWidth, y, { align: 'right' });
  y += 4.0;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.7);
  doc.setTextColor(60, 60, 60);
  doc.text('Stack: HTML, CSS, JavaScript, Python (Flask), SQLite, GitHub Actions', margin, y);
  y += 3.8;

  addBullet('Developed a fully functional e-commerce web application with product listing, shopping cart, and checkout flow', 8.7, 4, 3.8);
  addBullet('Built a RESTful backend using Python Flask with a SQLite database for product and order management', 8.7, 4, 3.8);
  addBullet('Integrated a GitHub Actions CI/CD pipeline to automate testing and deployment on every code push', 8.7, 4, 3.8);
  addBullet('Implemented a responsive front-end UI delivering a consistent user experience across desktop and mobile devices', 8.7, 4, 3.8);
  y += 2.0;

  // Project 4: Ranikot Chronicles
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 15, 15);
  doc.text('Ranikot Chronicles — 3D Cultural Heritage Exploration Game (Final Year Project)', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.0);
  doc.text('Team Lead, 3 Members', margin + contentWidth, y, { align: 'right' });
  y += 4.0;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.7);
  doc.setTextColor(60, 60, 60);
  doc.text('Stack: Godot Engine, GDScript, 3D Level Design, AI Pathfinding', margin, y);
  y += 3.8;

  addBullet('Led a 3-person team through the full Software Development Life Cycle (SDLC) — requirements, design, development, testing, and delivery — using Agile sprint methodology', 8.7, 4, 3.8);
  addBullet('Engineered core 3D gameplay systems: character movement, collision detection, AI-driven NPC behavior, and environment interaction', 8.7, 4, 3.8);
  addBullet('Designed multiple 3D levels inspired by Ranikot Fort, Sindh, preserving Pakistani cultural heritage through interactive storytelling', 8.7, 4, 3.8);
  addBullet('Delivered a fully playable single-player exploration-adventure game, demonstrated at the university Final Year Project showcase', 8.7, 4, 3.8);
  y += 1.5;

  // ==================== 5. EDUCATION ====================
  drawSectionHeader('EDUCATION', 3.0);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 15, 15);
  doc.text('B.S. Software Engineering (BSSE)', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.0);
  doc.text('Graduated July 2026', margin + contentWidth, y, { align: 'right' });
  y += 4.0;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.7);
  doc.setTextColor(60, 60, 60);
  doc.text('National University of Modern Languages (NUML), Faisalabad, Pakistan', margin, y);
  y += 3.8;

  addBullet('CGPA: 3.1 / 4.0', 8.7, 4, 3.8);
  addBullet('Relevant Coursework: DevOps Practices, Software Engineering, Operating Systems, AI & Machine Learning, Computer Networks, Database Systems, Data Structures & Algorithms', 8.7, 4, 3.8);
  y += 1.8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 15, 15);
  doc.text('F.Sc Pre-Engineering', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.0);
  doc.text('2021', margin + contentWidth, y, { align: 'right' });
  y += 4.0;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.7);
  doc.setTextColor(60, 60, 60);
  doc.text("Students' Inn College, Faisalabad, Pakistan", margin, y);
  y += 3.8;

  // ==================== 6. CERTIFICATIONS ====================
  drawSectionHeader('CERTIFICATIONS', 3.0);

  const certs = [
    {
      title: 'Introduction to DevOps and DevSecOps',
      issuer: 'Simplilearn | Issued 5th August 2026 | Credential ID: 10560590',
      desc: 'CI/CD pipeline design, DevSecOps practices, security integration, containerization fundamentals'
    },
    {
      title: 'Kali Linux Fundamentals',
      issuer: 'Simplilearn | Issued 7th August 2026 | Credential ID: 10569538',
      desc: 'Security testing tools, penetration testing methodology, network scanning with Nmap'
    },
    {
      title: 'Git & GitHub Essentials',
      issuer: 'Simplilearn | 2026',
      desc: 'Version control fundamentals, branching strategies, pull requests, merge conflict resolution, GitHub Actions basics'
    }
  ];

  certs.forEach((cert) => {
    const fullCertText = `${cert.title} — ${cert.issuer} — ${cert.desc}`;
    addBullet(fullCertText, 8.7, 4, 3.8);
  });
  y += 1.5;

  // ==================== 7. ADDITIONAL INFORMATION ====================
  drawSectionHeader('ADDITIONAL INFORMATION', 3.0);

  addBullet('Languages: Urdu (Native), English (Professional Working Proficiency)', 8.7, 4, 3.8);
  addBullet('Open to: DevOps Engineer, Junior DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Software Engineer, CI/CD Engineer roles', 8.7, 4, 3.8);
  addBullet('Availability: Immediately available for full-time roles — Graduated July 2026', 8.7, 4, 3.8);

  return doc;
};

export const downloadOfficialCvPdf = (filename = 'Muhammad_Imran_CV.pdf'): void => {
  const doc = generateCvPdf();
  doc.save(filename);
};
