import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-content">
          <p class="hero-intro animate-fade-up delay-1">Hi, I'm</p>
          
          <h1 class="hero-name animate-fade-up delay-2">
            {{ data.personal.name }}<span>.</span>
          </h1>

          <div class="hero-role-container animate-fade-up delay-3">
            <p class="hero-role">
              {{ typedRole() }}
            </p>
          </div>

          <p class="hero-tagline animate-fade-up delay-4">
            {{ data.personal.tagline }}
          </p>

          <div class="hero-ctas animate-fade-up delay-5">
            <a routerLink="/projects" class="btn-primary">
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <a routerLink="/resume" class="btn-ghost">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100svh;
      display: flex;
      align-items: center;
      position: relative;
      background: var(--bg-primary);
      padding-top: 60px;
    }

    .hero-inner {
      width: 100%;
    }

    .hero-content {
      max-width: 900px;
    }

    .hero-intro {
      font-family: var(--font-mono);
      font-size: 1rem;
      color: var(--text-secondary);
      margin-bottom: 0.75rem;
      letter-spacing: -0.02em;
    }

    .hero-name {
      font-size: clamp(3.5rem, 12vw, 8.5rem);
      font-weight: 800;
      line-height: 0.9;
      margin-bottom: 1.5rem;
      letter-spacing: -0.05em;
      
      span { color: var(--text-muted); opacity: 0.6; }
    }

    .hero-role-container {
      margin-bottom: 1rem;
      height: 3rem;
      display: flex;
      align-items: center;
    }

    .hero-role {
      font-size: clamp(1.25rem, 4vw, 2.5rem);
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: -0.03em;
      margin: 0;
    }

    .hero-tagline {
      font-size: clamp(1rem, 2vw, 1.25rem);
      color: var(--text-secondary);
      max-width: 600px;
      line-height: 1.6;
      margin-bottom: 2.5rem;
      opacity: 0.8;
    }

    .hero-ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .btn-primary svg {
      transition: transform 0.3s ease;
    }
    .btn-primary:hover svg {
      transform: translate(2px, -2px);
    }
  `]
})
export class HeroComponent implements OnInit {
  typedRole = signal('');
  private roles: string[] = [];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 60;
  private erasingSpeed = 30;
  private pauseDuration = 2000;

  constructor(public data: PortfolioDataService) {
    this.roles = this.data.personal.roles;
  }

  ngOnInit(): void {
    this.type();
  }

  private type(): void {
    const currentRole = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.typedRole.set(currentRole.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.typedRole.set(currentRole.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let delta = this.isDeleting ? this.erasingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      this.isDeleting = true;
      delta = this.pauseDuration;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delta = 500;
    }

    setTimeout(() => this.type(), delta);
  }
}
