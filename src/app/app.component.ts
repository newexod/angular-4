import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // TD - Template Driven подход используется, когда валидация проходит внутри шаблона, а в компоненте прилагаем минимум усилий
  answers = [
    {
      type: 'Yes',
      text: 'Да'
    },
    {
      type: 'No',
      text: 'Нет'
    }
  ];

  submitForm(form: NgForm) {
    console.log('wow', form);
  }
  
}
