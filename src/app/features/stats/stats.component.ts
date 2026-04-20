import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card" *ngFor="let stat of stats" appReveal>
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>

        <!-- GitHub Activity Mockup / Integration -->
        <div class="github-stats card" appReveal [revealDelay]="200">
          <div class="github-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            <h3>GitHub Ecosystem</h3>
          </div>
          <div class="github-content">
            <img [src]="githubStatsUrl" alt="GitHub Stats" class="stats-img">
            <img [src]="githubLanguagesUrl" alt="Top Languages" class="stats-img">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stats-section { padding-top: 0; padding-bottom: 2rem; }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .stat-card {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .stat-value {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      color: var(--text-primary);
      line-height: 1;
      letter-spacing: -0.05em;
    }

    .stat-label {
      font-size: 0.85rem;
      font-family: var(--font-mono);
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .github-stats {
      padding: 2.5rem;
      background: var(--bg-card);
    }

    .github-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      color: var(--accent);
      h3 { color: var(--text-primary); font-size: 1.25rem; font-weight: 700; }
    }

    .github-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 1.5rem;
    }

    .stats-img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      filter: grayscale(1) invert(1); // Force matching the dark theme if they are light-themed
      opacity: 0.8;
      transition: all 0.3s ease;
      &:hover { opacity: 1; filter: grayscale(0) invert(0); }
    }

    @media (max-width: 900px) {
      .github-content { grid-template-columns: 1fr; }
    }
  `]
})
export class StatsComponent {
  stats: any[];
  githubStatsUrl: string;
  githubLanguagesUrl: string;

  constructor(private data: PortfolioDataService) {
    this.stats = this.data.getProfessionalStats();
    const ghUser = 'vivekkumarbiswal';
    this.githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${ghUser}&show_icons=true&theme=omni&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=a1a1aa&icon_color=ffffff`;
    this.githubLanguagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${ghUser}&layout=compact&theme=omni&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=a1a1aa`;
  }
}
