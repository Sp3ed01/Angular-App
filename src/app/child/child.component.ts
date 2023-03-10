import { Component, ContentChild, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item!: string;
  @ContentChildren('contentParagraph') contentParagraph?: QueryList<HTMLParagraphElement>;
  @ContentChild('header') header?: ElementRef<HTMLHeadingElement>;
  @ContentChild('btn') btn?: ElementRef<HTMLButtonElement>;
  @Input() number: number | undefined;

  displayNumber(num: number) {
    this.number = num;
  }


  // ngAfterViewInit() {
  //   console.log('ChildComponent');
  // }

  // ngAfterContentInit() {
  //   console.log('ContentChild');
  // }


  // ngAfterViewChecked() {
  //   console.log('ChildComponent');
  // }

}