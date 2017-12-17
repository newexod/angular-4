import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})

export class BackgroundDirective implements OnInit {
  // Renderer2 не устарел в отличии от Renderer
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';

    /* 
      Не всегда мы имеем доступ к DOM дереву (мобильное приложение, к примеру)
      Таким образом там не будет nativeElement
      На смену nativeElement приходит Renderer2
      ХОРОШИМ ТОНОМ ЯВЛЯЕТСЯ ИСПОЛЬЗОВАНИЕ RENDERER!!!!
    */
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'lightblue');

    // берется из app.component.css
    this.renderer.addClass(nativeElement, 'white-text')
  }
}