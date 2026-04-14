import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsPreviewComponent } from '../projects-preview/projects-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SkillsComponent, ProjectsPreviewComponent],
  template: `
    <app-hero />
    <app-skills />
    <app-projects-preview />
  `
})
export class HomeComponent {}
