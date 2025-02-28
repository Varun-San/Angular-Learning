import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from '../../Reusable/tabs/tabs.component';
import { Car, ICarList } from '../../model/Car';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, CommonModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent implements OnInit {
  //Creating a get Api using Constructor
  // constructor(private http: HttpClient) {}

  //Creating a get Api using Injector
  currentTab: string = '';

  @ViewChild(TabsComponent) myTabVc: TabsComponent | undefined;

  onTabChange(tabName: string) {
    this.currentTab = tabName;
  }
  http = inject(HttpClient);

  @ViewChild('textCity') cityTxt: ElementRef | undefined;
  readCity() {
    const value = this.cityTxt?.nativeElement.value;
    console.log(value);
  }

  ngOnInit(): void {
    this.getAllCars();
  }

  carDetails: ICarList[] = [];

  carObj: Car = new Car();

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
          this.carObj = new Car();
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
  resetForm() {
    this.carObj = new Car();
  }
}
