import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  customerObj: any = {
    customerId: 0,
    customerName: '',
    customerCity: '',
    mobileNo: '',
    email: '',
  };

  getCustomer() {}

  constructor(private http: HttpClient) {
    this.http.get('');
    this.getCustomer();
  }
}
