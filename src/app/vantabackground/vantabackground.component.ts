import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import * as THREE from 'three';

declare let VANTA: any

@Component({
  selector: 'app-vantabackground',
  imports: [],
  templateUrl: './vantabackground.component.html',
  styleUrl: './vantabackground.component.css'
})
export class VantabackgroundComponent implements AfterViewInit, OnDestroy {
  private vantaEffect: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit():void {
    this.vantaEffect = VANTA.BIRDS({
      el: this.el.nativeElement,
      THREE: THREE,
      backgroundColor: 0x000000,
      color1: 0x00ff00,
      color2: 0xff0000,
      birdSize: 1.5,
      speedLimit: 3.0
    });
  }

  ngOnDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }


}
