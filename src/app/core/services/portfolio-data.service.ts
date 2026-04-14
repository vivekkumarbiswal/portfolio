import { Injectable } from '@angular/core';
import { Project, SkillGroup, PersonalInfo } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  // ─── PERSONAL INFO ───────────────────────────────────────────────────
  readonly personal: PersonalInfo = {
    name: 'Vivek Kumar Biswal',
    title: 'Angular Developer | Frontend Engineer',
    tagline: 'Crafting high-performance web experiences with Angular & TypeScript.',
    bio: `Frontend Developer with 4 years of experience in designing, building, and optimizing user-focused websites and applications. 
          Expert in Angular ecosystem, RxJS, and performance optimization. Recognized with the Star Team Award for outstanding teamwork.`,
    location: 'Bengaluru, India',
    email: 'vivekkumarbiswal@gmail.com',
    phone: '+91 8********0',
    linkedin: 'https://linkedin.com/in/vivekkumarbiswal',
    github: 'https://github.com/vivekkumarbiswal',
    available: true,
  };

  // ─── PROJECTS ────────────────────────────────────────────────────────
  readonly projects: Project[] = [
    {
      id: 'proj-01',
      title: 'MyBank Spain',
      description: 'Built scalable, accessible components for money transfer and transaction history using Angular v14+ and SCSS.',
      longDescription: 'Part of the TCS Interactive team for Deutsche Bank. Focused on modular architecture and global design consistency.',
      tech: ['Angular', 'RxJS', 'SCSS', 'TypeScript', 'Aria'],
      category: 'fullstack',
      type: 'FinTech Application',
      year: 2024,
      status: 'live',
      featured: true,
    },
    {
      id: 'proj-02',
      title: 'EduTrack PWA',
      description: 'A React-based Progressive Web App for student tracking with offline support and push notifications.',
      tech: ['React', 'PWA', 'Firebase', 'Workbox', 'Chakra UI'],
      category: 'frontend',
      type: 'Education Platform',
      year: 2023,
      status: 'live',
      featured: true,
    },
    {
      id: 'proj-03',
      title: 'Portfolio Engine',
      description: 'A dynamic portfolio generator using Angular 17 and AI-driven content suggestions.',
      tech: ['Angular', 'Gemini API', 'Tailwind', 'Vercel'],
      category: 'ai',
      type: 'Dev Tool',
      year: 2024,
      status: 'live',
      featured: true,
    }
  ];

  // ─── SKILLS ──────────────────────────────────────────────────────────
  readonly skillGroups: SkillGroup[] = [
    {
      category: 'frontend',
      label: 'Frontend',
      skills: [
        { name: 'Angular', level: 95, category: 'frontend' },
        { name: 'TypeScript', level: 92, category: 'frontend' },
        { name: 'RxJS', level: 88, category: 'frontend' },
        { name: 'HTML/CSS/SCSS', level: 90, category: 'frontend' },
        { name: 'Accessibility (WCAG)', level: 85, category: 'frontend' },
      ]
    },
    {
      category: 'tools',
      label: 'Tools & DevOps',
      skills: [
        { name: 'Git / GitHub', level: 90, category: 'tools' },
        { name: 'Docker', level: 75, category: 'tools' },
        { name: 'GitHub Actions', level: 80, category: 'tools' },
        { name: 'Agile / Jira', level: 85, category: 'tools' },
      ]
    }
  ];

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  getProjectsByCategory(cat: string): Project[] {
    if (cat === 'all') return this.projects;
    return this.projects.filter(p => p.category === cat);
  }
}
