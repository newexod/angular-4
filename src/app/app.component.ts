/* 
  Пайпы - это трансформеры, которые позволяют удобно форматировать выходные данные в шаблоне
  Есть какая-то модель. Мы можем применить к ней пайп и её отображение в шаблоне поменяется, однако, сама модель(сама переменная) изменяться не будет
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Dima Pulenko';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3]
    }
  };
}
