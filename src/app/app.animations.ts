import { trigger, state, style, transition, animate } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  state('show', style({
    
  })),
  transition('void => show', [ // void - отвечает за отсутствие элемента <div> в DOM
    style({
      opacity: 0
    }),
    animate(1500, style({
      opacity: 1
    }))
  ]),
  transition('show => void', animate(1500, style({
    opacity: 0
  })))
]);