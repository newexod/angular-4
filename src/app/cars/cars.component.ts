import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'BMW', 'Audi', 'Mazda', 'Lada', 'Bentley'];
  
  constructor() { // Функция, которая вызывается, когда класс CarsComponent будет инициализироваться
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarText(car: string) {
    return car.length > 4 ? true : false;
  }
}
