import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  carName = 'Ford'; // Публичное свойство
  carYear = 2015; // Публичное свойство

  getName() {
    return this.carName;
  }
}
