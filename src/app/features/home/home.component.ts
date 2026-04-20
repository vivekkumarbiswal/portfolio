import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsPreviewComponent } from '../projects-preview/projects-preview.component';
import { ContactComponent } from '../contact/contact.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { StatsComponent } from '../stats/stats.component';
import { MarqueeComponent } from '../marquee/marquee.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent, 
    SkillsComponent, 
    ProjectsPreviewComponent, 
    ContactComponent, 
    TimelineComponent,
    StatsComponent,
    MarqueeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
