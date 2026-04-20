import { Component, HostListener, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header [class.scrolled]="scrolled()">
      <nav class="container nav">
        <a routerLink="/" class="logo" aria-label="Home">
          <span class="logo-text">VK<span>B.</span></span>
        </a>

        <div class="nav-right">
          <ul class="nav-links" [class.open]="menuOpen()">
            <li *ngFor="let link of navLinks">
              <a [routerLink]="link.path"
                 routerLinkActive="active"
                 [routerLinkActiveOptions]="{exact: link.exact}"
                 (click)="menuOpen.set(false)">
                {{ link.label }}
              </a>
            </li>

          </ul>

          <button class="theme-toggle-btn" (click)="themeService.toggleTheme()" [title]="themeService.isDarkMode() ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <svg *ngIf="themeService.isDarkMode()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            <svg *ngIf="!themeService.isDarkMode()" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>

          <button class="hamburger" (click)="menuOpen.set(!menuOpen())" [attr.aria-expanded]="menuOpen()" aria-label="Toggle menu">
            <span [class.open]="menuOpen()"></span>
            <span [class.open]="menuOpen()"></span>
          </button>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      padding: 1.5rem 0;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border-bottom: 1px solid transparent;

      &.scrolled {
        background: var(--bg-primary);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom-color: var(--border-subtle);
        padding: 1rem 0;
      }
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .logo {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--text-primary);
      letter-spacing: -0.04em;
      
      span { color: var(--text-muted); }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1rem;
      list-style: none;

      a {
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-secondary);
        transition: all 0.2s ease;

        &:hover, &.active { color: var(--text-primary); }
      }

      .nav-cta {
        padding: 0.5rem 1.25rem;
        background: var(--text-primary);
        color: var(--bg-primary) !important;
        border-radius: 6px;
        font-weight: 600;
        margin-left: 0.5rem;
        
        &:hover { transform: translateY(-1px); opacity: 0.9; }
      }
    }

    .theme-toggle-btn {
      background: none;
      border: 1px solid var(--border-subtle);
      width: 40px;
      height: 40px;
      border-radius: 8px;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover { color: var(--text-primary); border-color: var(--border-glow); background: rgba(255,255,255,0.05); }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;

      span {
        display: block;
        width: 20px;
        height: 1.5px;
        background: var(--text-primary);
        transition: all 0.3s ease;

        &.open:nth-child(1) { transform: translateY(4px) rotate(45deg); }
        &.open:nth-child(2) { transform: translateY(-4px) rotate(-45deg); }
      }
    }

    @media (max-width: 768px) {
      .hamburger { display: flex; }

      .nav-links {
        position: fixed;
        top: 0; right: 0; bottom: 0;
        width: 100%;
        height: 100svh;
        background: var(--bg-primary);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        transform: translateY(-100%);
        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: -1;

        &.open { transform: translateY(0); }

        a { font-size: 1.5rem; font-weight: 700; }
        .nav-cta { margin-left: 0; margin-top: 1rem; }
      }
    }
  `]
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { path: '/', label: 'About', exact: true },
    { path: '/projects', label: 'Projects', exact: false },
    { path: '/resume', label: 'Resume', exact: false },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }
}
