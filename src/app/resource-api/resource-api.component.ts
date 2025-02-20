import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css',
})
export class ResourceApiComponent {
  // Promise
  userList = resource({
    loader: () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json() as Promise<any[]>)
        .catch((res) => res.json() as Promise<any[]>);
    },
  });
  reload() {
    this.userList.reload();
  }
}
