import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  addCarStatus = '';
  inputText = '';
  
  constructor() { // Функция, которая вызывается, когда класс CarsComponent будет инициализироваться
  }

  addCar() {
    this.addCarStatus = 'Машина добавлена';
  }

  // 1 вариант
  // onKeyUp(event: Event) {
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }

  // 2 вариант
  // onKeyUp(value) {
  //   this.inputText = value;
  // }

  // 3 вариант по клику Enter
  onKeyUp(event) {
    this.inputText = event.target.value;
  }
}
