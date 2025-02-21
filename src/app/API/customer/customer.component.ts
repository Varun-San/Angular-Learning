import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurstomerService } from '../../services/curstomer.service';

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

  customerArray: any[] = [];

  constructor(private custSer: CurstomerService) {
    this.getCustomer();
  }

  getCustomer() {
    this.custSer.loadCustomers().subscribe((result: any) => {
      this.customerArray = result.data;
    });
  }
  onSaveCustomer() {
    this.custSer
      .createNewCustomer(this.customerObj)
      .subscribe((result: any) => {
        if (result.result == true) {
          alert('Customer Created successfully');
          this.getCustomer();
        } else {
          alert(result.message);
        }
      });
  }
  onEdit(data: any) {
    this.customerObj = data;
  }

  onUpdateCustomer() {
    this.custSer.updateCustomer(this.customerObj).subscribe((result: any) => {
      if (result.result) {
        alert('Customer Updated Successfully');
        this.getCustomer();
      } else {
        alert(result.message);
      }
    });
  }

  onDeleteCustomer(id: any) {
    const isDelete = confirm('Are You Sure want to Delete');

    if (isDelete == true) {
      this.custSer.deleteCustomer(id).subscribe((result: any) => {
        if (result.result) {
          alert('Customer Deleted Successfully');
          this.getCustomer();
        } else {
          alert(result.message);
        }
      });
    }
  }
}
