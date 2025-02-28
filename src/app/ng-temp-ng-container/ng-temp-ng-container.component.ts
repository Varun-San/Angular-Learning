import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.css',
})
export class NgTempNgContainerComponent {
  employeeArray: any[] = [
    {
      empId: 121,
      isActive: false,
      name: 'Varun',
      city: 'chennai',
      phno: 989898988,
      attendance: 90,
    },
    {
      empId: 122,
      isActive: true,
      name: 'Arun',
      city: 'chennai',
      phno: 989898908,
      attendance: 10,
    },
    {
      empId: 123,
      isActive: false,
      name: 'Raj',
      city: '',
      phno: 989898968,
      attendance: 40,
    },
    {
      empId: 124,
      isActive: false,
      name: 'Ravi',
      city: 'chennai',
      phno: 989898948,
      attendance: 20,
    },
    {
      empId: 125,
      isActive: true,
      name: 'Praveen',
      city: 'chennai',
      phno: 989894988,
      attendance: 30,
    },
  ];

  isLoader: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoader = false;
    }, 3000);
  }

  isActive: boolean = true; // Default value
  toggleStatus(employee: any) {
    this.employeeArray = this.employeeArray.map((emp) => {
      if (emp.empId === employee.empId) {
        const updatedStatus = !emp.isActive;
        console.log(
          `Employee ${emp.name} is now ${updatedStatus ? 'Active' : 'Inactive'}`
        );
        return { ...emp, isActive: updatedStatus };
      }
      return emp;
    });
  }
}
