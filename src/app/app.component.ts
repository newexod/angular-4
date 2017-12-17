import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchCar = '';
  cars = [
    {name: 'Ford', description: 'WFW 1'},
    {name: 'Mazda', description: 'WFW 2'},
    {name: 'Bently', description: 'WFW 3'},
    {name: 'Audi', description: 'WFW 4'},
    {name: 'Mercedes', description: 'WFW 5'},
    {name: 'BMW', description: 'WFW 6'},
  ];

  // Через 3 секунды asyncTitle станет строкой Async title 3 seconds
  asyncTitle = Observable.of('Async title 3 seconds')
    .delay(3000);

  addCar() {
    this.cars.push({
      name: 'New Car',
      description: 'WFM'
    })
  }
}
