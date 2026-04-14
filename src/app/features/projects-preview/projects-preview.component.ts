import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  template: `
    <section class="section" id="projects" aria-labelledby="projects-preview-heading">
      <div class="container">

        <div appReveal class="section-header">
          <p class="section-label">Selected work</p>
          <h2 class="section-title" id="projects-preview-heading">
            Featured <span>Projects</span>
          </h2>
          <a routerLink="/projects" class="view-all">
            View all projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div class="projects-grid">
          <article class="project-card card"
                   *ngFor="let project of featured; let i = index"
                   appReveal [revealDelay]="i * 120"
                   [attr.data-status]="project.status">

            <!-- Top bar -->
            <div class="card-top">
              <div class="card-index">
                <span class="mono-comment">{{ formatIndex(i) }}</span>
              </div>
              <div class="card-links">
                <a *ngIf="project.github" [href]="project.github" target="_blank" rel="noopener"
                   class="icon-link" aria-label="GitHub repo">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
                <a *ngIf="project.live" [href]="project.live" target="_blank" rel="noopener"
                   class="icon-link" aria-label="Live site">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                </a>
              </div>
            </div>

            <!-- Content -->
            <div class="card-body">
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-desc">{{ project.description }}</p>
            </div>

            <!-- Tech tags -->
            <div class="card-tags">
              <span class="tag" *ngFor="let t of project.tech.slice(0, 4)">{{ t }}</span>
              <span class="tag more" *ngIf="project.tech.length > 4">+{{ project.tech.length - 4 }}</span>
            </div>

            <!-- Status + year -->
            <div class="card-footer">
              <span class="status-pill" [attr.data-status]="project.status">{{ project.status }}</span>
              <span class="card-year">{{ project.year }}</span>
            </div>
          </article>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .section-header {
      display: flex; align-items: flex-end; justify-content: space-between;
      flex-wrap: wrap; gap: 1rem; margin-bottom: 3rem;
    }

    .view-all {
      display: flex; align-items: center; gap: 0.4rem;
      font-family: var(--font-mono); font-size: 0.75rem;
      color: var(--accent); text-decoration: none;
      letter-spacing: 0.05em;
      transition: gap 0.2s;
      &:hover { gap: 0.7rem; }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .project-card {
      padding: 1.75rem;
      display: flex; flex-direction: column; gap: 1rem;
      border-radius: 2px;
      cursor: default;
    }

    .card-top {
      display: flex; align-items: center; justify-content: space-between;
    }
    .mono-comment {
      font-family: var(--font-mono); font-size: 0.65rem;
      color: var(--text-muted); letter-spacing: 0.1em;
    }
    .card-links { display: flex; gap: 0.75rem; }
    .icon-link {
      color: var(--text-muted); text-decoration: none;
      transition: color 0.2s;
      display: flex; align-items: center;
      &:hover { color: var(--accent); }
    }

    .card-body { flex: 1; }
    .card-title {
      font-family: var(--font-display);
      font-size: 1.3rem; font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.6rem;
      letter-spacing: -0.01em;
    }
    .card-desc {
      font-family: var(--font-mono); font-size: 0.8rem;
      color: var(--text-secondary); line-height: 1.7;
    }

    .card-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .tag.more {
      background: rgba(191,95,255,0.08);
      border-color: rgba(191,95,255,0.2);
      color: var(--neon-purple);
    }

    .card-footer {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 0.75rem;
      border-top: 1px solid var(--border-subtle);
    }
    .status-pill {
      font-family: var(--font-mono); font-size: 0.65rem;
      letter-spacing: 0.08em; text-transform: uppercase;
      padding: 0.2rem 0.6rem;
      border-radius: 20px;

      &[data-status="live"] {
        background: rgba(0,255,148,0.08);
        color: var(--neon-green);
        border: 1px solid rgba(0,255,148,0.2);
      }
      &[data-status="wip"] {
        background: rgba(255,200,0,0.08);
        color: #ffc800;
        border: 1px solid rgba(255,200,0,0.2);
      }
      &[data-status="archived"] {
        background: rgba(136,136,170,0.08);
        color: var(--text-muted);
        border: 1px solid var(--border-subtle);
      }
    }
    .card-year {
      font-family: var(--font-mono); font-size: 0.7rem;
      color: var(--text-muted);
    }

    @media (max-width: 768px) {
      .projects-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProjectsPreviewComponent {
  featured = this.data.getFeaturedProjects();
  constructor(private data: PortfolioDataService) {}
  formatIndex(i: number): string { return `// project_${String(i + 1).padStart(2, '0')}`; }
}
