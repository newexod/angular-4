import { Component, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input('carItem') car: {name: string, age: number};

  // ПОЛУЧЕНИЕ ЛОКАЛЬНОЙ РЕФЕРЕНЦИИ К ЭЛЕМЕНТУ не через @ViewChild, a через @ContentChild
  // @ContentChild - это ТОЛЬКО то что находится внутри <ng-content></ng-content> в car.component.html
  // @ViewChild - это ВСЁ что находится в car.component.html
  @ContentChild('carHeading') carHeading: ElementRef;

  // ngAfterViewInit будет вызван в том случае, если html уже занесён в DOM дерево
  ngAfterViewInit() {
    console.log(this.carHeading); // трижды вызовется console.log. в this.carHeading будет: ElementRef {nativeElement: h4.list-group-item-heading}
  }
}
