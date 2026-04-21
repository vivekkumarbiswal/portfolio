import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation, inject, signal } from "@angular/core";
import { LeadGateService } from "../../core/services/lead-gate.service";
import { LeadCaptureFormComponent } from "../../shared/components/lead-capture-form/lead-capture-form.component";

@Component({
  selector: "app-resume",
  standalone: true,
  imports: [CommonModule, LeadCaptureFormComponent],
  templateUrl: "./resume.component.html",
  styleUrl: "./resume.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class ResumeComponent {
  private leadGate = inject(LeadGateService);
  isUnlocked = this.leadGate.isUnlocked;
  showLeadForm = signal(false);

  contactInfo = {
    phone: "+91 8050507550",
    email: "vivekkumarbiswal@gmail.com",
    linkedin: "https://www.linkedin.com/in/vivek-kumar-biswal-a84856196/",
    github: "https://github.com/vivekkumarbiswal",
    location: "Bangalore",
  };

  downloadResume() {
    const link = document.createElement("a");
    link.href = "assets/resume/VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf";
    link.download = "VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf";
    link.click();
  }

  toggleLeadForm(show: boolean) {
    this.showLeadForm.set(show);
  }
}
