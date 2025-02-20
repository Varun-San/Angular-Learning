import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  userList: any[] = [];

  products: any[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get('https://fake-store-api.mock.beeceptor.com/api/users')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }

  getProducts() {
    this.http
      .get('https://fake-store-api.mock.beeceptor.com/api/products')
      .subscribe((result: any) => {
        this.products = result;
      });
  }
}
