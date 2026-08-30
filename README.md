# Muhammad Imran — DevOps & Full-Stack Developer Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Status-Open_for_Roles_(2026)-22c55e?style=for-the-badge&logo=statuspage&logoColor=white)
![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**An interactive, production-grade DevOps Engineer & Full-Stack Developer portfolio featuring an interactive CI/CD Pipeline Simulator, comprehensive project architecture deep-dives, interactive terminal resume, and live recruiter inquiry dispatch.**

[🌐 Live Portfolio](https://imran-portfolio-self.vercel.app) • [💼 LinkedIn Profile](https://linkedin.com/in/muhammadimrandev10) • [💬 WhatsApp](https://wa.me/923111593570) • [📧 Email Me](mailto:imranusman1710@gmail.com)

</div>

---

## 📌 Overview

This repository houses the modern developer portfolio of **Muhammad Imran**, a Software Engineering graduate (**BSSE, National University of Modern Languages**) and **DevOps Engineer**. 

Designed to demonstrate real-world CI/CD automation, container runtime optimization, systems engineering, and full-stack web capabilities, this web application is engineered with high-contrast developer aesthetics, responsive layouts, and interactive terminal workflows.

---

## ⚡ Key Highlights & Features

- **🚀 Interactive 6-Stage CI/CD Pipeline Simulator**:
  - Live simulator demonstrating: `Lint & Code Quality` → `Docker Multi-Stage Build` → `Trivy Security Scan` → `Integration Tests` → `Deploy to Staging` → `Production Smoke Tests`.
  - Streamed animated terminal logs, live duration timers, stage status pills, and error handling.
- **💼 Architectural Project Showcase**:
  - Filterable by **DevOps**, **Full-Stack**, and **3D / Game Development**.
  - Detailed modal popups featuring architecture blueprints, measurable metrics, tech badges, and direct repository links.
- **📊 Technical Proficiency Matrix**:
  - Categorized into *DevOps & CI/CD*, *Containers & Cloud*, *Backend & APIs*, *Frontend & UI*, and *Security & Monitoring*.
  - Visual proficiency meters and contextual experience badges.
- **💻 Interactive Dual-Mode Resume**:
  - Switchable between a formatted clean executive CV and a functional CLI Terminal with commands (`whoami`, `cat experience.md`, `docker ps`, `get-contact`).
  - One-click print / PDF export mechanism.
- **📬 Recruiter Inquiry & Dispatch**:
  - Formspree submission engine with automatic email fallback.
  - Role selector with quick-fill tags (`DevOps Engineer`, `Junior DevOps`, `Cloud Engineer`, `SRE`, `Full-Stack Developer`).
- **🌓 Theme & Accessibility Support**:
  - High-contrast Dark theme with emerald accents (`#22d472`) and polished Light mode with seamless persistent storage.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Build & Bundler** | [Vite 6](https://vite.dev/), `esbuild` |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), CSS Variables |
| **Animations** | [Motion](https://motion.dev/) (Framer Motion v12) |
| **Icons & Visuals** | [Lucide React](https://lucide.org/) |
| **Forms & Dispatch** | Formspree REST API + Mailto protocol fallback |

---

## 📂 Project Structure

```
├── public/                     # Static assets, favicon, profile images
├── src/
│   ├── assets/                 # Brand assets
│   ├── components/             # Modular React components
│   │   ├── About.tsx           # Bio, stats, education, certifications
│   │   ├── ContactCTA.tsx      # Contact form & direct reach card
│   │   ├── Experience.tsx      # Career timeline & academic background
│   │   ├── FeaturedProjects.tsx# Categorized portfolio projects
│   │   ├── Footer.tsx          # Minimalist footer & social connect
│   │   ├── Hero.tsx            # Hero section with interactive terminal
│   │   ├── Navbar.tsx          # Sticky blur navigation & theme switch
│   │   ├── PipelineSimulator.tsx # 6-stage interactive DevOps pipeline
│   │   ├── ProjectModal.tsx    # Architectural deep-dive modal
│   │   ├── ResumeModal.tsx     # Executive CV & CLI terminal resume
│   │   ├── TechStack.tsx       # Categorized skill proficiency matrix
│   │   └── Testimonials.tsx    # Peer recommendations & endorsements
│   ├── context/
│   │   └── ThemeContext.tsx    # Dark/Light theme state & local storage
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data (projects, skills, timeline)
│   ├── types.ts                # TypeScript interfaces & types
│   ├── App.tsx                 # Main layout & modal controller
│   ├── index.css               # Tailwind CSS v4 entrypoint
│   └── main.tsx                # React DOM root entry
├── index.html                  # HTML entry point with SEO metadata
├── metadata.json               # Application metadata
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Imrannro/imran-portfolio.git
   cd imran-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local dev server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run TypeScript check & linter:**
   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized static assets in the `dist/` directory ready for deployment on GitHub Pages, Vercel, Netlify, or Cloud Run.

---

## ⚙️ Customization

All portfolio content is maintained centrally in `src/data/portfolioData.ts`:
- **`personalInfo`**: Name, titles, contact email, social links, and biography.
- **`projects`**: Featured repositories, architectural breakdown, metrics, and tags.
- **`techStack`**: Tools, proficiency ratings, and category filters.
- **`experiences`**: Employment history, roles, and achievements.
- **`education` & `certifications`**: Degrees and professional certifications.

---

## 📬 Contact & Connect

- **Name**: Muhammad Imran
- **Location**: Faisalabad, Punjab, Pakistan
- **Email**: [imranusman1710@gmail.com](mailto:imranusman1710@gmail.com)
- **WhatsApp**: [+92 311 1593570](https://wa.me/923111593570)
- **LinkedIn**: [linkedin.com/in/muhammadimrandev10](https://linkedin.com/in/muhammadimrandev10)
- **GitHub**: [github.com/Imrannro](https://github.com/Imrannro)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
