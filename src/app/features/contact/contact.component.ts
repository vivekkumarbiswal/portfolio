import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LeadGateService } from '../../core/services/lead-gate.service';
import { LeadCaptureFormComponent } from '../../shared/components/lead-capture-form/lead-capture-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective, LeadCaptureFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private leadGate = inject(LeadGateService);
  isUnlocked = this.leadGate.isUnlocked;
  showLeadForm = signal(false);

  constructor(public data: PortfolioDataService) {}

  toggleLeadForm(show: boolean) {
    this.showLeadForm.set(show);
  }
}
