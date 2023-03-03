import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-app';
  constructor(private cdr: ChangeDetectorRef){}

  @ViewChild('dobinput')
  dateOfBirth!: ElementRef<HTMLInputElement>;
  @ViewChild('ageinput')
  age!: ElementRef;
  @ViewChild(DemoComponent, { static: true })
  demoComponent!: DemoComponent;
  @ViewChildren('inputFields') inputFields!: QueryList<any>;

  calculateAge() {
    let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYewr = new Date().getFullYear();
    let age = currentYewr - birthYear;
    this.age.nativeElement.value = age;
  }

  items = [
    { value: 'Item 1' },
    { value: 'Item 2' },
    { value: 'Item 3' },
  ];

  logValues() {
    this.inputFields.forEach((input) => console.log(input.nativeElement.value));
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
    this.cdr.markForCheck();
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }
}
