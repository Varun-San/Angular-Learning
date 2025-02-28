import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { CurstomerService } from '../services/curstomer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  router = inject(Router);
  custService = inject(CurstomerService);
  http = inject(HttpClient);

  onLogOut() {
    localStorage.removeItem('angularUser');
    this.router.navigateByUrl('login');
  }

  constructor() {
    this.custService.tokenExperied$.subscribe((res: boolean) => {
      if (res) {
        const loggedData = localStorage.getItem('tokenData');
        if (loggedData) {
          const loggedDataUser = JSON.parse(loggedData);
          const obj = {
            emailId: loggedDataUser.emailId,
            token: loggedDataUser.token,
            refreshToken: loggedDataUser.refreshToken,
          };
          this.http
            .post('https://projectapi.gerasim.in/api/UserApp/refresh', obj)
            .subscribe((result: any) => {
              localStorage.setItem('angularUser', result.data.userId);
              localStorage.setItem('token', result.data.token);
              localStorage.setItem('tokenData', JSON.stringify(result.data));
            });
        }
      }
    });
  }
}
