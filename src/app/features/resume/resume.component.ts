import { CommonModule } from "@angular/common";
import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";
import { ThemeService } from "../../core/services/theme.service";

@Component({
  selector: "app-resume",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./resume.component.html",
  styleUrl: "./resume.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class ResumeComponent implements OnInit {
  themeService = inject(ThemeService);

  ngOnInit() {
    // No-op: ThemeService already handles body.light-mode class globally
  }


  contactInfo = {
    phone: "+91 8********0",
    email: "vivekkumarbiswal@gmail.com",
    linkedin: "https://www.linkedin.com/in/vivek-kumar-biswal-a84856196/",
    github: "https://github.com/vivekkumarbiswal",
    location: "Bangalore",
  };

  downloadResume() {
    const link = document.createElement("a");
    link.href = "VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf";
    link.download = "VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf";
    link.click();
  }
}
