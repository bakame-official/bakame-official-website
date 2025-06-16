import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {}
