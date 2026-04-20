import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SkillGroup } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
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
