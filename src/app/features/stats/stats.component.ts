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

  constructor(private data: PortfolioDataService) {
    this.stats = this.data.getProfessionalStats();
    const ghUser = 'vivekkumarbiswal';
    this.githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${ghUser}&show_icons=true&theme=omni&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=a1a1aa&icon_color=ffffff`;
    this.githubLanguagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${ghUser}&layout=compact&theme=omni&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=a1a1aa`;
  }
}
