import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './projects-preview.component.html',
  styleUrl: './projects-preview.component.scss'
})
export class ProjectsPreviewComponent {
  featured = this.data.getFeaturedProjects();
  constructor(private data: PortfolioDataService) {}
  formatIndex(i: number): string { return `// project_${String(i + 1).padStart(2, '0')}`; }
}
