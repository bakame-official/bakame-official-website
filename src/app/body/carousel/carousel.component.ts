import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PrimeNG, PrimeNGConfigType } from 'primeng/config';

@Component({
  selector: 'app-carousel',
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    ImageModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  partners : Partners[] = []; // Array to hold partner data


  constructor(private primengNG: PrimeNG) { 
   
    
  }

  ngOnInit() { // Initialize the partners array with data
    this.partners = [
      { title: 'Google', image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png'},
      { title: 'Microsoft', image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png'},
      { title: 'Amazon', image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png'},
      { title: 'IBM', image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210418122505/132_00_00_Mailheader-min.png'},
      { title: 'OpenAI', image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211028203138/GeeksforGeeks-Python-Foundation-Course-Learn-Python-from-Scratch-in-Hindi.png'}
    ];
  }

}

// Define the Partners interface to type the partner objects
export interface Partners {
    title: String; 
    image: String;
  }
