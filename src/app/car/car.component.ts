import { Component, Input } from '@angular/core';

import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [ConsoleService] // провайдером для данного компонента будет ConsoleService
})
export class CarComponent {

  @Input() car;

  // создание приватной переменной consoleService, которая будет являться экземпляром класса ConsoleService
  constructor(private consoleService: ConsoleService) {}
  
  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
    this.consoleService.log(`${this.car.name} status = ${type}`);
  }

}
