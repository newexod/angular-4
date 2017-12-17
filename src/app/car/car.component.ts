import {
  Component,
  Input,
  ContentChild,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

/*
  ЖИЗНЕННЫЙ ЦИКЛ КОМПОНЕНТА
  Все этапы жизненного цикла - это callback
  implements OnInit - говорит о том, какие интерфейсы мы наследуем в классе CarComponent для того, чтобы их реализовать
*/
export class CarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('carItem') car: {name: string, age: number};
  @Input() nameOfTheCar: string;

  @ContentChild('carHeading') carHeading: ElementRef;

  // 1. У любого класса в TS есть constructor. И он вызывается в первую очередь, когда компонент будет проинициализирован
  constructor() {
    console.log('constructor');
  }

  // 2. Единственный жизненный этап компонента, который принимает в себя некоторые параметры changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes); // в changes хранится параметр, который мы передаём в сам компонент с помощью @Input('carItem') car: {name: string, age: number}; Если изменим данный компонент, то сработает жизненный этап OnChanges
  }

  // 3. ngOnInit - вызывается один раз после установки свойств компонента, которые участвуют в привязке. Выполняет инициализацию компонента
  ngOnInit() {
    console.log('ngOnInit');    
  }

  // 4. ngDoCheck - вызывается при каждой проверке изменений свойств компонента сразу после методов ngOnChanges и ngOnInit
  ngDoCheck() {
    console.log('ngDoCheck');  
  }

  // 5. ngAfterContentInit - В комонент подгружаются какие-то данные (объект машина и дополнительное имя). После их подгрузки, ангуляр уже ими обладает - вызывается один раз данный метод
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // 6. ngAfterContentChecked - вызывается при проверке изменений содержимого, которое добавляется в представление компонента. Вызывается после метода ngAfterContentInit() и и после каждого последующего вызова метода ngDoCheck().
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // 7. ngAfterViewInit будет вызван в том случае, если html уже занесён в DOM дерево (весь View будет проинициализирован)
  // вызывается после инициализации представления компонента, а также представлений дочерних компонентов. Вызывается только один раз сразу после первого вызова метода ngAfterContentChecked()
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // 8. ngAfterViewChecked - проверка данного View
  // вызывается фреймворком Angular после проверки на изменения в представлении компонента, а также проверки представлений дочерних компонентов. Вызывается после первого вызова метода ngAfterViewInit() и после каждого последующего вызова ngAfterContentChecked()
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // 9. ngOnDestroy - вызывается перед тем, как удалить компонент.
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
