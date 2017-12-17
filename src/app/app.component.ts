import { Component } from '@angular/core';

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
}
