import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userForm: FormGroup = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    userName: new FormControl('', Validators.email),
    city: new FormControl('', Validators.required),
    state: new FormControl('Tamil Nadu', Validators.required),
    zipCode: new FormControl('', Validators.required),
    isAgree: new FormControl(false, Validators.required),
  });

  onUserSave() {
    const formValue = this.userForm.value;
    console.log(formValue);
  }

  constructor() {
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      this.userForm.controls['state'].enable();
    }, 5000);
    const isValid = this.userForm.value;
  }
}
