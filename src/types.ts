export interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  type: 'DevOps' | 'Full-Stack' | 'Game/3D';
  architectureSnippet?: string;
  badgeText: string;
}

export interface TechItem {
  name: string;
  category: 'devops' | 'containers' | 'backend' | 'frontend' | 'security' | 'tools';
  level: number; // 1-100
  experience: string;
  iconName: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  points: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  courses: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  topics: string[];
  verifyUrl?: string;
}

export interface GitHubStats {
  stars: number;
  repos: number;
  contributions: number;
  successRate: string;
  activeWorkflows: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarInitials: string;
}
