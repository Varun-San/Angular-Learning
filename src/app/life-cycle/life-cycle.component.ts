import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent
  implements
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor'); // 1
  }

  ngOnInit(): void {
    console.log('ngOnInit'); // 2 To load apis we will be using this.
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit'); //5 once your view is loaded completely then it will be loaded. View child, getting reference of Element.
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked'); //6
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit'); // 3
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked'); // 4
  }
  ngOnDestroy(): void {
    console.log('onDestory'); // It is loaded when we switch to another components.
  }
}
