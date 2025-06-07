import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 


@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  articleUrl: SafeResourceUrl;

  constructor (private sanitizer: DomSanitizer) {
    this.articleUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://en.wikipedia.org/wiki/AI_boom');
  }



}
