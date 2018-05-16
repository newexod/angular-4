import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';


interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cars: any;
  carName: string = '';
  colors = ['red', 'blue', 'green', 'pink', 'yellow', 'grey'];
  appTitle;

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
  }

  loadCars() {
    this.cars = this.carsService.getCars();
  }

  addCar() {
    this.carsService
      .addCar(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandomColor())
      .subscribe((data) => {
        console.log(data)
      });
  }

  deleteCar(car: Cars) {
    this.carsService.deleteCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }
}
