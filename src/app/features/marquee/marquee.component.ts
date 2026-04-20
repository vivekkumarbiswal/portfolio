import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {
  allSkills: any[] = [];

  constructor(private data: PortfolioDataService) {
    this.allSkills = this.data.skillGroups.flatMap(g => g.skills);
  }
}
