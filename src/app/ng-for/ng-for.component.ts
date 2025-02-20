import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  cityList: string[] = ['Chennai', 'Mumbai', 'Kolkata', 'Hyderbad', 'delhi'];

  employeeArray: any[] = [
    { empId: 121, name: 'Varun', city: 'chennai', phno: 989898988 },
    { empId: 122, name: 'Arun', city: 'chennai', phno: 989898908 },
    { empId: 123, name: 'Raj', city: 'chennai', phno: 989898968 },
    { empId: 124, name: 'Ravi', city: 'chennai', phno: 989898948 },
    { empId: 125, name: 'Praveen', city: 'chennai', phno: 989894988 },
  ];
}
