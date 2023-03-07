import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;
  @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;

  items = ['Item 1', 'Item 2', 'Item 3'];
  newItem = '';


  ngAfterViewInit() {
    console.log('ParentComponent');
  }

  ngAfterViewChecked() {
    console.log('ParentComponent');
  }


  addItem() {
    this.items.push(this.newItem);
    this.newItem = '';
  }

}