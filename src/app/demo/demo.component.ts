import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  constructor() { }

  @ContentChild("paragraph")
  paragraphEl!: ElementRef;

  ngOnInit() {
    console.log(this.paragraphEl)
  }

  ngAfterContentInit() {
    this.paragraphEl.nativeElement.textContent = "This is a new paragraph"
    console.log(this.paragraphEl.nativeElement.textContent)
  }

}
