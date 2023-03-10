import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthServiceService) { }

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

  login() {
    this.authService.login();
    alert("Te-ai logat cu succes");
  }

  logout(){
    this.authService.logout();
    alert("Te-ai delogat cu succes");
  }
}
