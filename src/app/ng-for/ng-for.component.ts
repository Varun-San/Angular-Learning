import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../Pipes/na.pipe';
import { ProgressBarComponent } from "../Reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule, NaPipe, ProgressBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  CourseName: string = 'angular';
  studentObj: any = {};

  cityList: string[] = ['Chennai', 'Mumbai', 'Kolkata', 'Hyderbad', 'delhi'];

  employeeArray: any[] = [
    { empId: 121, name: 'Varun', city: 'chennai', phno: 989898988, attendance:90 },
    { empId: 122, name: 'Arun', city: 'chennai', phno: 989898908, attendance:10 },
    { empId: 123, name: 'Raj', city: '', phno: 989898968, attendance:40 },
    { empId: 124, name: 'Ravi', city: 'chennai', phno: 989898948,attendance:20 },
    { empId: 125, name: 'Praveen', city: 'chennai', phno: 989894988,attendance:30 },
  ];
}
