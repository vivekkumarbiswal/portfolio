import { Injectable } from '@angular/core';
import { Project, SkillGroup, PersonalInfo, Experience, Achievement, Certificate, Education, SkillCategory } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  // ─── PERSONAL INFO ───────────────────────────────────────────────────
  readonly personal: PersonalInfo = {
    name: 'Vivek Kumar Biswal',
    title: 'ANGULAR DEVELOPER | FRONTEND ENGINEER',
    roles: ['Angular Developer', 'Frontend Engineer', 'UI/UX Enthusiast', 'Problem Solver'],
    tagline: 'Front-End Developer with 4 years of experience in designing, building, and optimizing user-focused websites and applications.',
    bio: `Experienced in building scalable Angular applications using TypeScript and RxJS, with working knowledge of Ionic and Capacitor for hybrid mobile development. 
          Skilled in developing responsive, accessible, and high-performance web applications that enhance user experience and meet business requirements.
          Strong experience collaborating in Agile environments, contributing across the SDLC from development to deployment.
          Recognized with the Star Team Award for outstanding teamwork and successful project delivery.`,
    location: 'Bangalore',
    email: 'vivekkumarbiswal@gmail.com',
    phone: '+91 8*********0',
    linkedin: 'https://linkedin.com/in/vivekkumarbiswal',
    github: 'https://github.com/vivekkumarbiswal',
    available: true,
  };

  // ─── EXPERIENCE ──────────────────────────────────────────────────────
  readonly experiences: Experience[] = [
    {
      company: 'Tata Consultancy Services',
      role: 'Front End Developer',
      period: 'Apr 2025 — Oct 2025',
      description: 'Project: Deutsche Bank – MyBank Spain (TCS Interactive)',
      bullets: [
        'Contributed to the rebranding of the MyBank Spain application using Angular 13, Ionic, and Cordova, focusing on UI modernization while implementing accessibility improvements to deliver a more inclusive and user-friendly experience.',
        'Developed reusable UI components reducing development time by 30%, ensuring consistent design and responsive behaviour across web and mobile platforms.',
        'Implemented client-specific UI and accessibility changes, showcasing the updated design during demos and ensuring alignment with client requirements.',
        'Worked closely with Product Owners and cross-functional teams in an Agile environment to deliver high-quality UI features.'
      ],
      skills: ['Angular 13', 'Ionic', 'Cordova', 'UI/UX', 'Accessibility'],
      current: true
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Front End Developer',
      period: 'Nov 2024 — Mar 2025',
      description: 'Project: BFSI US East – Insurance – Offshore – TTI (Technology, Transformation and Innovation)',
      bullets: [
        'Angular Application Development: Led the development of a scalable web application using Angular 15, applying modular architecture, reusable components, and performance optimization best practices.',
        'PWA Implementation (AIG Client – POC): Successfully delivered a Proof of Concept (POC) for the AIG client by integrating Progressive Web App (PWA) capabilities using Angular Service Worker, enabling installability, improved load performance, and optimized static asset caching.',
        'Hybrid Mobile Enablement: Integrated Ionic Capacitor into the existing Angular PWA to generate native Android and iOS builds, validating mobile responsiveness and preparing the application for further native feature integration by the mobile team.'
      ],
      skills: ['Angular 15', 'PWA', 'Service Workers', 'Ionic Capacitor'],
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Front End Developer',
      period: 'Nov 2021 — Oct 2024',
      description: 'Project: Genworth Financial – CareScout',
      bullets: [
        'End-to-End SDLC Experience: Contributed across requirements analysis, development, testing, deployment, and production support for web and mobile applications within Agile environments.',
        'Frontend Development & Rebranding: Developed and maintained Angular (11-12) applications using RxJS, Angular Material, HTML5, SCSS, and Bootstrap, leading the rebranding of the FIELD NURSE (Provider) Portal to enhance UI consistency and user experience.',
        'Application Upgrade & Build Management: Managed web and mobile (Android & iOS) builds, upgraded Angular from v11 to v12, replaced deprecated libraries, and migrated ngx-modal to Angular Material Dialog to improve stability and maintainability.'
      ],
      skills: ['Angular 11-12', 'RxJS', 'Angular Material', 'SCSS', 'Bootstrap'],
    }
  ];

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
    }
  ];

  // ─── SKILLS ──────────────────────────────────────────────────────────
  readonly skillGroups: SkillGroup[] = [
    {
      category: 'primary' as SkillCategory,
      label: 'Primary Skills',
      skills: [
        { name: 'Angular(v2+)', level: 95, category: 'primary' as SkillCategory },
        { name: 'RxJS', level: 92, category: 'primary' as SkillCategory },
        { name: 'TypeScript', level: 92, category: 'primary' as SkillCategory },
        { name: 'JavaScript', level: 90, category: 'primary' as SkillCategory },
        { name: 'HTML, CSS, SCSS', level: 90, category: 'primary' as SkillCategory },
        { name: 'Accessibility (WCAG, ARIA)', level: 88, category: 'primary' as SkillCategory },
      ]
    },
    {
      category: 'secondary' as SkillCategory,
      label: 'Secondary Skills',
      skills: [
        { name: 'Ionic', level: 85, category: 'secondary' as SkillCategory },
        { name: 'Capacitor', level: 80, category: 'secondary' as SkillCategory },
        { name: 'PWA', level: 85, category: 'secondary' as SkillCategory },
      ]
    },
    {
      category: 'tools' as SkillCategory,
      label: 'Version Control & Tools',
      skills: [
        { name: 'Git (GitHub, GitLab, Bitbucket)', level: 90, category: 'tools' as SkillCategory },
        { name: 'Docker', level: 75, category: 'tools' as SkillCategory },
      ]
    }
  ];

  // ─── ACHIEVEMENTS ────────────────────────────────────────────────────
  readonly achievements: Achievement[] = [
    { title: 'Star Team Award', year: '2022' },
    { title: 'Received Multiple Appreciation from Client', year: '' },
    { title: 'Star Certificate', year: '2023' },
    { title: 'Nominated for Spot on Award', year: '2023' }
  ];

  // ─── CERTIFICATES ───────────────────────────────────────────────────
  readonly certificates: Certificate[] = [
    { title: 'HTML, CSS, and JavaScript for Web Developers', url: '' },
    { title: 'Foundations of User Experience (UX) Design', url: '' },
    { title: 'Red Hat Certified System Administrator (RHCSA)', url: '' },
    { title: 'CompTIA Strata IT Fundamentals Certification', url: '' }
  ];

  // ─── EDUCATION ──────────────────────────────────────────────────────
  readonly education: Education[] = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'BIT - CSVTU, Chhattisgarh',
      period: '2018 — 2021'
    }
  ];

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  getProjectsByCategory(cat: string): Project[] {
    if (cat === 'all') return this.projects;
    return this.projects.filter(p => p.category === cat);
  }

  getProfessionalStats() {
    return [
      { label: 'Years of Experience', value: '4+' },
      { label: 'Project Milestones', value: '12' },
      { label: 'Angular Versions', value: 'v11-17' },
      { label: 'Happy Clients', value: '3+' }
    ];
  }
}
