import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div class="container">
        
        <div appReveal class="contact-header">
          <p class="section-label">Connect</p>
          <h2 class="section-title" id="contact-heading">
            Get In <span>Touch</span>
          </h2>
          <p class="contact-description">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a project idea or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-grid">
            <a [href]="'mailto:' + data.personal.email" class="contact-card card" appReveal [revealDelay]="100">
              <div class="card-icon-container">
                <div class="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
              </div>
              <div class="card-info">
                <h3>Email</h3>
                <p>{{ data.personal.email }}</p>
              </div>
            </a>

            <a [href]="data.personal.linkedin" target="_blank" class="contact-card card" appReveal [revealDelay]="200">
              <div class="card-icon-container">
                <div class="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
              </div>
              <div class="card-info">
                <h3>LinkedIn</h3>
                <p>Connect Professionally</p>
              </div>
            </a>

            <a [href]="data.personal.github" target="_blank" class="contact-card card" appReveal [revealDelay]="300">
              <div class="card-icon-container">
                <div class="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
              </div>
              <div class="card-info">
                <h3>GitHub</h3>
                <p>Check my Repos</p>
              </div>
            </a>
          </div>

          <div class="contact-footer" appReveal [revealDelay]="400">
            <a [href]="'mailto:' + data.personal.email" class="btn-primary main-cta">
              Send a Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: var(--bg-primary);
      position: relative;
    }

    .contact-header {
      max-width: 700px;
      margin-bottom: 4rem;
    }

    .contact-description {
      font-size: clamp(1rem, 2vw, 1.15rem);
      color: var(--text-secondary);
      line-height: 1.6;
      margin-top: 1.5rem;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .contact-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
      padding: 2rem;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      border-radius: 16px;
      height: 100%;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 0.4rem;
        color: var(--text-primary);
        font-weight: 700;
        letter-spacing: -0.01em;
      }

      p {
        font-size: 0.9rem;
        color: var(--text-muted);
        font-family: var(--font-sans);
        line-height: 1.4;
      }

      .card-icon-container {
        width: 56px;
        height: 56px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card-icon {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        transition: all 0.3s ease;
        border: 1px solid var(--border-subtle);
        z-index: 1;
      }

      &:hover {
        transform: translateY(-8px);
        background: var(--bg-card-hover);
        border-color: var(--border-glow);
        box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);

        .card-icon {
          background: var(--accent);
          color: var(--bg-primary);
          border-color: var(--accent);
          transform: scale(1.05);
        }

        p { color: var(--text-secondary); }
      }
    }

    .contact-footer {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }

    .main-cta {
      padding: 1.15rem 3rem;
      font-size: 1rem;
      letter-spacing: 0.02em;
    }

    @media (max-width: 1024px) {
      .contact-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 768px) {
      .contact-grid { 
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .contact-card { padding: 1.5rem; }
    }
  `]
})
export class ContactComponent {
  constructor(public data: PortfolioDataService) {}
}
