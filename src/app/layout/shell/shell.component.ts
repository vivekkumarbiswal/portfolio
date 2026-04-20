import { Component, inject, HostListener, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../core/services/theme.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <!-- Scroll Progress Indicator -->
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" [style.width.%]="scrollPercent()"></div>
    </div>

    <app-header />
    
    <main>
      <router-outlet />
    </main>

    <app-footer />
  `,
  styles: [`
    .scroll-progress-container {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: transparent;
      z-index: 2000;
      pointer-events: none;
    }
    .scroll-progress-bar {
      height: 100%;
      background: var(--accent);
      transition: width 0.1s ease-out;
      box-shadow: 0 0 10px var(--accent);
    }
  `]
})
export class ShellComponent {
  private router = inject(Router);
  themeService = inject(ThemeService);
  data = inject(PortfolioDataService);

  scrollPercent = signal(0);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    this.scrollPercent.set(scrollHeight > 0 ? (scrollPos / scrollHeight) * 100 : 0);
  }
}
