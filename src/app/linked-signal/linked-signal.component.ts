import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
})
export class LinkedSignalComponent {
  firstName = signal<string>('Chetan');
  lastName = signal<string>('John');

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions, previous) => {
      const fullName = newOptions + ' ' + this.lastName();
      return fullName;
    },
  });

  user = signal({
    id: 111,
    name: 'Varun',
  });
 
  email = linkedSignal({
    source: this.user,
    computation: (user) => `${user.name + user.id}@gmail.com`,
    equal: (a: any, b: any) => a.id !== b.id,
  });

  changeName() {
    this.firstName.set('Raghul');
  }

  changeId() {
    this.user.set({ id: 123, name: 'chetan' });
  }
}
