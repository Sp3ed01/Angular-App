import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello from Craiova';
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  removeItem() {
    this.items.pop();
  }

  updateTitle() {
    this.title = 'Salut din Alaska';
  }
}
