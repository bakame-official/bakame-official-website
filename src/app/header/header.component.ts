import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  imports: [
    CommonModule
   
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen = false; // Variable to track menu state

  toggleMenu() {  // Function to toggle menu, to toggle means open and close, it returns the opposite of the current state
    this.isMenuOpen = !this.isMenuOpen;
  }


}
