import { Component } from '@angular/core';
import { divTrigger, changeWidthTrigger } from './app.animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [divTrigger, changeWidthTrigger]
})
export class AppComponent {
  isVisible = false;

  onAnimationStart(event: AnimationEvent) {
    console.log('Start: ', event);
  }

  onAnimationDone(event: AnimationEvent) {
    console.log('Done: ', event);
  }
}
