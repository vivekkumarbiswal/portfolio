import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="resume-container">
      <!-- Main Resume Paper -->
      <div class="resume-paper animate-fade-up">
        
        <!-- Header Section -->
        <header class="res-header">
          <h1 class="res-name">{{ data.personal.name }}</h1>
          <div class="res-contact-info">
            <span>{{ data.personal.phone }}</span>
            <span class="divider">|</span>
            <a [href]="'mailto:' + data.personal.email">{{ data.personal.email }}</a>
            <span class="divider">|</span>
            <a [href]="data.personal.linkedin" target="_blank">LinkedIn</a>
            <span class="divider">|</span>
            <a [href]="data.personal.github" target="_blank">GitHub</a>
            <span class="divider">|</span>
            <span>{{ data.personal.location }}</span>
          </div>
        </header>

        <hr class="res-divider" />

        <!-- Professional Summary -->
        <section class="res-section">
          <h2 class="res-section-title">{{ data.personal.title }}</h2>
          <p class="res-summary">
            {{ data.personal.bio }}
          </p>
          <ul class="res-bullets">
            <li>Experienced in building scalable Angular applications using TypeScript and RxJS.</li>
            <li>Skilled in developing responsive, accessible, and high-performance web applications.</li>
            <li>Strong experience collaborating in Agile environments, contributing across the SDLC.</li>
          </ul>
        </section>

        <hr class="res-divider" />

        <!-- Key Competencies -->
        <section class="res-section">
          <h2 class="res-section-title">KEY COMPETENCIES</h2>
          <div class="res-grid">
            <div *ngFor="let group of data.skillGroups" class="res-grid-col">
              <p><strong>{{ group.label }}:</strong> 
                {{ getSkillList(group.skills) }}
              </p>
            </div>
          </div>
        </section>

        <hr class="res-divider" />

        <!-- Experience -->
        <section class="res-section">
          <h2 class="res-section-title">PROFESSIONAL EXPERIENCE</h2>
          <div *ngFor="let project of data.getFeaturedProjects()" class="res-exp-item">
            <div class="res-exp-header">
              <h3 class="res-exp-company">{{ project.title }} – {{ project.type }}</h3>
              <span class="res-exp-date">{{ project.year }}</span>
            </div>
            <p class="res-edu-notes">{{ project.description }}</p>
            <ul class="res-bullets">
              <li>Built with: {{ project.tech.join(', ') }}</li>
            </ul>
          </div>
        </section>

      </div>

      <!-- Floating Action Buttons (FABs) -->
      <div class="fab-container">
        <button class="fab-btn theme-toggle" (click)="themeService.toggleTheme()" [title]="themeService.isDarkMode() ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
          <svg *ngIf="themeService.isDarkMode()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          <svg *ngIf="!themeService.isDarkMode()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <a [href]="resumeUrl" class="fab-btn download-btn" download title="Download Resume">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        </a>
        <a [href]="'mailto:' + data.personal.email" class="fab-btn contact-btn" title="Contact Me">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .resume-container {
      background: var(--bg-primary);
      min-height: 100svh;
      padding: 100px 20px 60px;
      display: flex;
      justify-content: center;
      position: relative;
      transition: background-color 0.3s ease;
    }

    .resume-paper {
      background: var(--bg-secondary);
      color: var(--text-primary);
      max-width: 900px;
      width: 100%;
      padding: 60px;
      border-radius: 4px;
      box-shadow: 0 40px 100px rgba(0,0,0,0.5);
      border: 1px solid var(--border-subtle);
      font-family: var(--font-sans);
      transition: all 0.3s ease;
    }

    .res-header {
      margin-bottom: 1.5rem;
    }

    .res-name {
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      margin-bottom: 0.75rem;
      color: var(--text-primary);
    }

    .res-contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: var(--text-secondary);
      
      .divider { opacity: 0.3; }
      a { color: #3b82f6; transition: text-decoration 0.2s; &:hover { text-decoration: underline; } }
    }

    .res-divider {
      border: none;
      border-top: 1px solid var(--border-subtle);
      margin: 1.5rem 0;
    }

    .res-section { margin-bottom: 2rem; }

    .res-section-title {
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--text-primary);
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    .res-summary {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1rem;
      color: var(--text-secondary);
    }

    .res-bullets {
      padding-left: 1.25rem;
      list-style: disc;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      
      li { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; }
    }

    .res-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      
      p { font-size: 0.9rem; margin-bottom: 0.75rem; color: var(--text-secondary); }
      strong { color: var(--text-primary); }
    }

    .res-exp-item { margin-bottom: 2rem; }

    .res-exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
    }

    .res-exp-company {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .res-exp-date {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .res-edu-notes {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.5;
      margin-bottom: 0.75rem;
    }

    /* FABs */
    .fab-container {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      z-index: 1100;
    }

    .fab-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--bg-secondary);
      color: var(--text-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border-subtle);
      cursor: pointer;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      
      &:hover { transform: scale(1.1) translateY(-2px); border-color: var(--border-glow); }
      
      &.contact-btn {
        background: #3b82f6;
        color: #fff;
        border: none;
        &:hover { background: #60a5fa; }
      }
    }

    @media (max-width: 768px) {
      .resume-paper { padding: 40px 25px; }
      .res-name { font-size: 2.25rem; }
      .res-grid { grid-template-columns: 1fr; gap: 0.5rem; }
      .res-exp-header { flex-direction: column; gap: 0.25rem; }
      .fab-container { bottom: 1.5rem; right: 1.5rem; }
    }
  `]
})
export class ResumeComponent implements OnInit {
  themeService = inject(ThemeService);
  resumeUrl = '/assets/resume/resume.pdf';

  constructor(public data: PortfolioDataService) {}

  ngOnInit(): void {
    // Theme service handles initial state automatically
  }

  getSkillList(skills: any[]): string {
    return skills.map(s => s.name).join(', ');
  }
}
