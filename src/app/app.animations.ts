import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  transition(':enter', [
    style({
      width: '*',
      height: '*'
    }),
    group([
      animate(3000, style({
        width: '200px',
        height: '200px'
      })),
      animate(6000, keyframes([
        style({backgroundColor: 'blue'}),
        style({backgroundColor: 'yellow'}),
        style({backgroundColor: 'pink'})
      ]))
    ]),
    animate(1000)
  ]),
  transition(':leave', animate(1500, style({
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