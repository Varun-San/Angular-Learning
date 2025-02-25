import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from "../Reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink, ProgressBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private router: Router) {}
  navigateTo() {
    this.router.navigateByUrl('/ng-Class');
  }
}
