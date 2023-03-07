import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item!: string;

  ngAfterViewInit() {
    console.log('ChildComponent');
  }

  ngAfterViewChecked() {
    console.log('ChildComponent');
  }

}