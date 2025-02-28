import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurstomerService {
  tokenExperied$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  apiurl: string = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/';

  loadCustomers() {
    return this.http.get(this.apiurl + 'GetCustomers');
  }

  createNewCustomer(obj: any) {
    return this.http.post(this.apiurl + 'CreateNewCustomer', obj);
  }

  updateCustomer(obj: any) {
    return this.http.put(this.apiurl + 'UpdateCustomer', obj);
  }

  deleteCustomer(id: any) {
    return this.http.delete(this.apiurl + `DeletCustomerById?id=${id}`);
  }
}
