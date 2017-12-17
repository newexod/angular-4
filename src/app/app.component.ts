import { Component, OnInit } from '@angular/core';

import { CarsService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cars = [];
  
  constructor(private carsService: CarsService) {}

  /*
    В момент, когда компонент проинициализируется 
  */
  ngOnInit() {
    this.cars = this.carsService.cars; // в this.cars будет храниться массив cars из cars.service.ts
    console.log(this.cars)
  }
}
