import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="section timeline-section" id="experience">
      <div class="container">
        
        <div appReveal>
          <p class="section-label">Trajectory</p>
          <h2 class="section-title">Career <span>Timeline</span></h2>
        </div>

        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of data.experiences; let i = index" 
               appReveal [revealDelay]="i * 150">
            <div class="timeline-dot" [class.current]="exp.current"></div>
            <div class="timeline-content card">
              <span class="exp-period">{{ exp.period }}</span>
              <h3 class="exp-role">{{ exp.role }}</h3>
              <h4 class="exp-company">{{ exp.company }}</h4>
              <p class="exp-project">Project: <span>{{ exp.description }}</span></p>
              <ul class="exp-bullets">
                <li *ngFor="let bullet of exp.bullets">{{ bullet }}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .timeline-section { background: var(--bg-primary); }

    .timeline {
      position: relative;
      max-width: 800px;
      margin: 4rem auto 0;
      padding-left: 2rem;
      border-left: 1px solid var(--border-subtle);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 4rem;
      &:last-child { margin-bottom: 0; }
    }

    .timeline-dot {
      position: absolute;
      left: -2.35rem;
      top: 1.5rem;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--text-muted);
      border: 2px solid var(--bg-primary);
      z-index: 2;

      &.current {
        background: var(--accent);
        box-shadow: 0 0 15px var(--accent);
        transform: scale(1.2);
      }
    }

    .timeline-content {
      padding: 2rem;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: -1rem; top: 1.5rem;
        width: 1rem; height: 1px;
        background: var(--border-subtle);
      }
    }

    .exp-period {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--accent);
      margin-bottom: 1rem;
      background: var(--accent-glow);
      padding: 4px 8px;
      border-radius: 4px;
    }

    .exp-role {
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
      color: var(--text-primary);
    }

    .exp-project {
      font-size: 1rem;
      color: var(--text-primary);
      margin-bottom: 1rem;
      font-weight: 600;
      span { color: var(--text-secondary); font-weight: 400; font-style: italic; }
    }

    .exp-bullets {
      padding-left: 1.25rem;
      list-style: disc;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      
      li { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; }
    }

    @media (max-width: 768px) {
      .timeline { padding-left: 1.5rem; }
      .timeline-dot { left: -1.85rem; }
    }
  `]
})
export class TimelineComponent {
  constructor(public data: PortfolioDataService) {}
}
