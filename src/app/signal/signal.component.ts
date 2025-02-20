import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  ///changeDetection: ChangeDetectionStrategy.OnPush, //Disabling the Change Detections.
})
export class SignalComponent {
  firstName = signal('Chetan');

  lastName = signal<string>('John');

  courseName: string = 'Angular';

  rollNo = signal<number>(0);
  increment() {
    this.rollNo.update((oldValue) => oldValue + 1);
  }

  constructor() {
    const value = this.firstName();
    setTimeout(() => {
      this.courseName = 'REact js';

      this.firstName.set('Varuns');
    }, 5000);
  }
}
