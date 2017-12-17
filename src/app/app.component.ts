/*
  Сервис - это централизованное хранилище или класс, через который можно общаться компонентам
  или через которые можно выносить туда общие методы и вызывать их в разных местах
  Грубо говоря - это маленькая библиотека
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars = [
    {
      name: 'Ford', 
      isSold: false
    },
    {
      name: 'Mazda', 
      isSold: true
    },
    {
      name: 'Bently',
      isSold: false      
    }
  ];

  addCarToList(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
  }
}
