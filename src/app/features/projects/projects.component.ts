import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <div class="container">
        <div class="projects-header">
          <span class="section-label animate-fade-up">Selected Work</span>
          <h2 class="section-title animate-fade-up delay-1">
            Projects<span>.</span>
          </h2>
        </div>

        <div class="projects-grid">
          <div *ngFor="let project of data.projects; let i = index" 
               class="project-card animate-fade-up" 
               [style.animation-delay]="(i * 0.1) + 0.2 + 's'">
            
            <div class="project-image-wrapper">
              <img [src]="project.image || 'assets/images/project-placeholder.svg'" 
                   [alt]="project.title" 
                   class="project-image">
              <div class="project-overlay">
                <div class="project-links">
                  <a [href]="project.github" target="_blank" class="link-btn" title="View Source">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                  </a>
                  <a [href]="project.demo" target="_blank" class="link-btn" title="Live Demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="project-info">
              <div class="project-meta">
                <span class="project-year">{{ project.year }}</span>
                <span class="project-type">{{ project.type || 'Web Application' }}</span>
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              
              <div class="project-tags">
                <span *ngFor="let tech of project.tech" class="tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: var(--section-padding) 0;
      background: var(--bg-primary);
    }

    .projects-header {
      margin-bottom: 4rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 3rem;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      
      &:hover .project-image { transform: scale(1.05); }
      &:hover .project-overlay { opacity: 1; }
    }

    .project-image-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 16/10;
      background: var(--bg-card);
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border-subtle);
    }

    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .project-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      backdrop-filter: blur(4px);
    }

    .project-links {
      display: flex;
      gap: 1rem;
    }

    .link-btn {
      width: 44px;
      height: 44px;
      background: #fff;
      color: #000;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      
      &:hover { transform: scale(1.1); }
    }

    .project-meta {
      display: flex;
      gap: 1rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .project-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      letter-spacing: -0.02em;
    }

    .project-desc {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    @media (max-width: 480px) {
      .projects-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProjectsComponent {
  constructor(public data: PortfolioDataService) {}
}
