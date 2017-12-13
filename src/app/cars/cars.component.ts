import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-cars', // селектор по тегу
  // selector: '[app-cars]', // селектор по аттрибуту
  selector: '.app-cars', // селектор по классу
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
