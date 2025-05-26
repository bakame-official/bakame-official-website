import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { VantaBackgroundComponent } from './body/page1/vantabackground/vantabackground.component'; 

@Component({
  selector: 'app-root', // The selector is used to identify this component in the HTML
  standalone: true, // This component is standalone, meaning it can be used without being declared in an NgModule
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    BodyComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bakame-offical-web';
  
}
