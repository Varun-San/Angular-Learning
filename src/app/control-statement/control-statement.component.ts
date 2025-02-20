import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [CommonModule, FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css',
})
export class ControlStatementComponent {
  div1Visible: boolean = true;
  isChecked: boolean = false;
  dayName: string = '';
  hideShowDiv1(isshow: boolean) {
    this.div1Visible = isshow;
  }

  cityList: string[] = ['pune', 'mumbai', 'thane', 'panji', 'hyderbad'];

  employeeArray: any[] = [
    { empId: 121, name: 'Varun', city: 'chennai', phno: 989898988 },
    { empId: 122, name: 'Arun', city: 'chennai', phno: 989898908 },
    { empId: 123, name: 'Raj', city: 'chennai', phno: 989898968 },
    { empId: 124, name: 'Ravi', city: 'chennai', phno: 989898948 },
    { empId: 125, name: 'Praveen', city: 'chennai', phno: 989894988 },
  ];
}
