import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from '../Reusable/progress-bar/progress-bar.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink, ProgressBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private router: Router) {}

  http = inject(HttpClient);

  getUsers() {
    this.http
      .get('https://projectapi.gerasim.in/api/UserApp/GetAllUsers')
      .subscribe(() => {});
  }

  navigateTo() {
    this.router.navigateByUrl('/ng-Class');
  }
}
