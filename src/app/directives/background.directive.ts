// ng g d backgroundDirective --spec=false
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackground]', // [] - указывает, что директиву нужно будет искать по аттрибуту в html
})

export class BackgroundDirective implements OnInit {
  /* 
    constructor - обычно используется для инъекций каких-то элементов
    приватная переменная element, у которой тип ElementRef
  */
  constructor(private element: ElementRef) {}

  ngOnInit() {
    console.log(this.element); // element является обычной DOM нодой, т.к. является типом ElementRef
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}