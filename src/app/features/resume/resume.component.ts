import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="resume-wrapper">
      <div class="resume-paper animate-fade-up">
        
        <!-- Header Section -->
        <div class="res-header-row">
          <header class="res-header">
            <h1 class="res-name">{{ data.personal.name }}</h1>
            <div class="res-contact-info">
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="res-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> {{ data.personal.phone }}</span>
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="res-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> {{ data.personal.email }}</span>
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="res-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> <a [href]="data.personal.linkedin" target="_blank">LinkedIn</a></span>
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="res-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> <a [href]="data.personal.github" target="_blank">GitHub</a></span>
            </div>
          </header>
          <div class="res-actions">
            <a href="/assets/resume/resume.pdf" download class="res-download-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download PDF
            </a>
          </div>
        </div>

        <hr class="res-hr" />

        <!-- Summary -->
        <section class="res-section">
          <h2 class="res-sec-title">{{ data.personal.title }}</h2>
          <p class="res-bio">{{ data.personal.tagline }}</p>
          <ul class="res-list">
            <li>Experienced in building scalable Angular applications using TypeScript and RxJS, with working knowledge of Ionic and Capacitor for hybrid mobile development.</li>
            <li>Skilled in developing responsive, accessible, and high-performance web applications that enhance user experience and meet business requirements.</li>
            <li>Strong experience collaborating in Agile environments, contributing across the SDLC from development to deployment.</li>
            <li>Recognized with the Star Team Award for outstanding teamwork and successful project delivery.</li>
          </ul>
        </section>

        <hr class="res-hr" />

        <!-- Skills -->
        <section class="res-section">
          <h2 class="res-sec-title">KEY COMPETENCIES</h2>
          <div class="res-grid">
            <div *ngFor="let group of data.skillGroups" class="res-grid-col">
              <p><strong>{{ group.label }}:</strong> {{ getSkillNames(group) }}</p>
            </div>
          </div>
        </section>

        <hr class="res-hr" />

        <!-- Experience -->
        <section class="res-section">
          <h2 class="res-sec-title">PROFESSIONAL EXPERIENCE</h2>
          <div class="res-exp-group" *ngFor="let exp of data.experiences">
            <div class="res-exp-top">
              <h3 class="res-company">{{ exp.company }} — {{ exp.role }}</h3>
            </div>
            <div class="res-project-header">
              <span class="res-project-name">Project: {{ exp.description }}</span>
              <span class="res-date">{{ exp.period }}</span>
            </div>
            <ul class="res-list">
              <li *ngFor="let bullet of exp.bullets">{{ bullet }}</li>
            </ul>
          </div>
        </section>

        <hr class="res-hr" />

        <!-- Achievements & Certs -->
        <section class="res-section">
          <div class="res-grid dual-section">
            <div class="res-grid-col">
              <h2 class="res-sec-title">ACHIEVEMENTS</h2>
              <ul class="res-list compact">
                <li *ngFor="let ach of data.achievements">
                  {{ ach.title }} <span *ngIf="ach.year">({{ ach.year }})</span>
                </li>
              </ul>
            </div>
            <div class="res-grid-col">
              <h2 class="res-sec-title">CERTIFICATE</h2>
              <ul class="res-list compact">
                <li *ngFor="let cert of data.certificates">{{ cert.title }}</li>
              </ul>
            </div>
          </div>
        </section>

        <hr class="res-hr" />

        <!-- Education -->
        <section class="res-section no-margin">
          <h2 class="res-sec-title">EDUCATION</h2>
          <div class="res-edu-item">
            <div class="res-edu-top">
              <h3><strong>{{ data.education[0].degree }}</strong>, {{ data.education[0].institution }}</h3>
              <span class="res-date">{{ data.education[0].period }}</span>
            </div>
          </div>
        </section>

      </div>
    </section>
  `,
  styles: [`
    .resume-wrapper {
      background-color: var(--bg-secondary);
      min-height: 100svh;
      padding: 60px 20px;
      display: flex;
      justify-content: center;
      color: var(--text-primary);
      font-family: 'Inter', sans-serif;
      transition: background-color 0.3s ease;
    }

    .resume-paper {
      background-color: var(--bg-paper, #ffffff);
      width: 100%;
      max-width: 900px;
      padding: 60px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      border-radius: 4px;
      color: var(--text-paper, #18181b);
      transition: all 0.3s ease;
      border: 1px solid var(--border-subtle);
    }

    :host-context(.light-mode) .resume-paper {
      --bg-paper: #ffffff;
      --text-paper: #18181b;
      --border-res: #e4e4e7;
      --muted-res: #71717a;
    }

    :host-context(:not(.light-mode)) .resume-paper {
      --bg-paper: #18181b;
      --text-paper: #f4f4f5;
      --border-res: #27272a;
      --muted-res: #a1a1aa;
      box-shadow: 0 10px 40px rgba(0,0,0,0.4);
    }

    .res-header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .res-name {
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      margin-bottom: 0.75rem;
      color: var(--text-paper);
    }

    .res-contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;
      font-size: 0.9rem;
      color: var(--muted-res);
      
      span { display: flex; align-items: center; gap: 0.35rem; }
      a { color: inherit; text-decoration: none; &:hover { text-decoration: underline; color: var(--accent); } }
      .res-icon { opacity: 0.8; }
    }

    .res-download-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1rem;
      background: var(--text-paper);
      color: var(--bg-paper);
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      text-decoration: none;
      transition: transform 0.2s ease, opacity 0.2s ease;
      &:hover { transform: translateY(-2px); opacity: 0.9; }
    }

    .res-hr {
      border: none;
      border-top: 1.5px solid var(--border-res, #e4e4e7);
      margin: 1.5rem 0;
    }

    .res-section { margin-bottom: 2rem; }
    .no-margin { margin-bottom: 0; }

    .res-sec-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-paper);
      margin-bottom: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .res-bio {
      font-size: 1rem;
      line-height: 1.6;
      font-weight: 600;
      font-style: italic;
      margin-bottom: 1.25rem;
      color: var(--text-paper);
    }

    .res-list {
      padding-left: 1.15rem;
      margin: 0;
      list-style: disc;
      
      li {
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 0.6rem;
        color: var(--text-paper);
        opacity: 0.9;
        &::marker { color: var(--text-paper); }
      }

      &.compact li { margin-bottom: 0.4rem; }
    }

    .res-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      
      p { font-size: 0.95rem; line-height: 1.6; margin: 0; color: var(--text-paper); opacity: 0.9; }
      strong { font-weight: 700; color: var(--text-paper); }
    }

    .res-exp-group { margin-bottom: 2.25rem; &:last-child { margin-bottom: 0; } }

    .res-exp-top { margin-bottom: 0.5rem; }
    .res-company { font-size: 1.15rem; font-weight: 700; color: var(--text-paper); }

    .res-project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.85rem;
      font-style: italic;
      color: var(--text-paper);
      font-weight: 600;
      font-size: 0.95rem;
      opacity: 0.85;
    }

    .res-date { color: var(--muted-res); font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 400; font-style: normal; }

    .res-edu-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      h3 { font-size: 1rem; font-weight: 400; color: var(--text-paper); }
    }

    @media (max-width: 768px) {
      .resume-paper { padding: 40px 25px; }
      .res-header-row { flex-direction: column; gap: 1.5rem; }
      .res-name { font-size: 2.25rem; }
      .res-grid { grid-template-columns: 1fr; gap: 1rem; }
      .res-project-header { flex-direction: column; align-items: flex-start; gap: 0.25rem; }
      .res-edu-top { flex-direction: column; gap: 0.25rem; }
    }
  `]
})
export class ResumeComponent {
  data = inject(PortfolioDataService);

  getSkillNames(group: any): string {
    return group.skills.map((s: any) => s.name).join(', ');
  }
}
