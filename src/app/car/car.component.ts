import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  /*
    1 способ с помощью байндинга
   */
  // @Input() // сигнализирует компоненту о том, что carItem это входящий параметр
  // carItem: {name: string, year: number};


  /*
    2 способ с помощью alias
  */
  /* 
    alias - предназначен для того чтобы входящие параметр carItem 
    класть в переменные любого названия, которые мы хотим
  */
  /*
    параметр carItem будем складывать в переменную car
  */
  @Input('carItem') car: {name: string, age: number};
  private carItem = false;
}
