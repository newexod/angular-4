import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  /**
   * Когда заходим в функцию transition, определяем, что будет state(:enter) (появление элемента в DOM)
   * Этому элементу задаём его исходные размеры, чтобы стартовать от них
   * Определяем новую группу
   * В группе - это те же анимации, которые начинаются в одно и то же время, но длятся по-разному
   * 1 анимация будет длиться 3сек - будет менять размер <div>
   * 2 анимация, которая стартует одновременно с 1 анимацией - будет менять цвет элемента, но за 6сек. 
   * За эти 6сек цвет меняется 3 раза (2сек - blue, затем 2сек - yellow, затем 2сек - pink)
   * Группа будет длится 6сек
   * И только потом за 1сек <div> вернётся в исходное состояние
   */

   /**
    * keyframes - ф-ция предназначена для декомпозиции времени анимации, для использования разных свойств
    * Передаётся в animate вместо style
    */
  transition(':enter', [
    style({
      width: '*',
      height: '*'
    }),
    group([ // объединяет в группу некоторые анимации
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