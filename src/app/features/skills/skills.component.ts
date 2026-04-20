import { Component, inject } from '@angular/core';
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

        <div class="skills-masonry">
          <div class="skill-group-cloud" *ngFor="let group of skillGroups; let gi = index"
               appReveal [revealDelay]="gi * 100">
            <div class="group-info">
              <h3 class="group-label">
                <span class="group-icon">{{ getCategoryIcon(group.category) }}</span>
                {{ group.label }}
              </h3>
            </div>

            <div class="skill-cloud">
              <div class="skill-tag" *ngFor="let skill of group.skills; let si = index"
                   [style.--delay]="si * 50 + 'ms'"
                   [attr.data-category]="group.category">
                <span class="skill-dot"></span>
                <span class="skill-text">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      background: var(--bg-secondary);
      position: relative;
    }

    .skills-masonry {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .skill-group-cloud {
      position: relative;
    }

    .group-info {
      margin-bottom: 1.5rem;
      border-left: 3px solid var(--accent);
      padding-left: 1rem;
    }

    .group-label {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .group-icon {
      font-size: 1.2rem;
      color: var(--accent);
    }

    .skill-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: flex-start;
    }

    .skill-tag {
      padding: 0.65rem 1.25rem;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 100px;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      cursor: default;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--accent);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 0;
      }

      &:hover {
        transform: translateY(-5px) scale(1.05);
        border-color: var(--accent);
        box-shadow: 0 10px 25px -5px var(--accent-glow);
        
        &::before { opacity: 0.05; }
        .skill-dot { transform: scale(1.5); background: var(--accent); }
        .skill-text { color: var(--text-primary); transform: translateX(2px); }
      }
    }

    .skill-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--border-glow);
      transition: all 0.3s ease;
      z-index: 1;
    }

    .skill-text {
      font-family: var(--font-mono);
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-secondary);
      transition: all 0.3s ease;
      z-index: 1;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      .skill-cloud { gap: 0.5rem; }
      .skill-tag { padding: 0.5rem 1rem; }
    }
  `]
})
export class SkillsComponent {
  data = inject(PortfolioDataService);
  skillGroups = this.data.skillGroups;

  getCategoryIcon(cat: string): string {
    const icons: Record<string, string> = {
      frontend: '⬢',
      backend: '⬡',
      devops: '◈',
      tools: '⚙',
      primary: '✦',
      secondary: '✧'
    };
    return icons[cat] ?? '●';
  }
}
