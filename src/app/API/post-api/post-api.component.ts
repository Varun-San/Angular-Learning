import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent {
  //Creating a get Api using Constructor
  // constructor(private http: HttpClient) {}

  //Creating a get Api using Injector
  http = inject(HttpClient);

  carDetails: any[] = [];

  carObj: any = {
    carId: 0,
    brand: '',
    model: '',
    year: '',
    color: '',
    dailyRate: '',
    carImage: '',
    regNo: '',
  };

  getAllCars() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars')
      .subscribe((result: any) => {
        this.carDetails = result.data;
      });
  }

  onSaveCar() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar',
        this.carObj
      )
      .subscribe((result: any) => {
        if (result.result) {
          alert('Car Created Successfully');
          this.getAllCars();
        } else {
          alert(result.message);
        }
      });
  }

  onUpdateCar() {
    this.http
      .put(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar',
        this.carObj
      )
      .subscribe((result: any) => {
        if (result.result) {
          alert('Car Updated Successfully');
          this.getAllCars();
        } else {
          alert(result.message);
        }
      });
  }

  onEdit(data: any) {
    this.carObj = data;
  }

  onDelete(id: any) {
    const isDelete = confirm('Are You Sure want to Delete');

    if (isDelete == true)
      this.http
        .delete(
          `https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=${id}`
        )
        .subscribe((result: any) => {
          if (result.result) {
            alert('Car Deleted Successfully');
            this.getAllCars();
          } else {
            alert(result.message);
          }
        });
  }
}
