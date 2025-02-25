import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  @Input() tabList: string[] = [];

  @Output() onTabClicked = new EventEmitter<string>();

  onTabChange(tabName: string) {
    this.onTabClicked.emit(tabName);
  }
}
