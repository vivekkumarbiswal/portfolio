import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeadGateService } from '../../../core/services/lead-gate.service';

@Component({
  selector: 'app-lead-capture-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lead-capture-form.component.html',
  styleUrl: './lead-capture-form.component.scss'
})
export class LeadCaptureFormComponent {
  onClose = output<void>();
  onSuccess = output<void>();

  isLoading = signal(false);
  errorMsg = signal<string | null>(null);

  model = {
    name: '',
    email: '',
    phone: '',
    purpose: 'Hiring'
  };

  constructor(private leadGate: LeadGateService) {}

  async onSubmit() {
    this.isLoading.set(true);
    this.errorMsg.set(null);

    const result = await this.leadGate.submitLead(this.model);
    
    if (result.success) {
      this.onSuccess.emit();
    } else {
      this.errorMsg.set(result.message || 'Something went wrong. Please try again.');
      this.isLoading.set(false);
    }
  }

  close() {
    if (!this.isLoading()) {
      this.onClose.emit();
    }
  }
}
