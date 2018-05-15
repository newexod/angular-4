import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

  // Экземпляр формы, внутри компонента
  form: FormGroup;
  // Инициализация формы (указать, как она связана с шаблоном, какие поля в ней есть)
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl(''),
      country: new FormControl('ru'),
      answer: new FormControl('No')
    });
  }

  onSubmit() {
    console.log('wow', this.form);
  }

}
