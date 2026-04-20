import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="not-found">
      <div class="container content">
        <div class="glitch-container">
          <h1 class="glitch" data-text="404">404</h1>
        </div>
        <h2 class="title">Logic Error <span>// Page Not Found</span></h2>
        <p class="description">
          The module you are looking for has been moved or deleted from the mainframe. 
          Let's get you back to a stable system.
        </p>
        <div class="actions">
          <a routerLink="/" class="btn-primary">
            Return to Home
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .not-found {
      min-height: 80svh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 20px;
    }

    .glitch {
      font-size: clamp(6rem, 15vw, 12rem);
      font-weight: 900;
      line-height: 1;
      position: relative;
      color: var(--text-primary);
      letter-spacing: -0.05em;
      margin-bottom: 2rem;
    }

    .title {
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      span { color: var(--text-muted); font-weight: 400; font-size: 0.6em; }
    }

    .description {
      max-width: 500px;
      margin: 0 auto 3.5rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .actions {
      display: flex;
      justify-content: center;
    }
  `]
})
export class NotFoundComponent {}
