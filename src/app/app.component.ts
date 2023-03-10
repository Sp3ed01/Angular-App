import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private currentUserService: UserServiceService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.currentUserService.setCurrentUser();
    }, 10000);
    this.currentUserService.setCurrentUser();
  }
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
