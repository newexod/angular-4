import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'BMW', 'Audi'];
  users = [
    {
      id: 3,
      name: 'Dima'
    },
    {
      id: 6,
      name: 'Yura'
    },
    {
      id: 9,
      name: 'Kolya'
    }
  ];
  
  constructor() { // Функция, которая вызывается, когда класс CarsComponent будет инициализироваться
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
