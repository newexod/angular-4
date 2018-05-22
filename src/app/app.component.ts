import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px'
      })),
      state('active', style({
        backgroundColor: 'orange',        
        width: '170px',
        height: '170px'
      })),
      transition('start <=> end', animate('800ms ease-in')), // <=> - обозначает start => end и end => start
      transition('start => active', animate(400)),
      transition('active => end', animate(400))
    ]),
    trigger('multi', [
      state('start', style({
        width: '150px',
        height: '150px',
        border: '5px solid black'
      })),
      state('end', style({
        width: '170px',
        height: '170px',
        background: 'blue'
      })),
      transition('start <=> end', [ // когда начался transition из одного состояния в другое
        style({ // сначала добавляем красный цвет
          background: 'red'
        }),
        animate(1500, style({ // красный цвет будет длится 1,5сек. Как только завершились 1,5сек, применяем жёлтый цвет
          background: 'yellow'
        })),
        animate(1000, style({ // после жёлтый цвет длится ещё 1сек. Как только завершилась 1сек, применяем ширину и высоту в 200px
          width: '200px',
          height: '200px'
        })),
        animate(1000) // применение ширины и высоты в 200px длится ещё 1сек и только после этого применяется state('end')
      ])
    ])
  ]
})
export class AppComponent {
  clickedDivState = 'start';
  multiState = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000);
  }
}
