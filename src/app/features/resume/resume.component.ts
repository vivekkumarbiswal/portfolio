import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-resume",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./resume.component.html",
  styleUrl: "./resume.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class ResumeComponent {



  contactInfo = {
    phone: "+91 8********0",
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
}
