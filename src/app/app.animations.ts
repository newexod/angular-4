import { trigger, state, style, transition, animate } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  // void => * , где * - означает, что будем использовать любой переход состояния
  transition(':enter', [ // :enter === void => *
    style({
      opacity: 0
    }),
    animate(1500, style({
      opacity: 1
    }))
  ]),
  // * => void
  transition(':leave', animate(1500, style({ // :leave === * => void
    opacity: 0
  })))
]);



export const changeWidthTrigger = trigger('changeWidth', [
  // * => * - значает, что анимация будет применяться из любого состояния в любое состояние
  transition('* => *', [
    animate(1000, style({
      width: '10px',
      height: '10px'
    })),
    animate(1000, style({
      width: '*', // анимация ширины элемента до его собственного значения. В данном случае 200px. Работает для ширины и высоты
      height: '*'
    }))
  ])
]);