import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="marquee-container">
      <div class="marquee-content">
        <!-- Duplicate skills several times for seamless loop -->
        <ng-container *ngFor="let i of [1, 2, 3, 4]">
          <div class="skill-pill" *ngFor="let skill of allSkills">
            {{ skill.name }}
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .marquee-container {
      background: var(--bg-secondary);
      padding: 2rem 0;
      overflow: hidden;
      display: flex;
      border-top: 1px solid var(--border-subtle);
      border-bottom: 1px solid var(--border-subtle);
      position: relative;
      
      &::before, &::after {
        content: "";
        height: 100%;
        position: absolute;
        width: 15rem;
        z-index: 2;
        pointer-events: none;
      }
      
      &::before {
        left: 0;
        top: 0;
        background: linear-gradient(to right, var(--bg-secondary) 0%, transparent 100%);
      }
      
      &::after {
        right: 0;
        top: 0;
        background: linear-gradient(to left, var(--bg-secondary) 0%, transparent 100%);
      }
    }

    .marquee-content {
      display: flex;
      gap: 3rem;
      animation: scroll 40s linear infinite;
      width: max-content;
    }

    .skill-pill {
      font-family: var(--font-mono);
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-muted);
      white-space: nowrap;
      transition: color 0.3s ease;
      
      &:hover { color: var(--accent); }
    }

    @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
  `]
})
export class MarqueeComponent {
  allSkills: any[] = [];

  constructor(private data: PortfolioDataService) {
    this.allSkills = this.data.skillGroups.flatMap(g => g.skills);
  }
}
