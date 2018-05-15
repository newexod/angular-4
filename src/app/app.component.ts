import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

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

  defaultAnswer = 'No';
  defaultCountry = 'ru';

  formData = {};
  isSubmited = false;

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset(); // очистить форму
  }

  addRandomEmail() {
    const randomEmail = 'dimapulenko@gmail.com';
    // Если изначально заполнить всю форму валидным значением, а после нажать на кнопку "Добавить случайный email", то <input> для email заполнится случайным значением, а остальные поля будут пустыми
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randomEmail
    //   },
    //   country: '',
    //   answer: ''
    // });

    // Поэтому лучше использовать не setValue, a patchValue - динамически изменит конкретное поле
    this.form.form.patchValue({
      user: {
        email: randomEmail
      }
    });
  }

}
