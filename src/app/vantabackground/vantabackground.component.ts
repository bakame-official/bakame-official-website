import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import * as THREE from 'three';

declare let VANTA: any

@Component({
  selector: 'app-vantabackground',
  imports: [],
  templateUrl: './vantabackground.component.html',
  styleUrl: './vantabackground.component.css'
})
export class VantaBackgroundComponent implements AfterViewInit, OnDestroy {

  private vantaEffect: any;

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    // Load Vanta.NET from CDN
    if (isPlatformBrowser(this.platformId)) { // Check if we are in the browser environment
    const threeScript = document.createElement('script'); // Create a script element for THREE.js
    threeScript.src = 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js';
  
   
        threeScript.onload = () => {
          const vantaScript = document.createElement('script'); // Create a script element for VANTA.NET
          vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
          vantaScript.onload = () => { 
            this.vantaEffect = (window as any).VANTA.NET({
            el: this.elementRef.nativeElement.querySelector('#vanta-background'),
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
          }) ;  
          };
          document.body.appendChild(vantaScript); // Append the VANTA.NET script to the body
        };
        document.body.appendChild(threeScript); // Append the THREE.js script to the body
  }
}

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
}