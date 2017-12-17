// ПЕРЕДАЧА ПАРАМЕТРОВ ВНУТРЬ ДИРЕКТИВЫ
import { 
  Directive, 
  ElementRef, 
  OnInit, 
  Renderer2, 
  HostListener, 
  HostBinding,
  Input 
} from '@angular/core';

@Directive({
  selector: '[appBackground]',
})

export class BackgroundDirective implements OnInit {
  // Значение директивы appBackground попадёт в переменную hoverColor
  @Input('appBackground') hoverColor; // по умолчанию будет зелёный цвет
  @Input() defaultColor: string = 'transparent'; // по умолчанию будет прозрачный цвет
  @HostBinding('style.backgroundColor') background: string;
  @HostBinding('class') classStyle: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    console.log(event);

    this.background = this.hoverColor;
    this.classStyle = 'white-text';
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    console.log(event);

    this.background = this.defaultColor;
    this.classStyle = 'black-text';
  }
}
