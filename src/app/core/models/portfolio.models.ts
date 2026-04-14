export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: ProjectCategory;
  github?: string;
  live?: string;
  demo?: string;
  type?: string;
  featured: boolean;
  image?: string;
  year: number;
  status: 'live' | 'wip' | 'archived';
}

export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'ai' | 'devops';

export interface Skill {
  name: string;
  level: number; // 0–100
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'tools' | 'ai';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface AiMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  available: boolean;
}
