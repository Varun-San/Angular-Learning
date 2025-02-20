import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css',
})
export class NgStyleComponent {
  isChecked: boolean = false;
  divBckColor: string = '';
  addDiv1Color(color: string) {
    this.divBckColor = color;
  }

  myCss: any = {
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
  };
}
