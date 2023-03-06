import { Component, ContentChild, ContentChildren, QueryList, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
    templateUrl: './child.component.html',
  
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('header') header: any;
  @ContentChildren('item') items!: QueryList<any>;
  

  ngAfterContentInit() {
    console.log(this.header);
    console.log(this.items);
  }
}