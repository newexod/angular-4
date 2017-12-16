import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None // задаёт компоненту значение, чтобы он не использовал локальные css стили и поэтому все стили будут видны глобально для всех компонентов (все <p></p> внутри cars.component.html имели одинаковые стили)
  // encapsulation: ViewEncapsulation.Native // удаляет все стили Bootstrap, при этом создаёт #shadow-root
  
})
export class CarsComponent {

  cars: [{name: string, year: number}] = [
    {
      name: 'Ford',
      year: 2015
    }, {
      name: 'Mazda',
      year: 2010
    }, {
      name: 'Audi',
      year: 2017
    }
  ];

  constructor() {
  }

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }  

}
