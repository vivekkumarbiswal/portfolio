import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
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
