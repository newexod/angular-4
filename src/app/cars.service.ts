import { ConsoleService } from "./console.service";
import { Injectable } from "@angular/core";

@Injectable() // класс(СЕРВИС) CarsService становится типа Injectable и соответственно к нему можно импортировать различные сущности (СЕРВИС ConsoleService)
export class CarsService {

  constructor(private consoleService: ConsoleService) {}

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

  addCar(name: string) {
    this.cars.push({
      isSold: false,
      name // сокращенная запись от name: name
    });
    this.consoleService.log(`Машина ${name} была добавлена!`);
  }
}