import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SkillGroup } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="section skills-section" id="skills" aria-labelledby="skills-heading">
      <div class="container">

        <div appReveal>
          <p class="section-label">Capabilities</p>
          <h2 class="section-title" id="skills-heading">
            Tech <span>Stack</span>
          </h2>
        </div>

        <div class="skills-grid">
          <div class="skill-group card" *ngFor="let group of skillGroups; let gi = index"
               appReveal [revealDelay]="gi * 100">
            <div class="group-header">
              <span class="group-icon">{{ getCategoryIcon(group.category) }}</span>
              <h3 class="group-label">{{ group.label }}</h3>
            </div>

            <div class="skill-list">
              <div class="skill-item" *ngFor="let skill of group.skills; let si = index">
                <div class="skill-meta">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-fill"
                       [style.width.%]="animating ? skill.level : 0"
                       [style.transition-delay]="(gi * 100 + si * 60) + 'ms'">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .skills-section { background: var(--bg-secondary); }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }

    .skill-group {
      padding: 1.75rem;
      border-radius: 2px;
    }

    .group-header {
      display: flex; align-items: center; gap: 0.75rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-subtle);
    }
    .group-icon { font-size: 1.2rem; }
    .group-label {
      font-family: var(--font-display);
      font-size: 0.95rem; font-weight: 700;
      color: var(--text-primary);
      letter-spacing: 0.02em;
    }

    .skill-list { display: flex; flex-direction: column; gap: 1.1rem; }

    .skill-meta {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 0.35rem;
    }
    .skill-name {
      font-family: var(--font-mono); font-size: 0.78rem;
      color: var(--text-secondary);
    }
    .skill-level {
      font-family: var(--font-mono); font-size: 0.68rem;
      color: var(--text-muted);
    }

    .skill-bar {
      height: 3px;
      background: var(--border-subtle);
      overflow: hidden;
    }
    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent), var(--neon-purple));
      transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;

      &::after {
        content: '';
        position: absolute; right: 0; top: 50%;
        transform: translateY(-50%);
        width: 6px; height: 6px; border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 8px var(--accent);
      }
    }
  `]
})
export class SkillsComponent implements AfterViewInit {
  skillGroups: SkillGroup[];
  animating = false;

  constructor(private portfolioData: PortfolioDataService, private host: ElementRef) {
    this.skillGroups = portfolioData.skillGroups;
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => this.animating = true, 200);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(this.host.nativeElement);
  }

  getCategoryIcon(cat: string): string {
    const icons: Record<string, string> = {
      frontend: '⬡',
      backend: '◈',
      devops: '◎',
      ai: '◇',
      tools: '◉',
    };
    return icons[cat] ?? '◆';
  }
}
