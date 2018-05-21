import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
  id: number;
  name: string;

  constructor(private route: ActivatedRoute) { }

  // 2 способа взятия информации и в зависимости от этого отобразить нужную машину
  ngOnInit() {
    // 1 способ -ы относится к роутам. Передаём id и name машины в адресной строке
    // snapshot - обращение к адресной строке
    // params - объект, в котором хранятся все элементы, которые прописаны в адресной строке
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];


    // 2 способ - наследник класса Observable, на который можно подписаться
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];
    });
  }

}
