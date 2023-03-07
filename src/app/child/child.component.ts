import { Component, ContentChild, ContentChildren, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item!: string;
  @ContentChildren('contentParagraph') contentParagraph!: ElementRef ;


  ngAfterViewInit() {
    console.log('ChildComponent');
  }

  ngAfterContentInit(){
    console.log('ContentChild');
  }


  ngAfterViewChecked() {
    console.log('ChildComponent');
  }

}