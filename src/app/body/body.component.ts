import { Component } from '@angular/core';
import { Page1Component } from './page1/page1.component';
import { Page2Component} from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

@Component({
  selector: 'app-body',
  imports: [
    Page1Component,
    Page2Component,
    Page3Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
