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
