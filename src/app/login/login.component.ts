import { Component, inject } from '@angular/core';
import { Login } from '../model/Login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: Login = new Login();

  apiLoginObj: any = {
    EmailId: '',
    Password: '',
  };

  router = inject(Router);
  http = inject(HttpClient);

  onLogin() {
    // if (this.loginObj.userName == 'admin' && this.loginObj.password == '123') {
    //   this.router.navigateByUrl('admin');
    // } else {
    //   alert('Wrong Crdentails');
    // }

    this.http
      .post('https://projectapi.gerasim.in/api/UserApp/login', this.loginObj)
      .subscribe(
        (result: any) => {
          localStorage.setItem('angularUser', result.data.userId);
          localStorage.setItem('token', result.data.token);
          localStorage.setItem('tokenData', JSON.stringify(result.data));
          this.router.navigateByUrl('admin');
          console.log(this.loginObj);
        },
        (error) => {
          alert('Wrong Credentials');
          console.log(this.loginObj);
        }
      );
  }
}
