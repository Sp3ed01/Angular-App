import { Component, ViewChild, ViewChildren, QueryList, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child!: ChildComponent;
  @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;
  childNumber?: number;
  items: string[] = [];
  newItem = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.items = data['items'];
    });
  }

  addItem() {
    this.items.push(this.newItem);
    this.newItem = '';
  }
  generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000);
    this.child.displayNumber(randomNumber);
    this.childNumber = randomNumber;
  }
}