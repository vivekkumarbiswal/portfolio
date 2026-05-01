import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  stats: any[];
  githubStatsUrl: string;
  githubLanguagesUrl: string;

  private readonly ghUser = 'vivekkumarbiswal';
  private readonly theme = 'omni';
  private readonly bgColor = '00000000';
  private readonly titleColor = '7f8c8d';
  private readonly textColor = 'a1a1aa';
  private readonly iconColor = 'a1a1aa';

  constructor(private data: PortfolioDataService) {
    this.stats = this.data.getProfessionalStats();

    this.githubStatsUrl = `https://ghrs.vercel.app/api?username=${this.ghUser}&show_icons=true&theme=${this.theme}&hide_border=true&bg_color=${this.bgColor}&title_color=${this.titleColor}&text_color=${this.textColor}&icon_color=${this.iconColor}`;

    this.githubLanguagesUrl = `https://ghrs.vercel.app/api/top-langs/?username=${this.ghUser}&layout=compact&theme=${this.theme}&hide_border=true&bg_color=${this.bgColor}&title_color=${this.titleColor}&text_color=${this.textColor}`;
  }
}
