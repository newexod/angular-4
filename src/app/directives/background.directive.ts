import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})

export class BackgroundDirective implements OnInit {
  /*
    'style.backgroundColor' - будет положена в переменную background
  */
  @HostBinding('style.backgroundColor') background: string;
  @HostBinding('class') classStyle: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    
  }

  /* 
    @HostListener - прослушка событий
    'mouseevent' - ивэнт вхождения мыши на элемент
    ['$event'] - принимает данный ивэнт
    mouseEnter - название метода, который будет выполняться (callback)
  */
  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    console.log(event); // MouseEvent

    // 2 ВАРИАНТ 
    this.background = 'lightblue';
    this.classStyle = 'white-text';

    /*
      1 ВАРИАНТ
      const {nativeElement} = this.element;
      this.renderer.setStyle(nativeElement, 'background-color', 'lightblue');
      this.renderer.addClass(nativeElement, 'white-text');
    */
  }

  /*
    mouseleave - ивэнт выхода мыши из элемента
  */
  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    console.log(event); // MouseEvent

    // 2 ВАРИАНТ
    this.background = 'transparent';
    this.classStyle = 'black-text';

    /*
      1 ВАРИАНТ
      const {nativeElement} = this.element;
      this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
      this.renderer.removeClass(nativeElement, 'white-text');
    */
  }
}

// изменение директив при событии