import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  firstName: string = 'Hi Hllo';
  rollno: number = 12;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = 'Enter the Full name';
  div1ClassName: string = 'bg-primary';
  selectedCity: string = '';

  constructor() {
    console.log(this.firstName);
    console.log(this.rollno);
    console.log(this.isActive);
    console.log(this.currentDate);
  }

  showWelcome() {
    alert('Welcome to the Angular 19');
  }

  onCityChange(event: Event): void {
    console.log(event);
    const value = (event.target as HTMLSelectElement).value;
    console.log('City Changed:', value);
  }
}
